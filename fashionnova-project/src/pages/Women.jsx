import React from 'react'
import Item from '../components/Item/Item'
import data_product from '../components/Assets/data'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import './CSS/Women.css'

const Women = () => {
  return (
    <>
        <div className="shop-category">
          <div className="shopcategory-indexSort">
            <p>
              <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
              Sort by <img src={dropdown_icon} alt="" />
            </div>
          </div>
          <div className="shopcategory-products">
            {data_product.map((item,i) => {
              for(let i = 1; i<=data_product.length; i++){
                if(item.id===i){
                    return <Item key={item} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                }
            }
            })}
          </div>
          <div className="shopcategory-loadmore">
            Explore More
          </div>
        </div>
        
    </>
  )
}

export default Women