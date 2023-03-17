import axios from 'axios';

export const getWeathers = (country?:string) => {
      return axios.get(`https://ericweatherapp.herokuapp.com/api/v1/weathers/${country}`);
}

export const getGeoLocation = () =>{
      return axios.get('https://ericweatherapp.herokuapp.com/api/v1/weathers')
}
