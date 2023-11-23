import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PageAbout } from "./pages/PageAbout";
import { PageWelcome } from "./pages/PageWelcome";

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

export default router;