import React from 'react';
import CardHeader from '../CardHeader/CardHeader';
import './Card.css';
import Forecast from '../Forecast/Forecast';
import SocialMedia from '../SocialMedia/SocialMedia';
import {useState, useEffect} from 'react'
import { getWeathers } from '../../api/api';

const Card = () =>{
      const [loading, isLoading] = useState(false);
      const [data, setData] = useState([]);
      useEffect(()=>{
            const getData = async() =>{
                  isLoading(true);
                  const data = await getWeathers();
                  setData(data.data);
                  isLoading(false);
            }
            getData();
      },[])

      return(
                  <div className='Card'>
                        <CardHeader/>
                        {loading?
                        (
                              <div className="loader">
                                    <span className="loader__element"></span>
                                    <span className="loader__element"></span>
                                    <span className="loader__element"></span>
                              </div>
                        ):(
                              <div className='flex'>
                                    <SocialMedia />
                                    <Forecast data={data}/>
                              </div>
                        )
                        }
                  </div>
      );
}

export default Card;