import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const LS_FAV_KEY = 'rfk'

export interface GitHubState {
  favorites: string[]
}

export const initialState: GitHubState = {
  favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const gitHubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
    },
    removeFavorite(state, action: PayloadAction<string>) {
      console.log(action.payload)
      state.favorites = state.favorites.filter(fav => fav !== action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
    }
  }
})

export const gitHubActions = gitHubSlice.actions
export const gitHubReducer = gitHubSlice.reducer