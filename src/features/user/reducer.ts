import { createReducer } from '@reduxjs/toolkit';
import { getAllUsers } from './actions';

type UserState = {
    users: any[];
    pending: boolean;
    error: boolean;
}

const initialState: UserState = {
    users: [],
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
    }).addCase(getAllUsers.rejected, state => {
        state.pending = false;
        state.error = true;
    });
})

export default userReducer;