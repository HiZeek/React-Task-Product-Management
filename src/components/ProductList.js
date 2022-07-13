import '../styles/ProductList.css';
import First_Image from '../img/Image1.png';
import Second_Image from '../img/Image2.png';
import Third_Image from '../img/Image3.png';
import Fourth_Image from '../img/Image4.png';
import Cart from '../img/Empty_Cart_1.png'
import { Link } from 'react-router-dom';

const ProductList = () => {

    const productList = [
        {
            title: "Apollo Running Short",
            price: "$50",
            image: First_Image,
            id: 1,
            cart: Cart
        },
        {
            title: "Apollo Running Short",
            price: "$50",
            image: Second_Image,
            id: 2,
            cart: Cart
        },
        {
            title: "Apollo Running Short",
            price: "$50",
            image: Third_Image,
            id: 3,
            cart: Cart
        },
        {
            title: "Apollo Running Short",
            price: "$50",
            image: Fourth_Image,
            id: 4,
            cart: Cart
        },
    ]

  return (
    <div className='product-list'>
        {productList.map((product) => (
            <div className="product-card" key={product.id}>
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt="product-img" className='product-card-img' />
                    <div className="product-card-cart">
                        <img src={product.cart} alt="product-cart" className='cart' />
                    </div>
                    <p className='product-card-title'>{product.title}</p>
                    <p className='product-card-price'>{product.price}</p>
                </Link> 
            </div>
        ))}
    </div>
  )
}

export default ProductList;