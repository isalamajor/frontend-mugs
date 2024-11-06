"use client";
import { useCart } from '@/app/context/ContextoCarrito';
import { useState } from 'react';
import { push as Menu } from 'react-burger-menu';
/* npm install react-burger-menu@^2.9.2 --save */

function BurgerCart(props) {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen); // Alterna el estado del menú al hacer clic en el icono
    };


    return (
        <div>
            <img src='/shopping-cart.svg' alt='cart' onClick={handleToggleMenu}></img>
        <Menu  {...props} isOpen={isOpen} right customBurgerIcon={false}>
            <h1>Your cart</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price}€ x {item.quantity}
                        <button onClick={() => removeFromCart(item.id)}>Delete</button>
                    </li>
                ))}
                {cartItems.length === 0 && <p>Nothing here...</p>}
            </ul>
            <button onClick={clearCart}>Empty cart</button>
        </Menu>
        </div>
    );
}

export default BurgerCart;
