import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../services/api"
import { appUrls } from "../../services/urls";
import { toast } from "react-toastify";


const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const removeExperience = createAsyncThunk(
    "experience/removeExperience", 
    async(values, { rejectWithValue }) => {
        try {
            const res = await api.delete(appUrls?.DELETE_EXPERIENCE_URL, values); 
            console.log(res, "papa")
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
            return res?.data?.data

        } catch (error) {
            console.log(error, "err")
            toast(`${error?.data?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

const removeExperienceSlice = createSlice({
    name: "experience",
    initialState,
    extraReducers: builder => {
        builder.addCase(removeExperience.pending, state => {
            state.loading = true
        });
        builder.addCase(removeExperience.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(removeExperience.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default removeExperienceSlice.reducer