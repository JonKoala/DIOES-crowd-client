import axios from 'axios'
import yaml from 'js-yaml'

export default new Promise((res, rej) => {
  return axios.get('./appconfig.yaml')
    .then(response => {
      res(yaml.load(response.data));
    });
});