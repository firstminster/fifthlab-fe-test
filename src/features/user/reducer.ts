import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { filterUserByGender, getAllUsers, getUserByGender, searchByName } from './actions';
import User from '@/types';

type UserState = {
    users: User[];
    filteredUsers: User[];
    pending: boolean;
    error: boolean;
}

const initialState: UserState = {
    users: [],
    filteredUsers: [],
    pending: false,
    error: false
}


export const userReducer = createReducer(initialState, builder => {
    builder.addCase(getAllUsers.pending, state => {
        state.pending = true;
        state.error = false;
    }).addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.users = payload;
        state.filteredUsers = [...payload]
    }).addCase(getAllUsers.rejected, state => {
        state.pending = false;
        state.error = true;
    }).addCase(getUserByGender.pending, state => {
        state.pending = true;
        state.error = false;
    }).addCase(getUserByGender.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.users = payload;
    }).addCase(getUserByGender.rejected, state => {
        state.pending = false;
        state.error = true;
    }).addCase(filterUserByGender, (state, action: PayloadAction<any>) => {

        const filteredUsers = JSON.parse(JSON.stringify(state.users.filter((user) => {
            return user.gender === action.payload.toLowerCase()
        }
        )))
        return {
            ...state,
            filteredUsers:
                filteredUsers.length > 0 ? filteredUsers : [...state.users]
        }

    }).addCase(searchByName, (state, action: PayloadAction<any>) => {
        console.log(action.payload);
        const filteredUsers = JSON.parse(JSON.stringify(state.users.filter((user) => {
            return user.name.first.toLowerCase().includes(action.payload.toLowerCase())
        }
        )))
        console.log(filteredUsers);
        return {
            ...state,
            filteredUsers:
                action.payload.length > 0 ? filteredUsers : [...state.users]
        }
    });
})

export default userReducer;