import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { api } from "../../services/api"
import { appUrls } from "../../services/urls";



const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const getTechnicalSkills = createAsyncThunk(
    "technicalSkills/getTechnicalSkills", 
    async(values, { rejectWithValue }) => {
        try {
            const res = await api.get(appUrls?.GET_TECHNICAL_SKILLS_URL);
            console.log(res, "app")
            return res?.data

        } catch (error) {
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

const getTechnicalSkillsSlice = createSlice({
    name: "technicalSkills",
    initialState,
    extraReducers: builder => {
        builder.addCase(getTechnicalSkills.pending, state => {
            state.loading = true
        });
        builder.addCase(getTechnicalSkills.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(getTechnicalSkills.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default getTechnicalSkillsSlice.reducer