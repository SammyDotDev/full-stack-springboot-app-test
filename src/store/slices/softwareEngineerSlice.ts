import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../AddSoftwareEngineer";

const initialState: {
	loading: boolean;
	softwareEngineers: {
		name: string;
		email: string;
		techStack: [];
	}[];
} = {
	loading: false,
	softwareEngineers: [],
};

export const fetchEngineers = () => async (dispatch: Dispatch) => {
	dispatch(setLoading(true));
	try {
		const res = await axios.get(API_URL);
		dispatch(setSoftwareEngineers(res.data));
	} catch (err) {
		console.error(err);
	} finally {
		dispatch(setLoading(false));
	}
};

const softwareEngineerSlice = createSlice({
	name: "softwareEngineer",
	initialState,
	reducers: {
		setLoading(state, action) {
			state.loading = action.payload;
		},
		setSoftwareEngineers(state, action) {
			console.log(action.payload);
			state.softwareEngineers = action.payload;
		},
	},
});

export const { setLoading, setSoftwareEngineers } =
	softwareEngineerSlice.actions;

export default softwareEngineerSlice.reducer;
