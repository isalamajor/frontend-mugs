
import Image from "next/image";
import "../stylesheets/Navegacion.css"


function Navegacion() {
    return(
        <div className="navegacion">
        <a
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
            width={30}
            height={30}
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
            width={20}
            height={20}
          />
          Go to my github →
        </a>
      </div>
    );
}

export default Navegacion;