import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { api } from "../../services/api"
import { appUrls } from "../../services/urls";



const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const getAllOpportunities = createAsyncThunk(
    "jobs/getAllOpportunities", 
    async({ page }, { rejectWithValue }) => {
        try {
            const res = await api.get(`/opportunities/fetch?page=${page}&perPage=12`);
            console.log(res, "app")
            return res?.data

        } catch (error) {
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

const getAllOpportunitiesSlice = createSlice({
    name: "jobs",
    initialState,
    extraReducers: builder => {
        builder.addCase(getAllOpportunities.pending, state => {
            state.loading = true
        });
        builder.addCase(getAllOpportunities.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(getAllOpportunities.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default getAllOpportunitiesSlice.reducer