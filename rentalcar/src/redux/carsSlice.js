import { createSlice } from '@reduxjs/toolkit';

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