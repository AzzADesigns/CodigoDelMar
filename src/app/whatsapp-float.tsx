"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/5492236684777"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para escribir al +54 9 223 668 4777"
    >
      <span className="whatsapp-copy">
        <small>CONTACTO DIRECTO</small>
        Escribinos
      </span>
      <span className="whatsapp-icon">
        <FaWhatsapp aria-hidden="true" />
      </span>
    </a>
  );
}
