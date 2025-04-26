import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { API_URL } from "./AddSoftwareEngineer";
import { AppDispatch, RootState } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchEngineers } from "./store/slices/softwareEngineerSlice";

const SoftwareEngineerData = () => {
	const dispatch = useDispatch<AppDispatch>();
	// const [loading, setLoading] = useState(false);
	const loading = useSelector(
		(state: RootState) => state.softwareEngineer.loading
	);
	const softwareEngineers = useSelector(
		(state: RootState) => state.softwareEngineer.softwareEngineers
	);
	// const [softwareEngineers, setSoftwareEngineers] = useState<
	// 	{
	// 		name: string;
	// 		email: string;
	// 		techStack: string[];
	// 	}[]
	// >([]);

	// const fetchEngineers = useCallback(async () => {
	// 	dispatch(setLoading(true));
	// 	try {
	// 		const res = await axios.get(API_URL);
	// 		dispatch(setSoftwareEngineers(res.data));
	// 	} catch (err) {
	// 		console.error(err);
	// 	} finally {
	// 		dispatch(setLoading(false));
	// 	}
	// }, [dispatch]);
	useEffect(() => {
        console.log(softwareEngineers)
		dispatch(fetchEngineers());
	}, [dispatch]);
	return (
		<div className="software-engineers-container">
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="main-engineers-container">
					{softwareEngineers.length === 0 ? (
						<p>No Engineer Found</p>
					) : (
						softwareEngineers.map((item) => (
							<div className="engineers-container">
								<p className="name">Name: {item?.name}</p>
								<p className="email">Email: {item?.email}</p>
								<div className="main-stack-container">
									<p>Tech Stack: </p>
									<div className="stack-container">
										{item?.techStack?.map((item) => (
											<p>{item}</p>
										))}
									</div>
								</div>
							</div>
						))
					)}
				</div>
			)}
		</div>
	);
};

export default SoftwareEngineerData;
