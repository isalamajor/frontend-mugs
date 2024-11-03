"use client";
import Image from "next/image";
import styles from "../../page.module.css";
import Navegacion from '../../components/Navegacion.js';
import Link from 'next/link';
import lista_productos from "@/app/components/lista_productos";
import { useParams } from 'next/navigation';
import '../../stylesheets/ProductoPage.css';
import React, { useRef } from 'react';
import Slider from "react-slick";
import MySlider from "@/app/components/MySlider";


export default function Home() {
    const { name } = useParams();
    const product_name = decodeURIComponent(name);
    const producto = lista_productos.find(producto => producto.name === product_name);

    // Carrusel de imagenes vertical
    /*const carouselRef = useRef(null);
    const handleWheel = (event) => {
      if (carouselRef.current) {
        event.preventDefault();
        carouselRef.current.scrollTop += event.deltaY;
      }
    };*/

    return (
      <div className={styles.page}>
        <header className={styles.header}>
          <a href="/">
            <Image className={styles.headerlogo} src="/img/logo.png" width={600} height={100} alt="Logotipo"/>
          </a>
        </header>

        <main className={styles.main}>
          <Navegacion />

          <div className="contenedor-principal">
            <h1>{product_name}</h1>
            
            <div className="contenedor-taza">
              <div className="imagenes-tazas">
                <MySlider
                producto={product_name}>
                </MySlider>

                <Image
                className="imagen-taza"
                src={`/img/${producto.pic}`}
                alt={product_name}
                width={200}
                height={200}
                />
              </div>

              <div className="contenedor-texto-taza">
                <div>{producto.long_description}</div>
                <p className="precio-taza">{producto.price} €</p>
                <div className="btn-add">
                  <div>Add to</div> 
                  <div>
                    <Image
                      aria-hidden
                      src="/shopping-cart.svg"
                      alt="cart"
                      width={20}
                      height={20}
                    />
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Navegacion />
      </div>
    );
}
