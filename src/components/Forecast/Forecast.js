import './Forecast.css';
import React, {memo} from 'react';
import WeatherIcon from './WeatherIcon';

function kelvinToCelsius(props){
      const temp = props;
      const tempFormula = Math.round(temp -273.15);
      return tempFormula;
}
function spliteString(date){
      const splitDateString = date.split(' ');
      return date = splitDateString[0];
}

function getTheDay(date){
      const d = new Date(date);
      let getTheDay = d.getDay();
      switch (getTheDay) {
            case 1:
                  getTheDay ="Monday"
                  break;
            case 2:
                  getTheDay="Tuesday"
                  break;
            case 3:
                  getTheDay="Wednesday"
                  break
            case 4:
                  getTheDay="Thursday"
                  break
            case 5:
                  getTheDay="Friday"
                  break
            case 6:
                  getTheDay="Saturday"
                  break
            case 0:
                  getTheDay="Sunday"
                  break
            default:
                  getTheDay=""
                  break;
      }
      return getTheDay;
}
function Forecast(props){
      const {data} = props;
      console.log(props)
      return(
            <div className='flex forecast-section'>
                  {data.map((item)=>{
                        const {temp_max, temp_min} = item.main;
                        return (
                              <div className='forecast' key={item.dt}>
                                    <p className='day py-5'>{spliteString(item.dt_txt)}</p>
                                    <p className='day py-5'>{getTheDay(item.dt_txt)}</p>
                                    <WeatherIcon icon={item.weather[0].icon} />
                                    <p className='py-5 text-md'>{kelvinToCelsius(item.main.temp)}<span>&#8451;</span></p>
                                    <div className='flex forecast-temp'>
                                          <p className='min clear-margin-padding'>{kelvinToCelsius(temp_min)}<span>&#8451;</span></p>
                                          <hr className='line' />
                                          <p className='min clear-margin-padding'>{kelvinToCelsius(temp_max)}<span>&#8451;</span></p>
                                    </div>
                              </div>
                        );
                  })}
            </div>
      );
}

export default memo(Forecast);