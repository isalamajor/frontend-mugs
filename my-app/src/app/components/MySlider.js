import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import lista_productos from "@/app/components/lista_productos";
import Link from 'next/link';
import Image from "next/image";
import '../stylesheets/MySlider.css';
import { SlArrowUp, SlArrowDown } from "react-icons/sl";


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
        color: "#000", 
      }}
    >
      {direction === "next" ? <SlArrowDown/> : <SlArrowUp/>}
    </div>
  );
};


function MySlider(props) {
  const productos_slider = lista_productos.filter(elem => elem !== props.producto);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          verticalSwiping: false,
        },
      },
    ],
  };

  if (isSmallScreen) {
    return null; 
  }

  return (
    <Slider {...settings} className="contenedor-slider" >
      {productos_slider.map((product) => (
        <Link className='sugerido' key={product.name} href={`/productos/${encodeURIComponent(product.name)}`}>
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
