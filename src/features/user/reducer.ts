import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { filterUserByGender, getAllUsers, getUserByNationality, getUserCSV, searchByName, toggleState } from './actions';
import User from '@/types';

type UserState = {
    users: User[];
    filteredUsers: User[];
    response: any;
    toggleStatus: boolean;
    pending: boolean;
    error: boolean;
}

const initialState: UserState = {
    users: [],
    filteredUsers: [],
    response: null,
    toggleStatus: true,
    pending: false,
    error: false
}


export const userReducer = createReducer(initialState, builder => {
    builder.addCase(getAllUsers.pending, (state: { pending: boolean; error: boolean; }) => {
        state.pending = true;
        state.error = false;
    }).addCase(getAllUsers.fulfilled, (state: { pending: boolean; users: any; filteredUsers: any[]; }, { payload }: any) => {
        state.pending = false;
        state.users = payload;
        state.filteredUsers = [...payload]
    }).addCase(getAllUsers.rejected, (state: { pending: boolean; error: boolean; }) => {
        state.pending = false;
        state.error = true;
    }).addCase(getUserCSV.pending, (state: { pending: boolean; error: boolean; }) => {
        state.pending = true;
        state.error = false;
    }).addCase(getUserCSV.fulfilled, (state: { pending: boolean; response: any; }, { payload }: any) => {
        state.pending = false;
        state.response = payload;
    }).addCase(getUserCSV.rejected, (state: { pending: boolean; error: boolean; }) => {
        state.pending = false;
        state.error = true;
    }).addCase(getUserByNationality.pending, (state: { pending: boolean; error: boolean; }) => {
        state.pending = true;
        state.error = false;
    }).addCase(getUserByNationality.fulfilled, (state: { pending: boolean; users: any; filteredUsers: any[]; }, { payload }: any) => {
        state.pending = false;
        state.users = payload;
        state.filteredUsers = [...payload]
    }).addCase(getUserByNationality.rejected, (state: { pending: boolean; error: boolean; }) => {
        state.pending = false;
        state.error = true;
    }).addCase(filterUserByGender, (state: { users: any[]; }, action: PayloadAction<any>) => {
        const filteredUsers = JSON?.parse(JSON?.stringify(state?.users?.filter((user) => {
            return user.gender === action.payload.toLowerCase()
        }
        )))
        return {
            ...state,
            filteredUsers:
                filteredUsers?.length > 0 ? [...filteredUsers] : [...state.users]
        }

    }).addCase(searchByName, (state: { users: any[]; }, action: PayloadAction<any>) => {
        const filteredUsers = JSON?.parse(JSON?.stringify(state?.users?.filter((user) => {
            return user.name.first.toLowerCase().includes(action.payload.toLowerCase())
        }
        )))

        return {
            ...state,
            filteredUsers:
                action.payload.length > 0 ? [...filteredUsers] : [...state.users]
        }
    }).addCase(toggleState, (state: any, action: PayloadAction<any>) => {
        return {
            ...state,
            toggleStatus: action.payload

        }
    });
})

