import { configureStore } from '@reduxjs/toolkit';
import {listReducer} from '../features/List/ListSlice';
import {itemDetailsReducer} from "../features/ItemDetails/ItemDetailsSlice";

export const store = configureStore({
  reducer: {
    list: listReducer,
    ItemDetails: itemDetailsReducer,
  },
});
