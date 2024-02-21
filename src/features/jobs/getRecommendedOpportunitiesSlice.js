import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { api } from "../../services/api"
import { appUrls } from "../../services/urls";



const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const getRecommendedOpportunities = createAsyncThunk(
    "jobs/getRecommendedOpportunities", 
    async(values, { rejectWithValue }) => {
        try {
            const res = await api.get(appUrls?.FETCH_RECOMMENDED_OPPORTUNITIES_URL);
            console.log(res, "app")
            return res?.data

        } catch (error) {
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

const getRecommendedOpportunitiesSlice = createSlice({
    name: "jobs",
    initialState,
    extraReducers: builder => {
        builder.addCase(getRecommendedOpportunities.pending, state => {
            state.loading = true
        });
        builder.addCase(getRecommendedOpportunities.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(getRecommendedOpportunities.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default getRecommendedOpportunitiesSlice.reducer