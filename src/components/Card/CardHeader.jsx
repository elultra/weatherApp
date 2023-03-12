function CardHeader(props) {
	const { data, country } = props;
      console.log(country)
	return (
		<div className="pt-20 pb-10 px-16 flex justify-between bg-[#003366] rounded-t-lg xs:flex-col md:flex-row">
			<div>
				<div className="flex items-end pb-4">
					<p className="text-6xl text-white font-semibold pr-6">
							{Math.round(data[0].main.temp)}°C
					</p>
					<p className="text-lg text-white capitalize">
							{data[0].weather[0].description}
					</p>
				</div>
				<div className="gap-6 w-full mx-auto flex jusity-center items-center text-white pt-5">
					<div>
						<p className="uppercase font-semibold">humidity</p>
						<p>{data[0].main.humidity}%</p>
					</div>
					<hr className="h-[40px] bg-white w-[1px]" />
					<div>
						<p className="uppercase font-semibold">wind speed</p>
						<p>{data[0].wind.speed}m/s</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center self-start">
				<p className="text-white text-3xl font-bold tracking-wider xs:pt-6 md:pt-0">
                              {props.country.country}
				</p>
				<hr className="w-full h-[2px] bg-white mt-0.5" />
			</div>
		</div>
	);
}

export default CardHeader;
