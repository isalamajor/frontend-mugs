import Image from "next/image";
import "../stylesheets/Producto.css";

function Producto (props) {
    return(
        <div className="contenedor-producto">
            <div className="contenedor-imagen">
                <Image className="imagen-producto" src={`/img/${props.pic}`} alt={props.name} width={200} height={200}/>
            </div>
            <div className="contenedor-texto">
                <h2>{props.name}</h2>
                <div className="descripcion-producto">{props.description}</div>
                <div className="precio-producto">{props.price} €</div>
            </div>
        </div>
    );
  };

  export default Producto;
  