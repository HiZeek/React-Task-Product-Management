import React from "react";
// import { productList } from "../../Data/db.json";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

  const { id } = useParams();
  // const selectedProduct = productList.find(p => p.id === id);
  // console.log(selectedProduct);

  return (
    <div className="product-details">
      {/* <div>
        <img src={selectedProduct.image} alt='Product_Image'></img>
        <img src={selectedProduct.image} alt='Product_Image'></img>
        <img src={selectedProduct.image} alt='Product_Image'></img>
      </div>
      <div>
        <img src={selectedProduct.image} alt='Product_Image'></img>
      </div>
      <div>
        <h2>{selectedProduct.title}</h2>
        <div>
          <h3 className='product_description_headings'>SIZE:</h3>
          <ul className='sizes'>
            <a href='#'><li className='size_xs'>XS</li></a>
            <a href='#'><li className='size_s active_size'>S</li></a>
            <a href='#'><li className='size_m'>M</li></a>
            <a href='#'><li className='size_l'>L</li></a>
          </ul>
        </div>
        <div>
          <h3 className='product_description_headings'>PRICE:</h3>
          <p className='product_description_price_tag'>&#36;50.00</p>
          <button className='cart_btn'>Add to Cart</button>
          <p className='product_description_text'>Find stunning women's cocktail dresses and<br></br>party dresses. Stand out in lace and<br></br>metallic cocktail dresses and party<br></br>dresses from all your favorite brands.</p>
        </div>
      </div> */}
      <h2>ProductDetails - { id }</h2>
    </div>
  );
};

export default ProductDetails;