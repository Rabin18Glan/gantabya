import { IAuthPayload, IAuthState } from "@/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const state:IAuthState= JSON.parse(localStorage.getItem('auth')||'null');
console.log(state)
const initialState: IAuthState = {
    token:state&&state.token||undefined,
    status:state&&state.token?true:false||false,
    userData:state&&state.userData||undefined
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IAuthPayload>) => {
            state.token = action.payload.token; 
            state.status = true;
            state.userData = action.payload.userData;
            const authData = {token:action.payload.token ,userData:action.payload.userData};
            localStorage.setItem('auth',JSON.stringify(authData));
        },
        logout: (state) => {
            state.token = undefined;
            state.status = false;
            state.userData = undefined;
            localStorage.removeItem('auth');
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
