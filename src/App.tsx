import "./App.css";
import AddSoftwareEngineer from "./AddSoftwareEngineer";
import SoftwareEngineerData from "./SoftwareEngineerData";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
	return (
		<Provider store={store}>
			<div className="main">
				<AddSoftwareEngineer />
				<SoftwareEngineerData />
			</div>
		</Provider>
	);
}

export default App;
