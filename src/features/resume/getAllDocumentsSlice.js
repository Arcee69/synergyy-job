import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { api } from "../../services/api"
import { appUrls } from "../../services/urls";



const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const getAllDocuments = createAsyncThunk(
    "documents/getAllDocuments", 
    async(values, { rejectWithValue }) => {
        try {
            const res = await api.get(appUrls?.GET_ALL_DOCUMENT_URL);
            console.log(res, "app")
            return res?.data

        } catch (error) {
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

const getAllDocumentsSlice = createSlice({
    name: "documents",
    initialState,
    extraReducers: builder => {
        builder.addCase(getAllDocuments.pending, state => {
            state.loading = true
        });
        builder.addCase(getAllDocuments.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(getAllDocuments.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default getAllDocumentsSlice.reducer