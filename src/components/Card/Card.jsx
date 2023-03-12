import React from "react";
import CardHeader from "./CardHeader";
import "./loadingAnimation.css";
import Forecast from "../Forecast/Forecast";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useState, useEffect } from "react";
import { getWeathers } from "../../utils/api";

const Card = (props) => {
	const [loading, isLoading] = useState(false);
	const [country, setCountry] = useState({});
	const [data, setData] = useState([]);
	useEffect(() => {
		const getData = async () => {
			isLoading(true);
			const { data } = await getWeathers(props.country);
			const country = data.slice(-1)[0];
			data.pop();
			setCountry(country);
			setData(data);
			isLoading(false);
		};
		getData();
	}, [props.country]);
	return (
		<>
			{data.length > 0 ? (
				<>
					<CardHeader data={data} country={country} />
					<div className="flex justify-between rounded-b-xl shadow-lg w-full overflow-hidden xs:flex-col lg:flex-row px-4">
						<SocialMedia />
						<Forecast data={data} />
					</div>
				</>
			) : (
				<div className="flex justify-center items-center pt-20">
					<div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
				</div>
			)}
		</>
	);
};

export default Card;
