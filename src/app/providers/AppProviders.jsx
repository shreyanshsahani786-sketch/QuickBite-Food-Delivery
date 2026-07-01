import PropTypes from "prop-types";

function AppProviders({ children }) {
  return children;
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;