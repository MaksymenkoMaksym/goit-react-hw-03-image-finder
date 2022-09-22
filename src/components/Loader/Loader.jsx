import PropTypes from 'prop-types'; // ES6
import { Dna } from 'react-loader-spinner';
const Loader = ({ isLoading }) => (
  <Dna
    visible={isLoading}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  />
);

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Loader;
