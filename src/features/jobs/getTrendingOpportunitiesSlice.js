import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { api } from "../../services/api"
import { appUrls } from "../../services/urls";



const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const getTrendingOpportunities = createAsyncThunk(
    "jobs/getTrendingOpportunities", 
    async(values, { rejectWithValue }) => {
        try {
            const res = await api.get(appUrls?.FETCH_TRENDING_OPPORTUNITIES_URL);
            console.log(res, "app")
            return res?.data

        } catch (error) {
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

const getTrendingOpportunitiesSlice = createSlice({
    name: "jobs",
    initialState,
    extraReducers: builder => {
        builder.addCase(getTrendingOpportunities.pending, state => {
            state.loading = true
        });
        builder.addCase(getTrendingOpportunities.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(getTrendingOpportunities.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default getTrendingOpportunitiesSlice.reducer