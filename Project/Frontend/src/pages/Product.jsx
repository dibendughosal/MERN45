import React from 'react'
import ProductItem from '../components/ProductItem'
import productData from '../data/productData'

function Product() {
  return (
    <div className='flex flex-wrap justify-center md:justify-start px-10 space-y-6 gap-5 py-5'>
     {
      productData.map( (data) => {
        return <div key={data.id}>
          <ProductItem 
          brandName={data.brandName}
          title={data.title}
          startingPrice={data.startingPrice}
          cuttprice={data.cuttprice}
          descrption={data.descrption}
          thumbnail={data.thumbnail}
          id={data.id}
          />
        </div>
      })
     } 
    </div>
  )
}

export default Product
