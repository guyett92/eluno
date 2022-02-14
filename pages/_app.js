import "bootstrap/dist/css/bootstrap.min.css";
import { ContextWrapper } from "../contexts/ContextProvider";
import { WalletContextWrapper } from "../contexts/WalletContext";
import "../styles/globals.css";
import "../styles/header.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <WalletContextWrapper>
        <Component {...pageProps} />
      </WalletContextWrapper>
    </ContextWrapper>
  );
}
export default MyApp;
