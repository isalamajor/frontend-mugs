import Image from "next/image";
import styles from "./page.module.css";
import Producto from './components/Producto.js';
import lista_productos from './components/lista_productos.js';

export default function Home() {
  return (
    <div className={styles.page}>

      <header className={styles.header}>
        <a href="/">
            <Image className={styles.headerlogo} src="/img/logo.png" width={600} height={100} alt="Logotipo"/>
        </a>
      </header>

      <main className={styles.main}>
        <h1>Get your mug</h1>

        <div className={styles.grid}>
          {lista_productos.map((producto, index) => (
          <Producto
            key={index} // Usa un índice único para la clave
            name={producto.name}
            description={producto.description}
            price={producto.price}
            pic={producto.pic}
          />
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/building-store.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Store
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/cube-send.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Shippings
        </a>
        <a
          href="https://github.com/isalamajor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/brand-github.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to my github →
        </a>
      </footer>
    </div>
  );
}
