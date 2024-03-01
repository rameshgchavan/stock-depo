// Importing reduxjs toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importing reducers
import usersReducer from "../features/usersSlice";
import loadingReducer from "../features/loadingSlice";
import vehiclesReducer from "../features/vehiclesSlice";
import stockReducer from "../features/stockSlice";

// Store
export const store = configureStore({
    reducer: {
        usersReducer,
        loadingReducer,
        vehiclesReducer,
        stockReducer
    }
});