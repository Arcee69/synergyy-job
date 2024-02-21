import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { api } from "../../services/api"
import { appUrls } from "../../services/urls";



const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const getSingleJob = createAsyncThunk(
    "jobs/getSingleJob", 
    async(values, { rejectWithValue }) => {
        try {
            const res = await api.get(appUrls?.VIEW_SINGLE_JOB_URL + `/${values}`);
            console.log(res, "app")
            return res?.data

        } catch (error) {
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

const getSingleJobSlice = createSlice({
    name: "jobs",
    initialState,
    extraReducers: builder => {
        builder.addCase(getSingleJob.pending, state => {
            state.loading = true
        });
        builder.addCase(getSingleJob.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(getSingleJob.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default getSingleJobSlice.reducer