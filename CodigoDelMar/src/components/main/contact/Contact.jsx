import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Contacto() {
    const [enviado, setEnviado] = useState(false);
    const [errores, setErrores] = useState({});
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const email = formRef.current.email.value;
        const mensaje = formRef.current.mensaje.value;
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
            emailjs.sendForm('service_vwg5ib8', 'template_8g9zaub', formRef.current, 'G7hYLp6NxNtNRfIqR')
                .then(() => {
                    setEnviado(true);
                    formRef.current.reset();    
                    setTimeout(() => setEnviado(false), 3000);
                })
                .catch((error) => {
                    console.error("Error al enviar el correo:", error);
                });
        }
    };

    return (
        <div
            className="flex justify-center items-center bg-fixed min-h-screen px-4 bg-cover bg-center"
            style={{ backgroundImage: `url('/contacto.jpg')` }}
        >
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full max-w-2xl bg-white/20 h-[500px] backdrop-blur-[100px] shadow-2xl shadow-gray-500 rounded-xl p-6 flex flex-col justify-center gap-6"
            >
                <h2 className="text-2xl xl:text-3xl font-semibold text-gray-950 text-center">
                    Contactanos
                </h2>
        
                <div>
                    <label className="block text-sm xl:text-lg font-medium text-gray-950">Correo electrónico</label>
                    <input
                        type="email"
                        name="email"
                        className="mt-1 w-full border border-white/50 bg-white/10 text-gray-950 placeholder-gray-950 rounded-md p-2"
                        placeholder="tu@email.com"
                    />
                    {errores.email && <p className="text-red-600 text-sm mt-1">{errores.email}</p>}
                </div>
        
                <div>
                    <label className="block text-sm xl:text-lg font-medium text-gray-950">Mensaje</label>
                    <textarea
                        name="mensaje"
                        rows="4"
                        className="mt-1 w-full border border-white/50 bg-white/10 text-gray-950 placeholder-gray-950 rounded-md p-2"
                        placeholder="Escribí tu mensaje..."
                    ></textarea>
                    {errores.mensaje && <p className="text-red-600 text-sm mt-1">{errores.mensaje}</p>}
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
                        className="text-gray-950 text-xl font-extrabold text-center mb-5"
                    >
                        ¡Mensaje enviado con éxito!
                    </motion.p>
                )}
            </motion.form>
        </div>
    );
}
