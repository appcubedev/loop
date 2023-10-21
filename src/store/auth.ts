import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserT } from "types";

export interface AuthState {
	user?: UserT;
	authRequired: boolean;
}

const initialState: AuthState = {
	user: undefined,
	authRequired: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<any>) => {
			state.user = action.payload;
		},
		requireAuth: (state, action: PayloadAction<boolean>) => {
			state.authRequired = action.payload;
		},
		logout: (state) => {
			// state.user = null;
			// storage.clear();
		},
	},
});

export const { setUser, requireAuth, logout } = authSlice.actions;

export default authSlice.reducer;
