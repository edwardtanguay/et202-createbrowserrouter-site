/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IEmployee } from "../interfaces";
import { Spinner } from "../components/Spinner";

export const PageEmployee = () => {
	const [employee, setEmployee] = useState<IEmployee | null>(null);
	const { id } = useParams();

	useEffect(() => {
		setTimeout(async () => {
			const _employees: IEmployee[] = (
				await axios.get(
					"https://edwardtanguay.vercel.app/share/employees.json"
				)
			).data;
			if (id) {
				const _employee = _employees.find(
					(m) => m.employeeID === Number(id)
				);
				if (_employee) {
					setEmployee(_employee);
				}
			}
		}, 2000);
	}, []);

	return (
		<>
			{employee ? (
				<>
					<h2 className="text-4xl">
						{employee.firstName} {employee.lastName}
					</h2>
					<p className="text-xl italic">{employee.title}</p>
				</>
			) : (
				<Spinner/>
			)}
		</>
	);
};
