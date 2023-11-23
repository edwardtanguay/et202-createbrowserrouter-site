//https://edwardtanguay.vercel.app/share/germanNouns.json

import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
	return new Promise((resolve) => {
		setTimeout(async () => {
			const nouns = (
				await axios.get(
					"https://edwardtanguay.vercel.app/share/germanNouns.json"
				)
			).data;
			resolve(nouns);
		}, 1000);
	});
};

export const PageNouns = () => {
	const nouns = useLoaderData();
	return (
		<p>There are {nouns.length} nouns:</p>
	)
}