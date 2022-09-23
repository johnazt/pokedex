import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/user.slice";

export default configureStore({
	reducer: {
		userName: UserSlice,
	},
});
