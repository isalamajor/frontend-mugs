"use client";
import Image from "next/image";
import "../stylesheets/Producto.css";
import Link from "next/link";
import { useCart } from "../context/ContextoCarrito";
import lista_productos from "./lista_productos";
import { FiShoppingCart } from "react-icons/fi";

function Producto(props) {
    const { addToCart, toggleMenu } = useCart();
    const producto = lista_productos.find(producto => producto.name === props.name);

    return (
        <div className="contenedor-producto">
            <Link href={`/productos/${encodeURIComponent(props.name)}`}>
                <div className="contenedor-imagen">
                    <Image className="imagen-producto" src={`/img/${props.pic}`} alt={props.name} width={200} height={200} />
                </div>
                <div className="contenedor-texto">
                    <div className="mug-name">{props.name}</div>
                    <div className="descripcion-producto">{props.description}</div>
                    <div className="precio-producto">{props.price} €</div>
                </div>
            </Link>
            <div
                className="btn-add-store"
                onClick={() => {
                    addToCart(producto);
                    toggleMenu();
                }}
            >
                <div>Add to</div>
                <FiShoppingCart className="icon-cart"></FiShoppingCart>
            </div>
        </div>
    );
}

export default Producto;
