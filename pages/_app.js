import "bootstrap/dist/css/bootstrap.min.css";
import { ContextWrapper } from "../contexts/ContextProvider";
import "../styles/globals.css";
import "../styles/header.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  );
}
export default MyApp;
