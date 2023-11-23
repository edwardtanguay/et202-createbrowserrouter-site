import { useQuery } from "@tanstack/react-query";
import { IEmployee } from "../interfaces";
import * as appModel from "../appModel";
import { Spinner } from "../components/Spinner";

export const PageEmployees2 = () => {
	const employeesQuery = useQuery<IEmployee[]>({
		queryKey: ["employees"],
		queryFn: async () => appModel.getEmployees(),
	});

	if (employeesQuery.isLoading) {
		return <Spinner />;
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
