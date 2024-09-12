import React from 'react'
import '../css/HomeEarPodes.css'
import earpod1 from "../assest/assest/products/airpodes/pod1.webp"
import earpod9 from "../assest/assest/products/airpodes/pod9.webp"
import earpod8 from "../assest/assest/products/airpodes/pod18.webp"
import earpod17 from "../assest/assest/products/airpodes/pod17.webp"
import earpod15 from "../assest/assest/products/airpodes/pod15.webp"
import earpod6 from "../assest/assest/products/airpodes/pod6.webp"

const products = [
    {
        id: 1,
        name: 'Airpod 1',
        price: '$100',
        originalPrice: '$200',
        image: earpod1,
        buttonText: 'Add to cart'
    },
    {
        id: 2,
        name: 'Airpod 2',
        price: '$200',
        originalPrice: '$300',
        image: earpod15,
        buttonText: 'Add to cart'
    },
    {
        id: 3,
        name: 'Airpod 3',
        price: '$90',
        originalPrice: '$120',
        image: earpod8,
        buttonText: 'Add to cart'
    },
    {
        id: 4,
        name: 'Airpod 4',
        price: '$120',
        originalPrice: '$220',
        image: earpod17,
        buttonText: 'Add to cart'
    },
    {
        id: 5,
        name: 'Airpod 5',
        price: '$150',
        originalPrice: '$300',
        image: earpod9,
        buttonText: 'Add to cart'
    },
    {
        id: 6,
        name: 'Airpod 6',
        price: '$60',
        originalPrice: '$150',
        image: earpod6,
        buttonText: 'Add to cart'
    }
]

const HomeEarPodes = () => {
  return (
    <div className='card-section'>
        <h2 className='text-2xl font-bold mb-3'>Top's AirPodes</h2>
        <div className='card-list'>
            {products.map((product) => (
                <div className='card' key={product.id}>
                    <img src={product.image} alt={product.name} className='product-image transform transition duration-300 ease-in-out hover:scale-110'/>
                    <div className='card-details'>
                        <h3>{product.name}</h3>
                        <p className='product-price'>{product.price}</p>
                        {product.originalPrice && (
                            <p className='original-price'>{product.originalPrice}</p>
                        )}
                        <button className='add-to-cart-btn'>{product.buttonText}</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HomeEarPodes