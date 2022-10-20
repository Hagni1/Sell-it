import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './productReducer'

export default configureStore({
    reducer: {
        products: productsReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false,
    })
})
