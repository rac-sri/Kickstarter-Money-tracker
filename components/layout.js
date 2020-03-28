import React, { PureComponent } from "react";
import Header from "./header";
import { Container } from "semantic-ui-react";
import Head from "next/head";

const Layout = props => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      <Header></Header>
      {props.children}
      <h1>Im a footer</h1>
    </Container>
  );
};

export default Layout;
