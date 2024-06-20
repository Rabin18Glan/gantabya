import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
    user_id: string | null;
    name: string | null;
    email: string | null;
}

interface AuthState {
    token: string | null;
    status: boolean;
    userData: UserData;
}
const state:AuthState= JSON.parse(localStorage.getItem('auth')||'null');

const initialState: AuthState = {
    token:state.token,
    status: false,
    userData: {
        user_id: state.userData.user_id,
        name:state.userData.name,
        email:state.userData.email
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string, userData: UserData }>) => {
            state.token = action.payload.token;
            state.status = true;
            state.userData = action.payload.userData;
            const authData = {token:state.token ,userData:state.userData};
            localStorage.setItem('auth',JSON.stringify(authData));
        },
        logout: (state) => {
            state.token = null;
            state.status = false;
            state.userData = {
                user_id: null,
                name: null,
                email: null,
            };
            localStorage.removeItem('auth');
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
