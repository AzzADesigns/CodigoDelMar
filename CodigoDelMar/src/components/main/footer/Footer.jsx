import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-cian-50 max-h-screen text-gray-950 flex flex-col justify-center items-center py-8 px-6">
      <div className="max-w-7xl justify-items-center mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-52 text-center md:text-center items-center md:items-start">

        {/* Descripción */}
        <div>
          <h2 className="text-lg font-semibold">Código Del Mar</h2>
          <p className="mt-2 w-52 text-md">
            Transformando el futuro digital, una línea de código a la vez.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-2xl font-semibold">Contacto</h2>
          <ul className="mt-2 text-sm space-y-2">
            <li className="flex justify-center text-xl md:justify-start items-center gap-2">
              <BsWhatsapp className="text-2xl" />
              (+54 9) 223 668 4777
            </li>
            <li className="flex justify-center text-xl md:justify-start items-center gap-2">
              <MdEmail className="text-2xl" />
              codigodelmar@gmail.com
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h2 className="text-lg font-semibold">Síguenos</h2>
          <div className="mt-2 flex justify-center md:justify-start gap-16 text-4xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-300">
              <FaGithub />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-blue-500 mt-8 pt-4 text-center text-sm">
        © 2024 Código Del Mar. Todos los derechos reservados.
      </div>
    </footer>
  );
}
