import { createAsyncThunk } from '@reduxjs/toolkit';
import http from "../../../utils/axios";


//  Handle GET request for all users
export const getAllUsers = createAsyncThunk(
    "user/getAllUsers",
    async () => {
        try {
            const response = await http.get(`?results=50`); // Get first 50 users by default
            console.log(response);
            return response.data.results;
        } catch (error: any) {
            console.log(error);
            // return thunkAPI.rejectWithValue(error.message);
        }
    }
);