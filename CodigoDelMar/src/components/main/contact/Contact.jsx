import { useState } from "react";
import { motion } from "framer-motion";

export default function Contacto() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [errores, setErrores] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevosErrores = {};

    if (!email) {
      nuevosErrores.email = "Este campo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nuevosErrores.email = "Correo electrónico inválido.";
    }

    if (!mensaje) {
      nuevosErrores.mensaje = "Este campo es obligatorio.";
    } else if (mensaje.length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true);
      setEmail("");
      setMensaje("");
      setTimeout(() => setEnviado(false), 3000);
    }
  };

  return (
    <div
      className="flex justify-center items-center bg-fixed min-h-screen px-4 bg-cover bg-center"
      style={{
        backgroundImage: `url('/contacto.jpg')`,
      }}
    >
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white/20 h-[500px] backdrop-blur-[100px] shadow-2xl shadow-gray-500 rounded-xl p-6 flex flex-col justify-center gap-6"
      >
        <h2 className="text-2xl xl:text-3xl font-semibold text-gray-950 text-center">
          Contactanos
        </h2>

        <div>
          <label htmlFor="email" className="block text-sm xl:text-lg font-medium text-gray-950">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full border border-white/50 bg-white/10 text-gray-950 placeholder-gray-950 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="tu@email.com"
          />
          {errores.email && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm mt-1"
            >
              {errores.email}
            </motion.p>
          )}
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm xl:text-lg font-medium text-gray-950">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
            rows="4"
            className="mt-1 w-full border border-white/50 bg-white/10 text-gray-950 placeholder-gray-950 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Escribí tu mensaje..."
          ></textarea>
          {errores.mensaje && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm mt-1"
            >
              {errores.mensaje}
            </motion.p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-50 hover:bg-gray-950 hover:text-indigo-50 cursor-pointer text-gray-950 font-semibold py-2 rounded-md transition duration-200"
        >
          Enviar
        </button>

        {enviado && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-950 text-xl font-extrabold text-center mb-5 "
          >
            ¡Mensaje enviado con éxito!
          </motion.p>
        )}
      </motion.form>
    </div>
  );
}
