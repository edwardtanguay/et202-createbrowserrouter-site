import { useEffect, useState } from "react";
import { IEmployee } from "../interfaces";
import axios from "axios";
import { ImSpinner7 } from "react-icons/im";

export const PageEmployees1 = () => {
	const [employees, setEmployees] = useState<IEmployee[]>([]);

	useEffect(() => {
		setTimeout(async () => {
			const response = await axios.get(
				"https://edwardtanguay.vercel.app/share/employees.json"
			);
			const _employees = response.data;
			setEmployees(_employees);
		}, 2000);
	}, []);

	return (
		<>
			{employees.length !== 0 ? (
				<>
					<p>There are {employees.length} employees:</p>
					{employees.map((employee) => {
						return (
							<p key={employee.employeeID}>
								{employee.firstName} {employee.lastName}
							</p>
						);
					})}
				</>
			) : (
				<ImSpinner7 className="text-6xl ml-3 mt-3 animate-spin opacity-50"/>
			)}
		</>
	);
};
