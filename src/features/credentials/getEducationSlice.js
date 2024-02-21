import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { api } from "../../services/api"
import { appUrls } from "../../services/urls";



const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const getEducation = createAsyncThunk(
    "education/getEducation", 
    async(values, { rejectWithValue }) => {
        try {
            const res = await api.get(appUrls?.GET_EDUCATION_URL);
            console.log(res, "app")
            return res?.data

        } catch (error) {
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

const getEducationSlice = createSlice({
    name: "education",
    initialState,
    extraReducers: builder => {
        builder.addCase(getEducation.pending, state => {
            state.loading = true
        });
        builder.addCase(getEducation.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(getEducation.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default getEducationSlice.reducer