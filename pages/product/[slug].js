import React, { useState } from "react";
import { client, urlFor } from "@/libs/sanityClient";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "@/components";
import { useStateContext } from "@/context/StateContext";

const productDetails = ({ product, featuredProducts }) => {
  const { image, name, description, price } = product;
  const [index, setIndex] = useState(0);
  const { qty, incrementQty, decrementQty, addToCart, setShowCart } =
    useStateContext();

  const handleBuyNow = () => {
    addToCart(product, qty);
    setShowCart(true);
  };
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
                key={item + i}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details :</h4>
          <p>{description}</p>
          <p className="price">$ {price}</p>
          <div className="quantity">
            <h3>quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decrementQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incrementQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => addToCart(product, qty)}
            >
              Add to cart
            </button>
            <button onClick={handleBuyNow} type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {featuredProducts?.map((item, i) => (
              <Product key={product?._id + i} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
    slug{
        current
    }
    }`;
  const products = await client.fetch(query);
  console.log(products);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type=="product" && slug.current =="${slug}"][0]`;
  const queryFeats = '*[_type=="product"]';
  const product = await client.fetch(query);
  const featuredProducts = await client.fetch(queryFeats);

  return {
    props: { product, featuredProducts },
  };
};

export default productDetails;
