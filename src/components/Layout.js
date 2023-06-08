import Head from "next/head";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{"Super Hero"}</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <>
        <Header />
        {children}
      </>
    </>
  );
};

export default Layout;
