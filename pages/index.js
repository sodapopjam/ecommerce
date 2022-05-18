import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner

      <div>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div>
        {['Poduct 1', 'Produc2'].map((product) => product)}
      </div>

      Footer
    </>
  )
}

export default Home