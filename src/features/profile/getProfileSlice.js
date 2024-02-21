import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { api } from "../../services/api"
import { appUrls } from "../../services/urls";



const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const getProfile = createAsyncThunk(
    "profile/getProfile", 
    async(values, { rejectWithValue }) => {
        try {
            const res = await api.get(appUrls?.GET_PROFILE_URL);
            console.log(res, "app")
            return res?.data

        } catch (error) {
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

const getProfileSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: builder => {
        builder.addCase(getProfile.pending, state => {
            state.loading = true
        });
        builder.addCase(getProfile.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(getProfile.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default getProfileSlice.reducer