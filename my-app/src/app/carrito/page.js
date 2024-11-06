"use client";
import { useCart } from '../context/ContextoCarrito';

export default function Home() {
    const { cartItems, removeFromCart, clearCart } = useCart();

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <span>Qty: {item.quantity}</span>
                                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={clearCart}>Vaciar Carrito</button>
                </>
            )}
        </div>
    );
};

