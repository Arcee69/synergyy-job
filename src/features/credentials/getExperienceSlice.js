import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { api } from "../../services/api"
import { appUrls } from "../../services/urls";



const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const getExperience = createAsyncThunk(
    "experience/getExperience", 
    async(values, { rejectWithValue }) => {
        try {
            const res = await api.get(appUrls?.GET_EXPERIENCE_URL);
            console.log(res, "app")
            return res?.data

        } catch (error) {
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

const getExperienceSlice = createSlice({
    name: "experience",
    initialState,
    extraReducers: builder => {
        builder.addCase(getExperience.pending, state => {
            state.loading = true
        });
        builder.addCase(getExperience.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(getExperience.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default getExperienceSlice.reducer