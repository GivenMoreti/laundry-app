import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "name",
    initialState: {
        name: [],
    },

    reducers: {
        getProfile: (state, action) => {
            state.name.push(...action.payload);
        },
    }
})

export const { getProfile} = profileSlice.actions;
export default profileSlice.reducer;