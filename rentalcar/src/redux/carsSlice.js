import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import { fetchCars } from '../services/carsApi.js';

export const loadCars = createAsyncThunk(
    'cars/load',
    async(params, thunkAPI)=>{
        const res = await fetchCars(params);
        return {data: res.data, page: params.page ?? 1};
    }
);

const initialState = {
    list : [],
    status: 'idle',
};

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setCars: (state, action)=>{
        state.list = action.payload;
    },
    },
});

export const { setCars } = carsSlice.actions;
export default carsSlice.reducer;