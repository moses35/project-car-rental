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
