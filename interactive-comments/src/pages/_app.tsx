import "../styles/global.scss";
import { CommentProvider } from "../contexts/CommentContext";
import Modal from "react-modal";

Modal.setAppElement("#__next");

function MyApp({ Component, pageProps }) {
  return (
    <CommentProvider>
      <Component {...pageProps} />
    </CommentProvider>
  );
}

export default MyApp;
