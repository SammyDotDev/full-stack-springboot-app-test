import { configureStore } from "@reduxjs/toolkit";
import softwareEngineerReducer from "./slices/softwareEngineerSlice";

export const store = configureStore({
	reducer: {
		softwareEngineer: softwareEngineerReducer,
	},
});

export const RootState = store.getState;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
