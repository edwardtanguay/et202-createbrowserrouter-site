import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<h1 className="text-2xl mb-4">Data-Loading Site</h1>
			<Outlet />
		</>
	);
}

export default App;
