import fetchCountries from '../../helper/fetchCountries';
import getCountriesAction from '../actions/countries';

const getCountries = () => async (dispatch) => {
  const data = await fetchCountries();
  dispatch(getCountriesAction(data));
};

export default getCountries;
