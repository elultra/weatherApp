import React, { memo } from 'react';
import WeatherIcon from './WeatherIcon';

function kelvinToCelsius(props) {
      const temp = props;
      const tempFormula = Math.round(temp - 273.15);
      return tempFormula;
}
function spliteString(date) {
      const splitDateString = date.split(' ');
      return date = splitDateString[0];
}

function getTheDay(date) {
      const d = new Date(date);
      let getTheDay = d.getDay();
      switch (getTheDay) {
            case 1:
                  getTheDay = "Monday"
                  break;
            case 2:
                  getTheDay = "Tuesday"
                  break;
            case 3:
                  getTheDay = "Wednesday"
                  break
            case 4:
                  getTheDay = "Thursday"
                  break
            case 5:
                  getTheDay = "Friday"
                  break
            case 6:
                  getTheDay = "Saturday"
                  break
            case 0:
                  getTheDay = "Sunday"
                  break
            default:
                  getTheDay = ""
                  break;
      }
      return getTheDay;
}

function Forecast(props) {
      const { data } = props;
      return (
            <div className='flex text-white w-full py-16'>
                  {data.map((item) => {
                        const { temp_max, temp_min } = item.main;
                        return (
                              <div className='w-1/5 mx-[12px] rounded-md shadow-lg px-[12px] py-[10px] bg-white/10 flex flex-col justify-center' key={item.dt}>
                                    <p className='font-bold text-lg py-5'>{spliteString(item.dt_txt)}</p>
                                    <p className='font-bold text-lg py-5'>{getTheDay(item.dt_txt)}</p>
                                    <div className='w-3/5 h-auto mx-auto py-5 flex justify-center'>
                                          <WeatherIcon icon={item.weather[0].icon} />
                                    </div>
                                    <p className='py-5 text-2xl font-bold'>{kelvinToCelsius(item.main.temp)}<span>&#8451;</span></p>
                                    <div className='flex justify-around items-center m-auto w-full'>
                                          <p className='font-light text-md'>{kelvinToCelsius(temp_min)}<span>&#8451;</span></p>
                                          <div className='border-r border-gray-300 h-full w-2'></div>
                                          <p className='font-light text-md'>{kelvinToCelsius(temp_max)}<span>&#8451;</span></p>
                                    </div>
                              </div>
                        );
                  })}
            </div>
      );
}

export default memo(Forecast);