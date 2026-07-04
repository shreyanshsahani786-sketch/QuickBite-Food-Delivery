import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import store from "@/app/store";

function AppProviders({ children }) {
  return (
    <Provider store={store}>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2500,
          style: {
            borderRadius: "12px",
            background: "#333",
            color: "#fff",
          },
        }}
      />

      {children}
    </Provider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;