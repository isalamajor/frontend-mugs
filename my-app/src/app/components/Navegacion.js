
"use client";
import Image from "next/image";
import "../stylesheets/Navegacion.css";
import Link from "next/link";
import { useCart } from '@/app/context/ContextoCarrito';
import { FiShoppingCart } from "react-icons/fi";


function Navegacion() {

  const {toggleMenu} = useCart();
    return(
        <div className="navegacion">
        <Link
          href="/"
        >
          <Image
            aria-hidden
            src="/building-store.svg"
            alt="File icon"
            width={20}
            height={20}
          />
          Store
        </Link>
        
        <p onClick={toggleMenu} className="cart-opener">
          <FiShoppingCart
            aria-hidden
            src="/building-store.svg"
            alt="File icon"
            width={20}
            height={20}
            className="cart-icon"
          />
          Cart
        </p>

        {/*<Link
          href="/carrito"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/cube-send.svg"
            alt="Window icon"
            width={30}
            height={30}
          />
          Shippings
        </Link>*/}
        
        <Link
          href="https://github.com/isalamajor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/brand-github.svg"
            alt="Globe icon"
            width={20}
            height={20}
          />
          Go to my github →
        </Link>
      </div>
    );
}

export default Navegacion;