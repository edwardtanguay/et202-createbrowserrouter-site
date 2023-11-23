import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PageAbout } from "./pages/PageAbout";
import { PageWelcome } from "./pages/PageWelcome";
import { Page404 } from "./pages/Page404";
import { PageTodos } from "./pages/PageTodos";

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
				path: "/todos",
				element: <PageTodos />,
				loader: async () => {
					return new Promise((resolve) => {
						resolve(["eat lunch", "call doctor", "buy books", "create website"])
					})
				}
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