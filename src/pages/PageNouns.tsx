import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { INoun } from "../interfaces";

export const loader = async () => {
	return new Promise((resolve) => {
		setTimeout(async () => {
			const nouns = (
				await axios.get(
					"https://edwardtanguay.vercel.app/share/germanNouns.json"
				)
			).data;
			resolve(nouns);
		}, 2000);
	});
};

export const PageNouns = () => {
	const nouns = useLoaderData() as INoun[];
	return (
		<>
			<p>There are {nouns.length} nouns:</p>
			{nouns.map((noun, index) => {
				return (
					<div key={index}>
						<p>{noun.article} {noun.singular}</p>
					</div>
				);
			})}
		</>
	);
};
