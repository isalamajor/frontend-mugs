
"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    /* Estado con los elementos del carrito */
    const [cartItems, setCartItems] = useState(() => {
        if (typeof window !== 'undefined') { /* Inicializa el carrito, si no había uno creado crea uno vacío, si sí, lo recupera */
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    /* useEffect ejecuta el código {...} cada vez de [cartItems] cambie */
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cartItems)); /* Actualizar el carrito en localStorage */
        }
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => { /* prevItems lod define automáticamente setCardItems como el conjunto de items que el carro tenía previamente */
            const itemInCart = prevItems.find((item) => item.id === product.id);
            /* Si el item estaba ya en el carro se suma 1 a la cantidad, sino su cantidad se setea a 1 */
            if (itemInCart) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            /* Filtra los elementos del carrito, quedándose con todos menos el que se ha seleccionado para borrar */
            prevItems.filter((item) => item.id !== productId)
        );
    };

    
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        /* El Provider de un Contexto define el contexto compartido (estado y funciones) a los que los componentes dentro del Provider pueden acceder */
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
