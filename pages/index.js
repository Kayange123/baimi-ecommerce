import React from "react";
import { client } from "@/libs/sanityClient";
import { Product, FooterBanner, HeroBanner } from "../components/index";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Explore Our Products Now</h2>
        <p>Electronic Devices of many variations</p>
        <div className="products-container">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const queryBanner = '*[_type=="banner"]';
  const bannerData = await client.fetch(queryBanner);

  return {
    props: { products, bannerData },
  };
};

export default Home;
