import "../../styles/global.scss"
import { CommentProvider } from "../contexts/CommentContext";

function MyApp({ Component, pageProps }) {
  return (
    <CommentProvider>
      <Component {...pageProps} />
    </CommentProvider>
  );
}

export default MyApp;
