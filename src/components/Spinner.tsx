import { ImSpinner7 } from "react-icons/im";

export const Spinner = () => {
	return (
		<p className="flex gap-3 items-center mb-4">
			<ImSpinner7 className="text-6xl ml-3 mt-3 animate-spin opacity-50" />
			<p className="text-3xl opacity-50">One moment please...</p>
		</p>
	);
};
