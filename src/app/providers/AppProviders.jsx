import PropTypes from "prop-types";
import { Provider } from "react-redux";

import store from "@/app/store";

function AppProviders({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;