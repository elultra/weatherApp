import axios from 'axios';

export const getWeathers = () => {
      return axios.get('localhost:8080/api/v1/weathers');
}
