
"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    /* State for items of the cart */
    const [cartItems, setCartItems] = useState(() => {
        if (typeof window !== 'undefined') { /* Get cart if it was already created */
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    const[isMenuOpen, setIsMenuOpen] = useState(false);

    /* Update cart in localStorage */
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cartItems)); 
        }
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => { 
            const itemInCart = prevItems.find((item) => item.id === product.id);
            /* Quantity is 1 if the item was not in the cart, and is prev + 1 if it was */
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

    /* 'filter' keeps only the items that do not meet the condition, therefore, the desired product is not kept but deleted */
    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
    };
    
    const clearCart = () => {
        setCartItems([]);
    };

    const lowerQuantity = (productId) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === productId) {
                    if (item.quantity === 1) {
                        removeFromCart(productId);
                        return item; 
                    } else {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                }
                return item;
            });
        });
    };

    const increaseQuantity = (productId) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        });
    };

    const changeQuantity = (productId, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity: Math.max(1, parseInt(newQuantity)) || 1 } 
                    : item
            )
        );
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    
    }

    // To open and close the burger menu
    const toggleMenu = () => {
         if (!isMenuOpen) {setIsMenuOpen(true)} }

    const closeMenu = () => setIsMenuOpen(false);


    return (
        /* The Provider of a Context defines the state and functions that the components inside the Provider can access */
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, clearCart, lowerQuantity, increaseQuantity, changeQuantity, calculateTotal, isMenuOpen, toggleMenu, closeMenu }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
