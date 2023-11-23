import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PageAbout } from "./pages/PageAbout";
import { PageWelcome } from "./pages/PageWelcome";
import { Page404 } from "./pages/Page404";
import { PageTodos } from "./pages/PageTodos";
import { PageNouns, loader as nounLoader } from "./pages/PageNouns";
import { PageEmployees1 } from "./pages/PageEmployees1";
import { PageEmployees2 } from "./pages/PageEmployees2";
import { PageEmployee } from "./pages/PageEmployee";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Page404 />,
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
						resolve([
							"eat lunch",
							"call doctor",
							"buy books",
							"create website",
						]);
					});
				},
			},
			{
				path: "/nouns",
				element: <PageNouns />,
				loader: nounLoader,
			},
			{
				path: "/about",
				element: <PageAbout />,
			},
			{
				path: "/employees1",
				element: <PageEmployees1 />,
			},
			{
				path: "/employees2",
				element: <PageEmployees2 />,
			},
			{
				path: "/employee/:id",
				element: <PageEmployee />,
			},
			{
				path: "/",
				element: <Navigate to="/welcome" />,
			},
		],
	},
]);

export default router;
