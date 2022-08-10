import "../styles/global.css";
import type { AppProps } from "next/app";
import LayoutsTypes from "../types/layouts";
import { ReactElement } from "react";
import { wrapper } from "../store";

type AppLayoutProps = AppProps & {
  Component: LayoutsTypes;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
