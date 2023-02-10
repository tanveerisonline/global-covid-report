import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { page } = props;
  return (
    <>
      {page === 'countries' && (
        <nav>
          <div>
            <i className="fas fa-chevron-left" />
            {new Date().getFullYear()}
          </div>
          <div>
            Countries COVID Cases
          </div>
          <div>
            <i className="fas fa-microphone" />
            <i className="fas fa-cog" />
          </div>
        </nav>
      )}
      {page === 'regions' && (
        <nav>
          <div>
            <Link to="/"><i className="fas fa-chevron-left" /></Link>
          </div>
          <div>
            Detailed COVID Cases
          </div>
          <div>
            <i className="fas fa-microphone" />
            <i className="fas fa-cog" />
          </div>
        </nav>
      )}
    </>
  );
};

Header.defaultProps = {
  page: '',
};

Header.propTypes = {
  page: PropTypes.string,
};

export default Header;
