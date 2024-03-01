import { createSlice } from "@reduxjs/toolkit";

// initialized state
const initialState =
{
    vehicleData: []
};

const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState,
    reducers:
    {
        // setting vehicle data in vehicleData 
        addVehicleDataAction: (state, action) => {
            // overriding scrutinizedUser
            state.vehicleData = action.payload;
        },
        // pushing vehicle details in vehicleData 
        addVehicleDetailsAction: (state, action) => {
            state.vehicleData.push(action.payload);
        },
        // updating stock details in stockData 
        updateVehicleDetailsAction: (state, action) => {
            const { _id, vehicleData } = action.payload;

            const index = state.vehicleData.findIndex(vehicle => vehicle._id === _id);
            state.vehicleData[index] = { _id, ...vehicleData };
        }
    }
});

// exporting actions
export const {
    addVehicleDataAction,
    addVehicleDetailsAction,
    updateVehicleDetailsAction
} = vehiclesSlice.actions;

// exporting reducer
export default vehiclesSlice.reducer;