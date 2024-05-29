import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import { useSelector } from 'react-redux';
export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});
export const useAppSelector = useSelector;
export default store;
