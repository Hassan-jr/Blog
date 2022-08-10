import "../styles/globals.css";
import Layout from "../Components/Layout";
import { Provider } from "react-redux";
import store from "../Components/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
