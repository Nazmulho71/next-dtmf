import "../styles/globals.css";
import "../styles/styles.css";

import storeData from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={storeData}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
