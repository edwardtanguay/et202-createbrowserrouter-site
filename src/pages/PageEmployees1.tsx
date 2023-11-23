import { useEffect, useState } from "react";
import { IEmployee } from "../interfaces";
import axios from "axios";
import React from "react";

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
			<p>There are {employees.length} employees:</p>
			{employees.map((employee) => {
				return (
					<React.Fragment key={employee.employeeID}>
						<p>
							{employee.firstName} {employee.lastName}
						</p>
					</React.Fragment>
				);
			})}
		</>
	);
};
