import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import http from "../../../utils/axios";

export const searchByName = createAction('user/searchByName')
export const toggleState = createAction('user/toggleState')
export const filterUserByGender = createAction('user/filterUserByGender')

//  Handle GET request for all users
export const getAllUsers = createAsyncThunk(
    "user/getAllUsers",
    async () => {
        try {
            const response = await http.get(`?results=100`); // Get first 50 users by default
            return response.data.results;
        } catch (error: any) {
            alert(error.message || 'Something went wrong');
            // return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//  Handle GET request to retrieve a user CSV
export const getUserCSV = createAsyncThunk(
    "user/getUserCSV",
    async () => {
        try {
            const response = await http.get(`?format=csv`); // Get first 50 users by default
            return response.data;
        } catch (error: any) {
            alert(error.message || 'Something went wrong');
            // return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//  Handle GET request for a gender
// export const getUserByGender = createAsyncThunk(
//     "user/getUserByGender",
//     async (query: string) => {
//         console.log(query);
//         try {
//             const response = await http.get(`?results=50&gender=${query}`); // Get first 50 users by default
//             return response.data.results;
//         } catch (error: any) {
//             alert(error.message || 'Something went wrong');
//             // return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

//  Handle GET request to retrieve the nationalities
export const getUserByNationality = createAsyncThunk(
    "user/getUserByNationality",
    async (query: string) => {
        const payload = query.toLowerCase()
        try {
            const response = await http.get(`?nat=${payload}`); // Get first 50 users by default
            return response.data.results;
        } catch (error: any) {
            alert(error.message || 'Something went wrong');
            // return thunkAPI.rejectWithValue(error.message);
        }
    }
);



