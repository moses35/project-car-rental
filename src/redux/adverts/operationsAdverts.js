import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64b3c9530efb99d862685f21.mockapi.io/api/v1';

export const getAdverts = createAsyncThunk(
  'adverts/getAll',
  async (page, thunkAPI) => {
    try {
      const res = await axios.get(`/adverts?page=${page}&limit=8`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
