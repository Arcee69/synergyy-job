import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"

import { api } from "../../services/api"
import { appUrls } from "../../services/urls"
import { toast } from "react-toastify"

const initialState = {
    loading: false,
    user: [],
    error: ""
}

export const loginUser = createAsyncThunk(
    "user/talent/loginUser", 
    async (data, { rejectWithValue }) => {
        try {
            const res = await api.post(appUrls?.LOGIN_URL, data);
            console.log(res, "elle")
            if (res?.status === 200) {
                const { token } = res?.data?.access_token;
                localStorage.setItem("token", token);
                localStorage.setItem("token", token);
                toast("Login Successfully", {  //`${res?.data?.status}`
                    position: "top-right",
                    autoClose: 3500,
                    closeOnClick: true,
                });
            }
            return res?.data
        }
        catch (err) {
            console.log(err, "err")
            toast(`${err?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            })
            return rejectWithValue(err?.data?.message)
        }
    }
)


const loginSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder => {
        builder.addCase(loginUser.pending, state => {
            state.loading = true
    });
        builder.addCase(loginUser.fulfilled, (state, action) => void(
            state.loading = false,
            state.user = action.payload,
            state.error = ""
        ));
        builder.addCase(loginUser.rejected, (state, action) => void(
            state.loading = false,
            state.user = [],
            state.error = action.payload
        ))
    }
});

export default loginSlice.reducer