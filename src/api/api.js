import axios from 'axios';

export const getWeathers = () => {
      return axios.get('https://ericweatherapp.herokuapp.com/api/v1/weathers');
  }