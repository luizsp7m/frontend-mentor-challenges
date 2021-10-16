import Header from "../components/Header";
import Layout from "../components/Layout";
import Product from "../components/Product";
import ProductInformation from "../components/ProductInformation";

import { Content } from '../styles/Home';

export default function Home() {
  return (
    <Layout>
      <Header />

      <Content>
        <Product />
        <ProductInformation />
      </Content>
    </Layout>
  );
}
