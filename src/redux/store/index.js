// Importing reduxjs toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importing reducers
import usersReducer from "../features/usersSlice";
import loadingReducer from "../features/loadingSlice";
import entryReducer from "../features/entrySlice";
import vehiclesReducer from "../features/vehiclesSlice";

// Store
export const store = configureStore({
    reducer: {
        usersReducer,
        loadingReducer,
        entryReducer,
        vehiclesReducer        
    }
});