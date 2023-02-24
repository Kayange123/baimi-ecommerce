import React from 'react'
import Link from 'next/link';
import { urlFor } from '@/libs/sanityClient';

const FooterBanner = ({ footerBanner: {description,buttonText, discount, saleTime, largeText1, largetext2, smallText, product, midText, image } }) => {
  
  
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largetext2}</h3>
          <p>{ saleTime}</p>
        </div>
        <div className="right">
          <p>{ smallText}</p>
          <h3>{midText}</h3>
          <p>{description}</p>
          <Link href={`/product/${product}`}>
            <button>{buttonText }</button>
          </Link>
        </div>
        <img loading='lazy' src={urlFor(image)}  className="footer-banner-image"/>
      </div>
    </div>
  )
}

export default FooterBanner