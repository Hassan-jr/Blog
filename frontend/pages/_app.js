import "../styles/globals.css";
import Layout from "../components/Layout"
//import { wrapper } from "../components/Redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      </Layout>
    
  );
}

// export default wrapper.withRedux(MyApp);
export default MyApp;

