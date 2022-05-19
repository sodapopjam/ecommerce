import React from 'react'

import { Product, FooterBanner, HeroBanner } from '../components'

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {['Poduct 1', 'Produc2'].map((product) => product)}
      </div>

      <FooterBanner />
    </>
  )
}

export default Home