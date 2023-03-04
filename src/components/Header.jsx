import React from "react";
import { BiMenu } from "react-icons/bi";
import Clock from "./Clock/Clock";
import weaths from "../images/weaths.png";

const Header = () => {
	return (
		<>
			<div className="bg-indigo-900 fixed w-full top-0 left-0 flex justify-between items-center px-[15px]">
				<div className="flex flex-1">
					<BiMenu className="text-[35px] mr-[20px] align-middle text-white" />
					<img src={weaths} alt="logo" className="h-16 w-auto" />
				</div>
				<div className="text-white flex-1">
					<Clock />
				</div>
				<div className="text-right flex-1">
					<input
						type="text"
						className="text-[16px] mr-[40px] text-white bg-tranparent w-[5px] h-[5px] p-[10px] border border-white shadow-lg rounded-xl relative focus:w-[250px]"
					></input>
				</div>
			</div>
		</>
	);
};

export default Header;
