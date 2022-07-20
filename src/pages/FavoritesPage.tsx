import React from 'react';
import {useAppSelector} from "../hooks/redux";

const FavoritesPage = () => {

  const {favorites} = useAppSelector(state => state.github)

  if (favorites.length === 0) return <p className={'text-center'}>No items.</p>

  return (
    <div className={'flex justify-center pt-10 mx-auto h-screen w-screen'}>
      <ul className={'list-none'}>
        {favorites.map((fav, i) => (
          <li
            className={'border-4'}
            key={`${fav}${i}`}
          >
            <a
              href={fav}
              target={'_blank'}
            >
              {fav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;