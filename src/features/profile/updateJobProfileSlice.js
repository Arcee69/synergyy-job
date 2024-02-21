import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../services/api"
import { appUrls } from "../../services/urls";
import { toast } from "react-toastify";


const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const updateJobProfile = createAsyncThunk(
    "profile/updateJobProfile", 
    async(values, { rejectWithValue }) => {
        try {
            const res = await api.post(appUrls?.SAVE_SINGLE_JOB_URL, values); 
            console.log(res, "papa")
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            })
            return res?.data?.data

        } catch (error) {
            console.log(error, "err")
            toast(`${error?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            })
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

const updateJobProfileSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: builder => {
        builder.addCase(updateJobProfile.pending, state => {
            state.loading = true
        });
        builder.addCase(updateJobProfile.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(updateJobProfile.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default updateJobProfileSlice.reducer