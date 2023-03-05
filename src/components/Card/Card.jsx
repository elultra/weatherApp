import React from 'react';
import CardHeader from './CardHeader';
import './loadingAnimation.css';
import Forecast from '../Forecast/Forecast';
import SocialMedia from '../SocialMedia/SocialMedia';
import { useState, useEffect } from 'react';
import { getWeathers } from '../../utils/api';

const Card = (props) => {
      const [loading, isLoading] = useState(false);
      const [data, setData] = useState([]);
      useEffect(() => {
            const getData = async () => {
                        isLoading(true);
                        const weatherData = await getWeathers(props.country);
                        setData(weatherData.data);
                        isLoading(false)
                  }
            getData();
      }, [props.country])

      return (
            <div className='w-8/12 m-auto z-99 bg-white/10 rounded-lg shadow-lg'>
                  <CardHeader />
                  {loading?
                        (
                              <div className='flex justify-center items-center pt-20'>
                                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                              </div>
                        ) : (
                              <div className='flex justify-between rounded-b-xl z-5 shadow-lg'>
                                    <SocialMedia />
                                    <Forecast data={data} />
                              </div>
                        )
                  }
            </div>
      );
}

export default Card;