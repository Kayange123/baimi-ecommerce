import React from "react";
import Link from "next/link";
import { urlFor } from '../libs/sanityClient';


const HeroBanner = ({bannerData}) => {
  return (<div className="hero-banner-container">
    <div>
      <p className="beats-solo">
        {bannerData?.smallText}
      </p>
      <h3>{bannerData?.midText}</h3>
      <h1>{ bannerData?.largeText1 }</h1>
      <img src={urlFor(bannerData?.image)} alt="" className="hero-banner-image" />
      <Link href={`/product/${bannerData?.product}`}>
        <button className="button">{ bannerData?.buttonText }</button>
      </Link>
      <div className="desc">
        <h5>Description</h5>
        <p>{ bannerData?.description}</p>
      </div>
    </div>
    </div>
    );
};



export default HeroBanner;
