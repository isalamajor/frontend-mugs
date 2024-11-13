"use client";
import { useCart } from '@/app/context/ContextoCarrito';
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../stylesheets/BurgerCart.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus, FaMinus  } from "react-icons/fa6";
import Link from "next/link";
import Image from 'next/image';

/* npm install react-burger-menu@^2.9.2 --save */

function BurgerCart(props) {
    const { cartItems, removeFromCart, clearCart, lowerQuantity, increaseQuantity, changeQuantity } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen); // Alterna el estado del menú al hacer clic en el icono
    };

    return (
        <div>
        <img src='/shopping-cart.svg' alt='cart' onClick={handleToggleMenu}></img>
        <Menu isOpen={isOpen} right customBurgerIcon={false} className='burger-cart'>
            <h1>Your cart</h1>
            <ul>
                {cartItems.map((item) => (
                    <li className='cart-item-with-pic' key={item.id}>
                        <div><Image
                        className="item-pic"
                        src={`/img/${item.pic}`}
                        alt={item.name}
                        width={50}
                        height={50}
                        /></div>
                        <div className='cart-item'>
                            <div className='item-price'>{item.name} - {item.price}€ </div>
                            <div className='item-operations'>
                                <div className='plus-minus'>
                                    <div className='plus-minus-container'><FaPlus onClick={() => increaseQuantity(item.id)} className='plus-minus-btn'/></div>
                                    <div className='plus-minus-num'>{item.quantity} </div>
                                    <div className='plus-minus-container'><FaMinus onClick={() => lowerQuantity(item.id)} className='plus-minus-btn'/></div>
                                </div>   
                                <div className='delete-btn-container'><FaRegTrashAlt onClick={() => removeFromCart(item.id)} className='delete-btn'></FaRegTrashAlt></div>
                            </div>
                        </div>
                    </li>
                ))}
                {cartItems.length === 0 && <p>Nothing here...</p>}
            </ul>
            <div onClick={clearCart} className='empty-cart'>Empty cart</div>
            <Link href="/carrito" rel="noopener noreferrer" className='empty-cart check-out'> Check out →</Link>
        </Menu>
        </div>
    );
}

export default BurgerCart;
