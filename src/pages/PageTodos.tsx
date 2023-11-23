import { useLoaderData } from "react-router-dom";

export const PageTodos = () => {
	const todos = useLoaderData() as string[];
	return (
		<>
			<p>There are {todos.length} todos:</p>
			<ul className="list-disc ml-6">
				{todos.map((todo, index: number) => {
					return <li key={index}>{todo}</li>;
				})}
			</ul>
		</>
	);
};
