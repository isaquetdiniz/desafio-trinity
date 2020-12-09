import InformationsProvider from "../src/context/InformationsProvider";
import 'antd/dist/antd.css';

const MyApp = ({ Component, pageProps }) => {
  return (
  <InformationsProvider>
    <Component {...pageProps} />
  </InformationsProvider>
  )
}

export default MyApp
