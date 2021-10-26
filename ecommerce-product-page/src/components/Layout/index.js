import { Container, Content } from "./styles";

import { Fragment } from "react";

import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>E-commerce Product Page | Home</title>
        <link rel="shortcut icon" href="../images/favicon-32x32.png" />
      </Head>

      <Container>
        <Content>
          {children}
        </Content>
      </Container>
    </Fragment>
  );
}