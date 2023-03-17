import React, { memo } from "react";
import WeatherIcon from "./WeatherIcon";
interface ForecastProps{
      main: {
            temp: number;
            temp_min: number;
            temp_max: number;
      };
      dt: number;
      dt_txt: string;
      weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
      }[];
}

function Forecast({ data }:any) {
	function spliteString(date: string) {
		const splitDateString = date.split(" ");
		return (date = splitDateString[0]);
	}
	return (
		<div className="flex text-white w-full py-16 overflow-x-auto text-center xs:flex-col lg:flex-row">
			{data.map(({dt, dt_txt, weather,main }:ForecastProps) => {
				const { temp_max, temp_min, temp } = main;
				const dayname = new Date(dt * 1000).toLocaleDateString("en", {
					weekday: "short",
				});
				return (
					<div
						className="w-1/5 mx-[12px] rounded-md shadow-lg px-[12px] py-[10px] bg-white/10 flex flex-col justify-center xs:flex-row xs:w-full xs:my-2 xs:gap-1 lg:flex-col lg:w-1/5"
						key={dt}
					>
						<p className="font-bold text-lg py-5 xs:my-auto xs:px-2">
							{spliteString(dt_txt)}
						</p>
						<p className="font-bold text-lg py-5 xs: my-auto">
							{dayname}
						</p>
						<div className="w-3/5 h-auto mx-auto py-5 flex justify-center xs:w-2/5">
							<WeatherIcon icon={weather[0].icon} />
						</div>
                                    <p className="xs:self-center font-bold xs:px-2">{weather[0].description}</p>
						<p className="py-5 text-2xl font-bold xs:my-auto xs:px-2">
							{Math.round(temp)}&#8451;
						</p>
						<div className="flex justify-around items-center m-auto w-full xs:w-2/6 lg:w-full gap-1">
							<p className="font-light text-md">
								{Math.round(temp_min)}&#8451;
							</p>
							<div className="border-r border-gray-300 h-full w-0 xs:hidden lg:inline-block"></div>
							<p className="font-light text-md">
								{Math.round(temp_max)}&#8451;
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default memo(Forecast);
