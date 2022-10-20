import {
  createSlice,
  configureStore,
  PayloadAction,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit";
import { ProductTypes } from "../types";
import Parse from "parse/react-native.js";
import { db } from "../firebase/init";
import { child, get, onValue, push, ref, set } from "firebase/database";

const initialState: any = { value: [] };
export const productRef = ref(db, "products");

const productsReducers = createSlice({
  name: "products",
  initialState,
  reducers: {
    getData(state, action: PayloadAction<[{}]>) {
      state = {...state,value:action.payload}
      return action.payload
    },
  }
});

const store = configureStore({
  reducer: productsReducers.reducer,
});
export const { getData } = productsReducers.actions
export type AppDispatch = typeof store.dispatch;
// Can still subscribe to the store


export default productsReducers.reducer;
