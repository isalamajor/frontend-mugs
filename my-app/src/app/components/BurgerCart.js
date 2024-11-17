// BurgerCart.js
"use client";
import { useCart } from '@/app/context/ContextoCarrito';
import { FaRegTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import Link from "next/link";
import Image from 'next/image';
import '../stylesheets/BurgerCart.css';
import { useEffect, useRef } from 'react';

function BurgerCart() {
  const { cartItems, removeFromCart, clearCart, isMenuOpen, closeMenu, calculateTotal, increaseQuantity, lowerQuantity } = useCart();
  const menuRef = useRef(null); // Referencia al menú

  const subtotal = calculateTotal();

  // Controla el comportamiento de la clase de apertura/cierre del menú
  useEffect(() => {
    const cartMenu = menuRef.current;
    if (isMenuOpen) {
      cartMenu.classList.add('open');
    } else {
      cartMenu.classList.remove('open');
    }
  }, [isMenuOpen]);

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <>
      <div className="cart-menu" ref={menuRef}>
        <h1 className="cart-header">Your order</h1>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li className='item-container' key={item.id}>
              <Image className="burger-item-pic" src={`/img/${item.pic}`} alt={item.name} width={50} height={50} />
              <div className='cart-item'>
                <div className='item-price'>{item.name} - {item.price}€</div>
                <div className='item-operations'>
                    <div className='plus-minus-container'>
                        <FaPlus onClick={() => increaseQuantity(item.id)} className='left plus-minus-btn' />
                        <span className='plus-minus-num'>{item.quantity}</span>
                        <FaMinus onClick={() => lowerQuantity(item.id)} className='plus-minus-btn right' />
                    </div>
                  <div className="delete-btn-container">
                    <FaRegTrashAlt onClick={() => removeFromCart(item.id)} className='delete-btn' />
                  </div>
                </div>
              </div>
            </li>
          ))}
          <hr></hr>
          <div className='price-section'><h4>Subtotal</h4> <p>{subtotal} €</p></div>
          {cartItems.length === 0 && <p>Nothing here...</p>}
        </ul>
        <div onClick={clearCart} className='empty-cart cart-btn'>Empty cart</div>
        {cartItems.length > 0 
          ? <Link href="/carrito" rel="noopener noreferrer" className='cart-btn'>Check out →</Link>
          : <p className='cart-btn'>CheckOut</p>
        }
      </div>
    </>
  );
}

export default BurgerCart;
