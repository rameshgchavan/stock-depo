import { createSlice } from "@reduxjs/toolkit";

// initialized state
const initialState =
{
    entries: []
};

const entrySlice = createSlice({
    name: "entry",
    initialState,
    reducers:
    {
        // setting entries in entries 
        addEntriesAction: (state, action) => {
            // overriding entries
            state.entries = action.payload;
        },
        // pushing entry in entries 
        addEntryAction: (state, action) => {
            state.entries.push(action.payload);
        },
        // updating entry in entries 
        updateEntryAction: (state, action) => {
            const { _id, entry } = action.payload;

            const index = state.entries.findIndex(entry => entry._id === _id);
            state.entries[index] = { _id, ...entry };
        }
    }
});

// exporting actions
export const {
    addEntriesAction,
    addEntryAction,
    updateEntryAction
} = entrySlice.actions;

// exporting reducer
export default entrySlice.reducer;