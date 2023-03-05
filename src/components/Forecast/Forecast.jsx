import React, { memo } from 'react';
import WeatherIcon from './WeatherIcon';

function Forecast(props) {
      const { data } = props;
      function spliteString(date) {
            const splitDateString = date.split(' ');
            return date = splitDateString[0];
      }
      return (
            <div className='flex text-white w-full py-16'>
                  {data.map((item) => {
                        const { temp_max, temp_min, temp } = item.main;
                        const dayname = new Date(item.dt * 1000).toLocaleDateString('en', { weekday: 'short' })
                        return (
                              <div className='w-1/5 mx-[12px] rounded-md shadow-lg px-[12px] py-[10px] bg-white/10 flex flex-col justify-center' key={item.dt}>
                                    <p className='font-bold text-lg py-5'>{spliteString(item.dt_txt)}</p>
                                    <p className='font-bold text-lg py-5'>{dayname}</p>
                                    <div className='w-3/5 h-auto mx-auto py-5 flex justify-center'>
                                          <WeatherIcon icon={item.weather[0].icon} />
                                    </div>
                                    <p className='py-5 text-2xl font-bold'>{Math.round(temp)}&#8451;</p>
                                    <div className='flex justify-around items-center m-auto w-full'>
                                          <p className='font-light text-md'>{Math.round(temp_min)}&#8451;</p>
                                          <div className='border-r border-gray-300 h-full w-2'></div>
                                          <p className='font-light text-md'>{Math.round(temp_max)}&#8451;</p>
                                    </div>
                              </div>
                        );
                  })}
            </div>
      );
}

export default memo(Forecast);