import { Component } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// import { Provider } from "react-redux";
import "/styles/globals.css";
// import configureAppStore from "../src/stores/stores";

// const store = configureAppStore();

config.autoAddCss = false;
class MyApp extends Component {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        {/* <Provider store={store}> */}
        <Component {...pageProps} />
        {/* </Provider> */}
      </>
    );
  }
}

export default MyApp;
