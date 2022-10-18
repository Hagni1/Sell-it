import {
  createSlice,
  configureStore,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { ProductTypes } from "../types";
import Parse from "parse/react-native.js";

const initialState: any = { value: [] };

export const getProducts = createAsyncThunk(
  "values/getProductsStatus",
  async () => {
    //create your Parse Query using the Person Class you've created
    let query = new Parse.Query("Product");
    //run the query to retrieve all objects on Person class, optionally you can add your filters
    let queryResult = await query.find();
    //the resul is an arry of objects. Pick the first result
    return queryResult;
  }
);
export const addProduct = createAsyncThunk(
  "values/addProductsStatus",
  async (values: ProductTypes ) => {
    //create a new Parse Object instance
    const newProduct = new Parse.Object("Product");
    //define the attributes you want for your Object
    newProduct.set("title", values.title);
    newProduct.set("price", values.price);
    newProduct.set("image", values.image);
    newProduct.set("description", values.description);
    newProduct.set("localization", values.localization);
    newProduct.set("city", values.city);
    //save it on Back4App Data Store
    await newProduct.save();
    console.log("successfully added product");
    return values;
  }
);

const productsReducers = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.value = action.payload;
    }),
      builder.addCase(addProduct.fulfilled, (state, action) => {
        state.value.push(action.payload)
      });
  },
});

const store = configureStore({
  reducer: productsReducers.reducer,
});

export type AppDispatch = typeof store.dispatch;
// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

export default productsReducers.reducer;
