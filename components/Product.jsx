import React from 'react'
import { urlFor } from '@/libs/sanityClient';
import Link from 'next/link';
const Product = ({product:{name, image, slug, price}}) => {
return (
  <div >
    <Link href={`/product/${slug.current}`}>
      <div className="product-card">
        <img src={image && urlFor(image[0]).url()}
          className="product-image"
          height={250}
          width={250}
        />
        <p className="poduct-name">{ name}</p>
        <p className="poduct-price">${ price}</p>
      </div>
    </Link>
    </div>
  )
}

export default Product