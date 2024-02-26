// Importing reduxjs toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importing reducers
import usersReducer from "../features/usersSlice";
import loadingReducer from "../features/loadingSlice";

// Store
export const store = configureStore({
    reducer: {
        usersReducer,
        loadingReducer
    }
});