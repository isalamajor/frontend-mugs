"use client";
import { useCart } from '../context/ContextoCarrito';
import Image from 'next/image';
import styles from "../page.module.css";
import Navegacion from '../components/Navegacion.js';
import '../stylesheets/CheckOut.css';
import PaymentForm from '../components/PaymentForm';

export default function Home() {
    const { cartItems, calculateTotal } = useCart();
    const subtotal = calculateTotal();
    const shipping = 9.99;
    const taxed_price = parseFloat((subtotal * 0.05).toFixed(2)); // 5 % taxes
    const total = parseFloat((subtotal + shipping + taxed_price).toFixed(2));

    return (
    <div>
        <div className={`${styles.page} `} >
          <header className={styles.header}>
            <a href="/">
              <Image className={styles.headerlogo} src="/img/logo.png" width={600} height={100} alt="Logotipo"/>
            </a>
          </header>

          <main className={styles.main}>
            <Navegacion />
            <div className='grid'>
                <div className='summary-container'>
                  <h2 className='title-summary'>Summary</h2>
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
                        <div className='item-price'>{item.name} ({item.quantity}) - {item.price * item.quantity}€ </div>
                      </li>
                    ))}
                  </ul>
                  <div className='prices'>
                    <div className='price-section'><h4>Subtotal</h4> <p>{subtotal} €</p></div>
                    <div className='price-section'><h4>Shipping and handling</h4> <p>{shipping} €</p></div>
                    <div className='price-section'><h4>Taxes</h4> <p>{taxed_price} €</p></div>
                    <hr></hr>
                    <div className='price-section'><h4>Total</h4> <p>{total} €</p></div>
                  </div>
                </div>
                <div className='checkout-form'>
                    <PaymentForm price={total}></PaymentForm>
                </div>
            </div>
          </main>
          <Navegacion/>
        </div>
        <div className={styles.author}> All rights reserved - Isabel Hernández Barrio</div>
    </div>
    );
};

