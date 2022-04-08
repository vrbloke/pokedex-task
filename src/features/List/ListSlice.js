import {createSlice} from '@reduxjs/toolkit';
import jQuery from 'jquery';

const initialState = {
    no_loaded: 0,
    total_available: 0,
  listItems : [],
  filters: null // Move this to FilterBarSlice if it ever exists
};

export const listSlice = createSlice({
    name: 'list',
    initialState: initialState,
    reducers : {
        // Send request to pokeapi.co for more data and update store
        loadMore(state) {
            if(state.total_available !== 0 && state.no_loaded >= state.total_available) {
                alert('You have loaded all available data.');
                return;
            }
            state.no_loaded += 20;
        },

        updateLoaded(state) {
            state.no_loaded += 20;
        },

        updatePokemon(state, payload) {
            state.listItems[payload.payload.order] = payload.payload;
        },

        updateTotal(state, payload) {
            state.total_available = payload.payload
        }
    }
});

export const listReducer = listSlice.reducer;