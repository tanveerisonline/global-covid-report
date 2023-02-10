import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryItem = (props) => {
  const { country, backgroundColor } = props;

  return (
    <Link to={`/${country.country}`} style={{ backgroundColor }}>
      <div className="country">
        <img src={country.countryInfo.flag} alt="Country Flag" className="country-flag" />
        <div>
          <span>{country.country}</span>
          <span>{country.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
        </div>
        <i className="fas fa-arrow-circle-right" />
      </div>
    </Link>
  );
};

CountryItem.defaultProps = {
  country: {
    country: '',
    cases: 0,
    countryInfo: {
      flag: '',
    },
  },
  backgroundColor: '',
};

CountryItem.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string,
    cases: PropTypes.number,
    countryInfo: PropTypes.shape({
      flag: PropTypes.string,
    }),
  }),
  backgroundColor: PropTypes.string,
};

export default CountryItem;
