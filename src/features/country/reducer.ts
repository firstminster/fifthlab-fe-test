import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { getCountries } from './actions';

type CountryState = {
    countries: any[];
    pending: boolean;
    error: boolean;
}

const initialState: CountryState = {
    countries: [],
    pending: false,
    error: false
}

export const countryReducer = createReducer(initialState, builder => {

    builder.addCase(getCountries.pending, state => {
        state.pending = true;
        state.error = false;
    }).addCase(getCountries.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.countries = payload;
    }).addCase(getCountries.rejected, state => {
        state.pending = false;
        state.error = true;
    })
})