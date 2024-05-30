import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    user: null
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isAuth = action.payload;
        },
        logOut: (state) => {
            state.isAuth = false;
            state.user = null;
        }
    }
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
