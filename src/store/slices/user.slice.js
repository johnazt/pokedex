import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
	name: "username",
	initialState: "",
	reducers: {
		getName: (state, action) => {
			const username = action.payload;
			return username;
		},
	},
});

export const { getName } = UserSlice.actions;
export default UserSlice.reducer;
