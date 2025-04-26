import React, { useEffect, useState } from "react";
import TextField from "./components/TextField";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchEngineers,
	setLoading,
} from "./store/slices/softwareEngineerSlice";
import { AppDispatch, RootState } from "./store/store";

export const API_URL = "http://127.0.0.1:8080/api/v2/software-engineer";

const AddSoftwareEngineer = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [softwareEngineer, setSoftwareEngineer] = useState({
		name: "",
		email: "",
		techStack: "",
	});
	const [message, setMessage] = useState("sasa");
	const [disabled, setDisabled] = useState(true);
	// const [loading, setLoading] = useState(false);
	const loading = useSelector(
		(state: RootState) => state.softwareEngineer.loading
	);

	// const softwareEngineer = useSelector(
	// 	(state: RootState) => state.softwareEngineer.softwareEngineers
	// );

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const techStack = softwareEngineer.techStack.split(",");
		dispatch(setLoading(true));
		try {
			const res = await axios.post(
				API_URL,
				{ ...softwareEngineer, techStack: techStack },
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			console.log(res.data);
			setMessage(res.data.message);
			dispatch(fetchEngineers());
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
			setSoftwareEngineer({
				name: "",
				email: "",
				techStack: "",
			});
			setMessage("");
		}
	};

	useEffect(() => {
		if (
			softwareEngineer.name.trim().length === 0 ||
			softwareEngineer.email.trim().length === 0 ||
			softwareEngineer.techStack.trim().length === 0
		) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
		if (loading) {
			setDisabled(true);
		}
	}, [softwareEngineer, loading]);
	return (
		<div className="add-software-engineer">
			<p>{message}</p>
			<h1
				style={{
					fontSize: 24,
					color: "#000",
					fontWeight: 600,
					marginBottom: 20,
					textAlign: "center",
				}}
			>
				Add Software Engineer
			</h1>
			<form onSubmit={handleSubmit}>
				<TextField
					name="name"
					label="Name"
					type="text"
					onChange={(e) =>
						setSoftwareEngineer((prev) => ({ ...prev, name: e.target.value }))
					}
					value={softwareEngineer.name}
				/>
				<TextField
					name="email"
					label="Email"
					type="email"
					onChange={(e) =>
						setSoftwareEngineer((prev) => ({ ...prev, email: e.target.value }))
					}
					value={softwareEngineer.email}
				/>
				<TextField
					name="stack"
					label="Tech Stack"
					type="text"
					onChange={(e) =>
						setSoftwareEngineer((prev) => ({
							...prev,
							techStack: e.target.value,
						}))
					}
					value={softwareEngineer.techStack}
					placeholder="e.g. React, Node.js, Express, MongoDB"
				/>
				<button type="submit" disabled={disabled}>
					{loading ? "loading..." : "Add Software Engineer"}
				</button>
			</form>
		</div>
	);
};

export default AddSoftwareEngineer;
