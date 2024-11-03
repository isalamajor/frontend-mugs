import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import lista_productos from "@/app/components/lista_productos";
import Link from 'next/link';
import Image from "next/image";
import '../stylesheets/MySlider.css';
import { SlArrowUp, SlArrowDown } from "react-icons/sl";


/*function obtenerProductos(product_name) {
  const tresProductos = lista_productos.filter(product => product.name !== product_name);
  const productosShuffled = tresProductos.sort(() => 0.5 - Math.random());
  return productosShuffled.slice(0, 3);
}
const productosSugeridos = obtenerProductos(props.producto);
*/
const CustomArrow = ({ direction, onClick }) => {
  return (
    <div
      className={`arrow ${direction}`}
      onClick={onClick}
      style={{
        position: "absolute",
        top: direction === "next" ? "70%" : "0%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1,
        cursor: "pointer",
        color: "#000", // Cambia el color según necesites
      }}
    >
      {direction === "next" ? <SlArrowDown/>  : <SlArrowUp/>} {/* Puedes usar íconos o imágenes aquí */}
    </div>
  );
};


function MySlider(props) {


  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, 
    vertical: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false, // Cambia a horizontal en pantallas pequeñas
          verticalSwiping: false,
        },
      },
    ],
  };


  return (
    <Slider {...settings} className="contenedor-slider" >
        {lista_productos.map((product) => (
            <Link className='sugerido 'key={product.name} href={`/productos/${encodeURIComponent(product.name)}`}>
                <Image
                src={`/img/${product.pic}`}
                alt={product.name}
                width={155}
                height={155}
                />
            </Link>
        ))}
    </Slider>
  );
}


export default MySlider;