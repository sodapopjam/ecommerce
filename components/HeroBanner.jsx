import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h2>{heroBanner.largeText1}
      </h2>
      <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />
      
      <div>
        <div className="desc">
          <p>{heroBanner.desc}</p>
        </div>
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner