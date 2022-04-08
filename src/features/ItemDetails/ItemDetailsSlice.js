import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    inspecting: false,
    no: 1
}

export const itemDetailsSlice = createSlice({
    name: 'itemDetails',
    initialState: initialState,
    reducers : {
        inspecting(state,action) {
            state.inspecting = action.payload;
        },
        setNo(state, action) {
            state.no = action.payload;
        }
    }
});

export const itemDetailsReducer = itemDetailsSlice.reducer;