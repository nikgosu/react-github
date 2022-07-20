import React, {useEffect, useState} from 'react';
import {IRepo} from "../models/models";
import {useActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/redux";

const RepoCard = ({repo}: {repo: IRepo}) => {

  const {addFavorite, removeFavorite} = useActions()
  const {favorites} = useAppSelector(state => state.github)

  const [isFav, setIsFav] = useState(favorites.includes(repo.html_url))


  const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addFavorite(repo.html_url)
    setIsFav(true)
  }

  const removeFromFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    removeFavorite(repo.html_url)
    setIsFav(false)
  }

  useEffect(() => {
    console.log(favorites)
  }, [favorites])

  return (
    <div className={'border py-3 px-5 rounded mb-2 how:shadow-md hover:bg-gray-100 transition-all'}>
      <a href={repo.html_url} target={'_blank'}>
        <h2 className={'text-large font-bold'}>{repo.full_name}</h2>
        <p className={'text-sm'}>
          Forks: <span className={'font-bold mr-2'}>{repo.forks}</span>
          Watchers: <span className={'font-bold'}>{repo.watchers}</span>
        </p>
        <p className={'text-sm font-thin'}>{repo?.description}</p>
        <button
          onClick={isFav ? removeFromFavorite : addToFavorite}
          className={isFav ? 'py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all' : 'py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all'}
        >{isFav ? 'Remove' : 'Add'}</button>
      </a>
    </div>
  );
};

export default RepoCard;