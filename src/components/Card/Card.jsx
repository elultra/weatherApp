import React from 'react';
import CardHeader from './CardHeader';
import './loadingAnimation.css';
import Forecast from '../Forecast/Forecast';
import SocialMedia from '../SocialMedia/SocialMedia';
import { useState, useEffect } from 'react';
import { getWeathers } from '../../utils/api';

const Card = () => {
      const [loading, isLoading] = useState(false);
      const [data, setData] = useState([]);
      useEffect(() => {
            const getData = async () => {
                        isLoading(true);
                        const weatherData = await getWeathers();
                        setData(weatherData.list)
                        // data===[]? isLoading(false):setData(data);
                  }
            getData();
      }, [])

      return (
            <div className='w-8/12 h-3/5 m-auto z-99 rounded-lg shadow-lg'>
                  <CardHeader />
                  {loading?
                        (
                              <div className='flex justify-center items-center pt-20'>
                                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                              </div>
                        ) : (
                              <div className='flex justify-between bg-sky-600 rounded-b-xl backdrop-opacity-10 z-5'>
                                    <SocialMedia />
                                    <Forecast data={data} />
                              </div>
                        )
                  }
            </div>
      );
}

export default Card;