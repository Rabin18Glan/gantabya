import { configureStore } from "@reduxjs/toolkit";
import colorMode from "./slices/colorMode";
import authSlice from "./slices/authSlice";
import mapSlice from './slices/mapSlice'


export const store = configureStore(
    {
        reducer:{
            auth:authSlice,
            map:mapSlice,
           
            mode:colorMode
          
        }
    }
)
// const saveState = (state: any) => {
//     try {
//       const serializedState = JSON.stringify(state);
//       localStorage.setItem("reduxState", serializedState);
//     } catch (err) {
//       // Handle errors while saving state
//       console.error("Error saving state to local storage:", err);
//     }
//   };
  
//   // Subscribe to store changes and save state to local storage
//   store.subscribe(() => {
//     saveState(store.getState());
//   });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
