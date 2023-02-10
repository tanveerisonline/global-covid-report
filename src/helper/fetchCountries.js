import axios from 'axios';

const fetchCountriesCases = async () => axios.get('https://disease.sh/v3/covid-19/countries')
  .then((response) => response.data);

const fetchTotalCases = async () => axios.get('https://disease.sh/v3/covid-19/all')
  .then((response) => response.data.cases);

const fetchCountries = async () => ({
  countries: await fetchCountriesCases(),
  totalTodayConfirmed: await fetchTotalCases(),
});

export default fetchCountries;
