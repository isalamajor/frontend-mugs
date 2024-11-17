import Image from "next/image";
import styles from "./page.module.css";
import Producto from './components/Producto.js';
import lista_productos from './components/lista_productos.js';
import Navegacion from './components/Navegacion.js'
import { CartProvider } from './context/ContextoCarrito';
import BurgerCart from "@/app/components/BurgerCart";

export default function Home() {
  return (
    <div>
      <div className={styles.page}>

        <header className={styles.header}>

        <BurgerCart className='icon-burger'></BurgerCart>
          <a href="/">
              <Image className={styles.headerlogo} src="/img/logo.png" width={600} height={100} alt="Logotipo"/>
          </a>
        </header>


        <main className={styles.main}>
          <h1>Get your mug</h1>

          <Navegacion></Navegacion>

          <div className={styles.grid}>
            {lista_productos.map((producto, index) => (
            <Producto
              key={index}
              name={producto.name}
              description={producto.description}
              price={producto.price}
              pic={producto.pic}
            />
            ))}
          </div>
        </main>
        
        <Navegacion></Navegacion>

      </div>
      <div className={styles.author}> All rights reserved - Isabel Hernández Barrio</div>
    </div>  
  );
}
