import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/welcome",
				element: <PageWelcome />,
			},
			{
				path: "/about",
				element: <PageAbout />,
			},
			{
				path: "/",
				element: <PageWelcome />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
