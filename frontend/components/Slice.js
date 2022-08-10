import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    value: 30,
};

export const testSlice = createSlice({
    name: 'testSlice',
    initialState,
    reducers: {
     inc: ()=>{
        initialState = initialState + 10;
     },

     dec: ()=>{
        initialState = initialState - 10;
     },
    },
})

export const { inc, dec } = testSlice.actions;
export default testSlice.reducer;