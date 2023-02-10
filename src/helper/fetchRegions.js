import axios from 'axios';

const fetchRegions = async (region) => axios.get(`https://disease.sh/v3/covid-19/countries/${region}`)
  .then((response) => ({ countryData: response.data }));

export default fetchRegions;
