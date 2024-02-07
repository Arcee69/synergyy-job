import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { api } from "../../services/api"
import { appUrls } from "../../services/urls";



const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const getSoftSkills = createAsyncThunk(
    "softSkills/getSoftSkills", 
    async(values, { rejectWithValue }) => {
        try {
            const res = await api.get(appUrls?.GET_SOFT_SKILLS_URL);
            console.log(res, "app")
            return res?.data

        } catch (error) {
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

const getSoftSkillsSlice = createSlice({
    name: "softSkills",
    initialState,
    extraReducers: builder => {
        builder.addCase(getSoftSkills.pending, state => {
            state.loading = true
        });
        builder.addCase(getSoftSkills.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(getSoftSkills.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default getSoftSkillsSlice.reducer