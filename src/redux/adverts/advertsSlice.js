import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getAdverts, getAllAdverts } from './operationsAdverts';

const initialState = {
  allAdverts: [],
  items: [],
  favorites: [],
  isHidden: true,
  countOfItems: 8,
  filter: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addFavorites(state, action) {
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
    clearSelectedCar(state) {
      state.selectedCar = [];
    },
    addFilter(state, action) {
      state.filter = { ...action.payload };
      state.isHidden = false;
    },
    setHidden(state) {
      state.isHidden = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.items.push(...action.payload);
        state.countOfItems = action.payload.length;
      })

      .addCase(getAdverts.rejected, state => {
        console.log('error');
      })
      .addCase(getAllAdverts.fulfilled, (state, action) => {
        state.allAdverts.push(...action.payload);
      })
      .addCase(getAllAdverts.rejected, state => {
        console.log('error');
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

export const {
  setHidden,
  addFilter,
  clearItems,
  addFavorites,
  deleteFavorites,
} = advertsSlice.actions;
