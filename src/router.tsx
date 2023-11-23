import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PageAbout } from "./pages/PageAbout";
import { PageWelcome } from "./pages/PageWelcome";
import { Page404 } from "./pages/Page404";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Page404/>,
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
				element: <Navigate to="/welcome"/>
			},
		],
	},
]);

export default router;