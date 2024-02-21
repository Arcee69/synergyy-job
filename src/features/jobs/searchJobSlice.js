import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { api } from "../../services/api"
import { appUrls } from "../../services/urls";



const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const searchJob = createAsyncThunk(
    "job/searchJob", 
    async(values, { rejectWithValue }) => {
        try {
            const res = await api.get(appUrls?.SEARCH_JOB_URL + `?search_term=${values}` ); 
        
            console.log(res, "app")
            return res?.data

        } catch (error) {
            console.log(error, "err")
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

const searchJobSlice = createSlice({
    name: "job",
    initialState,
    extraReducers: builder => {
        builder.addCase(searchJob.pending, state => {
            state.loading = true
        });
        builder.addCase(searchJob.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(searchJob.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default searchJobSlice.reducer