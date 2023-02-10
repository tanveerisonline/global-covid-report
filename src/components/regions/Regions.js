import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getRegions from '../../redux/thunk/regions';
import Header from '../Header';

const Regions = () => {
  const { countryData } = useSelector((state) => state.regions);
  const { country } = useParams();
  let dataToShow = {
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    recovered: 0,
    todayRecovered: 0,
    active: 0,
    critical: 0,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions(country));
    dataToShow = countryData;
  }, []);

  return (
    <>
      <Header page="regions" />
      {countryData === undefined && (
        <div className="loading">
          <div className="loader" />
        </div>
      )}
      {countryData !== undefined && (
        <div className="main-container">
          <div className="total-regions-div">
            <img src={countryData.countryInfo.flag} alt="Country Flag" className="country-flag" />
            <div>
              <span>{country}</span>
              <span>{`${countryData.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Cases`}</span>
            </div>
          </div>
          <div className="cases-by-regions">
            DETAILED INFORMATION
          </div>
          <div className="regions">
            {Object.keys(dataToShow).map((key) => (
              <div key={key}>
                <span>{key}</span>
                <span>
                  {countryData[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Regions;
