import { createSlice } from "@reduxjs/toolkit";

// initialized state
const initialState =
{
    stockData: []
};

const stockSlice = createSlice({
    name: "stock",
    initialState,
    reducers:
    {
        // setting stock data in stockData 
        addStockDataAction: (state, action) => {
            // overriding stockData
            state.stockData = action.payload;
        },
        // pushing stock details in stockData 
        addStockDetailsAction: (state, action) => {
            state.stockData.push(action.payload);
        },
        // updating stock details in stockData 
        updateStockDetailsAction: (state, action) => {
            const { _id, stockData } = action.payload;

            const index = state.stockData.findIndex(stock => stock._id === _id);
            state.stockData[index] = { _id, ...stockData };
        }
    }
});

// exporting actions
export const {
    addStockDataAction,
    addStockDetailsAction,
    updateStockDetailsAction
} = stockSlice.actions;

// exporting reducer
export default stockSlice.reducer;