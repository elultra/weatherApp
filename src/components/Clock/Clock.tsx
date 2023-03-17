import React, { useState, useEffect } from "react";

function Clock() {
	const [time, setTime] = useState(new Date().toLocaleString());

	useEffect(() => {
		const intervalID = setInterval(() => tick(), 1000);
		return () => clearInterval(intervalID);
	}, []);

	function tick() {
		setTime(new Date().toLocaleString());
	}

	return <h3 className="time">{time}</h3>;
}

export default Clock;
