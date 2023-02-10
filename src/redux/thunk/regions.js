import fetchRegions from '../../helper/fetchRegions';
import getRegionsAction from '../actions/regions';

const getRegions = (region) => async (dispatch) => {
  const data = await fetchRegions(region);
  dispatch(getRegionsAction(data));
};

export default getRegions;
