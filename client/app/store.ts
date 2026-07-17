import {configureStore} from "@reduxjs/toolkit";
import { messagesReducer } from "./contactSlice";

export const store = configureStore({
  reducer: {
    contacts: messagesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;