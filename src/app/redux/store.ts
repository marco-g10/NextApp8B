import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({  //creamos nuestro stroe
    reducer: {
        user: userReducer //hacemos referencia a nuestro userSlice, el nombre puede variar
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;