import { useQuery } from "@tanstack/react-query";
import { ImSpinner7 } from "react-icons/im";
import { IEmployee } from "../interfaces";
import * as appModel from "../appModel";

export const PageEmployees2 = () => {
	const employeesQuery = useQuery<IEmployee[]>({
		queryKey: ["employees"],
		queryFn: async () => appModel.getEmployees(),
	});

	if (employeesQuery.isLoading) {
		return <p className="flex gap-3 items-center mb-4">
			<ImSpinner7 className="text-6xl ml-3 mt-3 animate-spin opacity-50" />
			<p className="text-3xl opacity-50">Please wait...</p>
		</p>;
	}
	if (employeesQuery.isError) {
		return <pre>there was an error</pre>;
	}

	return (
		<>
			{employeesQuery.data && (
				<>
					<p>There are {employeesQuery.data.length} employees:</p>
					{employeesQuery.data.map((employee) => {
						return (
							<p key={employee.employeeID}>
								{employee.firstName} {employee.lastName}
							</p>
						);
					})}
				</>
			)}
		</>
	);
};
