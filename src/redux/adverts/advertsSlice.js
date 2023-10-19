import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getAdverts } from './operationsAdverts';

const initialState = {
  items: [],
  favorites: [],
  isLoading: false,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addFavorites(state, action) {
      console.log(action.payload);
      state.favorites.push(action.payload);
    },
    deleteFavorites(state, action) {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload
      );
    },
    clearItems(state) {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.items.push(...action.payload);
        state.isLoading = false;
      })
      .addCase(getAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdverts.rejected, state => {
        state.isLoading = false;
      });
  },
});

const advertsPersistConfig = {
  key: 'adverts',
  storage,
  whitelist: ['favorites'],
};
export const persistedAdvertsSlice = persistReducer(
  advertsPersistConfig,
  advertsSlice.reducer
);

export const { clearItems, addFavorites, deleteFavorites } =
  advertsSlice.actions;
