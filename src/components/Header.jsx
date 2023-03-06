import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Clock from "./Clock/Clock";
import weaths from "../images/weaths.png";

const Header = (props) => {
      const [inputValue, setInputValue] = useState("");
      const handleChange = (e) =>{
            setInputValue(e.target.value)
            props.onChange(e.target.value)
      }
	return (
		<>
			<div className="bg-[#003366] fixed w-full top-0 left-0 flex justify-between items-center px-[15px]">
				<div className="flex flex-1 items-center">
					<BiMenu className="text-[35px] mr-[20px] align-middle text-white" />
					<img src={weaths} alt="logo" className="h-16 w-auto" />
				</div>
				<div className="text-white flex-1">
					<Clock />
				</div>
				<div className="text-right flex-1">
					<input
						type="text"
						className="text-lg mr-10 text-white bg-transparent w-2 h-3 p-3 border-2 border-white rounded-full relative focus:w-1/4"
                                    value={inputValue}
                                    onChange={handleChange}
					></input>
                              <div className="w-1 h-3 absolute bg-white top-[40px] right-[52px] rotate-[135deg]"></div>
				</div>
			</div>
		</>
	);
};

export default Header;
