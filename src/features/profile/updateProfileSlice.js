import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../services/api"
import { appUrls } from "../../services/urls";
import { toast } from "react-toastify";


const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const updateProfile = createAsyncThunk(
    "profile/updateProfile", 
    async(values, { rejectWithValue }) => {
        try {
            const res = await api.post(appUrls?.UPDATE_PROFILE_URL, values); 
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

const updateProfileSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: builder => {
        builder.addCase(updateProfile.pending, state => {
            state.loading = true
        });
        builder.addCase(updateProfile.fulfilled, (state, action) => void(
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        ));
        builder.addCase(updateProfile.rejected, (state, action) => void(
            state.loading = false,
            state.data = [],
            state.error = action.payload
        ))
    }
});


export default updateProfileSlice.reducer