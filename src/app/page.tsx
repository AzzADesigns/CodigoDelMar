"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowDown, FiArrowUpRight, FiCode, FiCompass, FiGithub, FiGlobe, FiInstagram, FiMail, FiMapPin, FiMenu, FiPhone, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
  className: string;
  brandImage?: string;
  href?: string;
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://codigodelmar.lat/#organization",
  name: "Código del Mar",
  url: "https://codigodelmar.lat",
  logo: "https://codigodelmar.lat/images/codigo-del-mar-logo.png",
  description:
    "Estudio digital de Mar del Plata dedicado al apps de gestión, integraciones y automatización para negocios.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mar del Plata",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: { "@type": "Country", name: "Argentina" },
  sameAs: [
    "https://github.com/codigodelmar",
    "https://www.instagram.com/codigodelmar",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5492236684777",
    email: "codigodelmar@gmail.com",
    contactType: "sales",
    availableLanguage: "Spanish",
  },
};

const mozoPlusSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MozoPlus",
  applicationCategory: "BusinessApplication",
  description:
    "Mesas, comandas y equipo de salón reunidos en una app para restaurantes.",
  creator: { "@id": "https://codigodelmar.lat/#organization" },
  url: "https://codigodelmar.lat/#proyectos",
};
const projects: Project[] = [
  {
    number: "01",
    name: "MozoPlus",
    category: "Software de gestión",
    description:
      "Mesas, comandas y equipo en una pantalla. MozoPlus ayuda a coordinar el salón mientras el servicio sigue.",
    tags: ["Gestión", "Gastronomía", "PostgreSQL"],
    image: "/images/mozoplus-dashboard.png",
    alt: "Panel de gestión de mozos de MozoPlus",
    className: "project-image-tall",
  },
  {
    number: "02",
    name: "Bot WhatsApp Amigorena",
    category: "Atención automatizada",
    description:
      "Para Bicicletas Amigorena: 93% de precisión en más de 3.000 mensajes procesados.",
    tags: ["Python", "WhatsApp", "Integración"],
    image: "https://codigodelmar.lat/static/img/whatsapp-bot.png",
    alt: "Bot de WhatsApp para atención al cliente",
    className: "project-image-wide",
  },
  {
    number: "03",
    name: "Appi.ar Plus",
    category: "Aplicación móvil",
    description:
      "Una app para registrar apiarios y consultar datos en el campo. Desarrollada con Beemore y premiada en FILAPI 2026.",
    tags: ["Flutter", "Firebase", "Offline"],
    image: "/images/appiar-mobile.png",
    alt: "Pantalla de la aplicación apícola Appi.ar Plus",
    brandImage: "/images/beemore-logo.png",
    className: "project-image-tall",
  },
  {
    number: "04",
    name: "Blackfire",
    category: "E-commerce + seguridad",
    description:
      "La tienda se rehízo por completo: pagos con Mercado Pago y una revisión de seguridad de punta a punta.",
    tags: ["Python", "Django", "Mercado Pago"],
    image: "https://codigodelmar.lat/static/img/blackfire-logo.png",
    alt: "Identidad visual de Blackfire",
    className: "project-image-wide project-blackfire",
    href: "https://blackfire.com.ar/",
  },
];

const services = [
  {
    number: "01",
    icon: <FiCode />,
    title: "Apps para operaciones",
    text: "Sistemas para pedidos, mesas, inventario y tareas que hoy pasan por papel o planillas.",
    tags: ["Escritorio", "Móvil", "A medida"],
  },
  {
    number: "02",
    icon: <FiGlobe />,
    title: "Web y e-commerce",
    text: "Catálogos, tiendas y paneles conectados con pagos, stock y herramientas de gestión.",
    tags: ["Tiendas", "Paneles", "Mercado Pago"],
  },
  {
    number: "03",
    icon: <FiCompass />,
    title: "Bots e integraciones",
    text: "Conectamos WhatsApp, APIs y bases de datos para que los sistemas compartan la información.",
    tags: ["WhatsApp", "APIs", "Automatización"],
  },
];

const demos = [
  {
    kind: "Template",
    title: "Café Faro",
    text: "El local actualiza su carta desde Google Sheets. El diseño y los contenidos se ajustan a cada negocio.",
    tags: ["SEO local", "Google Sheets", "Responsive"],
    href: "https://codigodelmar.lat/demo/landing/",
    source: "https://github.com/markbus-ai/LandingMaqueta",
    visual: "cafe-visual",
  },
  {
    kind: "Full stack",
    title: "Tienda online",
    text: "Catálogo, carrito, pagos, stock y administración en un mismo recorrido. Incluye datos ficticios.",
    tags: ["React", "FastAPI", "Mercado Pago"],
    href: "https://codigodelmar.lat/demo/ecommerce/",
    source: "https://github.com/GhostmanBY/Ecommerce",
    visual: "store-visual",
  },
  {
    kind: "Automatización",
    title: "Atención automática",
    text: "Una base para responder consultas frecuentes desde WhatsApp y adaptar los flujos a cada negocio.",
    tags: ["WhatsApp", "Multi-tenant", "Open source"],
    href: "https://github.com/markbus-ai/whatsplay",
    source: "https://github.com/markbus-ai/whatsplay",
    visual: "chat-visual",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <FiArrowUpRight aria-hidden="true" className={diagonal ? "arrow arrow-diagonal" : "arrow"} />;
}

export default function Home() {
  const root = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let revertAnimations = () => {};

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      if (cancelled || !root.current) return;

      const gsap = gsapModule.gsap;
      gsap.registerPlugin(triggerModule.ScrollTrigger);
      const context = gsap.context(() => {
        const motion = gsap.matchMedia();
        motion.add("(prefers-reduced-motion: no-preference)", () => {
          const hero = root.current?.querySelector<HTMLElement>(".hero");
          const light = root.current?.querySelector<HTMLElement>(".hero-light");
          const isSmallScreen = window.matchMedia("(max-width: 760px)").matches;

          gsap.fromTo(".hero-title-line-inner", { yPercent: 112, rotate: 1.5 }, { yPercent: 0, rotate: 0, duration: 1.05, stagger: 0.13, ease: "power3.out", delay: 0.08 });
          gsap.fromTo(".hero-animate", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: "power2.out", delay: 0.32 });
          gsap.fromTo(".hero-window", { y: 30, rotate: isSmallScreen ? 0 : 1.5, scale: 0.985, opacity: 0 }, { y: 0, rotate: isSmallScreen ? 0 : -1.5, scale: 1, opacity: 1, duration: 1, ease: "power2.out", delay: 0.42 });

          if (!isSmallScreen) {
            gsap.to(".hero-orbit-one", { rotation: 360, duration: 72, ease: "none", repeat: -1 });
            gsap.to(".hero-orbit-two", { rotation: -360, duration: 96, ease: "none", repeat: -1 });
          }

          gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
            gsap.fromTo(element, { y: isSmallScreen ? 16 : 24, opacity: 0 }, {
              y: 0,
              opacity: 1,
              duration: isSmallScreen ? 0.55 : 0.7,
              ease: "power2.out",
              scrollTrigger: { trigger: element, start: "top 90%", once: true },
            });
          });

          if (!isSmallScreen && hero && light && window.matchMedia("(pointer: fine)").matches) {
            const moveX = gsap.quickTo(light, "x", { duration: 0.9, ease: "power2.out" });
            const moveY = gsap.quickTo(light, "y", { duration: 0.9, ease: "power2.out" });
            const onPointerMove = (event: PointerEvent) => {
              const bounds = hero.getBoundingClientRect();
              moveX(event.clientX - bounds.left);
              moveY(event.clientY - bounds.top);
            };
            hero.addEventListener("pointermove", onPointerMove, { passive: true });
            return () => hero.removeEventListener("pointermove", onPointerMove);
          }
        });
        return () => motion.revert();
      }, root);
      revertAnimations = () => context.revert();
    });

    return () => {
      cancelled = true;
      revertAnimations();
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    let currentState = false;
    const updateHeader = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const nextState = window.scrollY > 32;
        if (nextState !== currentState) {
          currentState = nextState;
          setIsScrolled(nextState);
        }
      });
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateHeader);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main ref={root} className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mozoPlusSchema) }} />
      <header className={"site-header" + (isScrolled ? " is-scrolled" : "")}>
        <a className="brand" href="#inicio" aria-label="Código del Mar, inicio" onClick={closeMenu}>
          <Image src="/images/codigo-del-mar-logo.png" alt="" width={76} height={76} priority />
          <span className="brand-lockup">
            <span className="brand-name">código<span>del</span>mar<span className="brand-dot">.</span></span>
            <span className="brand-caption">ESTUDIO DIGITAL <i /> MDQ</span>
          </span>
        </a>
        <nav id="main-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegación principal">
          <a href="#servicios" onClick={closeMenu}><span>01</span> Apps</a>
          <a href="#proyectos" onClick={closeMenu}><span>02</span> Proyectos</a>
          <a href="#demos" onClick={closeMenu}><span>03</span> Integraciones</a>
          <a className="mobile-nav-contact" href="#contacto" onClick={closeMenu}>Hablemos <Arrow /></a>
        </nav>
        <div className="nav-actions">
          <span className="nav-presence"><span className="status-dot" /> Disponible para proyectos</span>
          <a className="nav-contact" href="#contacto" onClick={closeMenu}><span>Hablemos</span><Arrow /></a>
          <button
            className={"menu-toggle" + (menuOpen ? " is-open" : "")}
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      <section className="hero" id="inicio">
        <Image src="/images/mardelplata-coast.png" alt="Costa de Mar del Plata, ciudad donde nace Código del Mar" fill priority sizes="99vw" className="hero-photo" />
        <div className="hero-color-grade" />
        <div className="hero-light" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-dot" /> SOFTWARE A MEDIDA <i /> MAR DEL PLATA</div>
            <h1 className="hero-title">
              <span className="hero-title-line"><span className="hero-title-line-inner">Apps para</span></span>
              <span className="hero-title-line"><span className="hero-title-line-inner">el trabajo</span></span>
              <span className="hero-title-line hero-title-last"><span className="hero-title-line-inner"><em>real.</em></span></span>
            </h1>
            <p className="hero-lede hero-animate">Apps para ordenar operaciones, bots para atender consultas e integraciones que mantienen los datos en movimiento.</p>
            <div className="hero-actions hero-animate">
              <a className="hero-cta" href="#contacto"><span>Hablemos de tu app</span><span className="hero-cta-icon"><FiArrowUpRight /></span></a>
              <a className="hero-work-link" href="#proyectos">VER APPS EN USO <FiArrowDown /></a>
            </div>
            <div className="hero-foot hero-animate">
              <span>MAR DEL PLATA <i /> ARGENTINA</span>
              <span>APPS · AUTOMATIZACIÓN · INTEGRACIONES</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
            <figure className="hero-window">
              <div className="hero-window-bar"><span className="window-lights"><i /><i /><i /></span><span>MOZOPLUS / GESTIÓN DE SALÓN</span><span className="window-live"><i /> EN USO</span></div>
              <div className="hero-window-image"><Image src="/images/mozoplus-dashboard.png" alt="Pantalla de MozoPlus para administrar mesas y comandas" fill priority sizes="(max-width: 900px) 92vw, 48vw" /></div>
              <figcaption className="hero-window-caption"><span><b>01</b> APP DE GESTIÓN</span><span>MozoPlus <FiArrowUpRight /></span></figcaption>
            </figure>
            <div className="hero-widget hero-sync-widget hero-animate">
              <div className="widget-topline"><span><i /> FLUJO ACTIVO</span><span>02</span></div>
              <div className="sync-row"><span className="sync-node whatsapp-node"><FaWhatsapp /></span><span className="sync-line"/><span className="sync-node">API</span><span className="sync-line"/><span className="sync-node sync-db"><FiCode /></span></div>
              <strong>Del chat al registro, sin volver a copiar.</strong>
              <small>WhatsApp <span>→</span> Respuesta <span>→</span> Registro</small>
            </div>
            <div className="hero-coordinate"><FiMapPin /><span>Desarrollado junto al<br />Atlántico.</span></div>
          </div>
        </div>
        <a href="#nosotros" className="hero-scroll" aria-label="Desplazarse hacia abajo"><span>DESLIZÁ PARA EXPLORAR</span><FiArrowDown /></a>
      </section>
      <section className="intro section-pad" id="nosotros">
        <div className="intro-kicker reveal"><span className="section-index">01 /</span> Cómo trabajamos</div>
        <div className="intro-main reveal">
          <h2>Hay tareas que<br />merecen <span>una app.</span></h2>
          <div className="intro-aside">
            <p>Somos un equipo de Mar del Plata. Nos sentamos con quienes hacen el trabajo todos los días y vemos dónde se traba: pedidos, datos repetidos, consultas que se acumulan. Después desarrollamos la herramienta que encaja en ese proceso.</p>
            <a className="underlined-link" href="#contacto">Contanos qué necesitás <Arrow /></a>
          </div>
        </div>
        <div className="coastline-note reveal">
          <span className="coastline-coordinate"><i /> BASE LOCAL · MAR DEL PLATA</span>
          <span className="coastline-rule" aria-hidden="true"><i /></span>
          <span>Desde la costa, hacemos software para equipos de acá y de donde haga falta.</span>
        </div>
        <div className="proof-row reveal">
          <div className="proof-item"><span className="proof-mark">01</span><div><strong>Apps a medida</strong><small>Con la lógica de tu equipo</small></div></div>
          <div className="proof-item"><span className="proof-mark">02</span><div><strong>Integraciones</strong><small>WhatsApp, APIs y tus sistemas</small></div></div>
          <div className="proof-item"><span className="proof-mark">03</span><div><strong>Equipo cercano</strong><small>Desde Mar del Plata</small></div></div>
          <div className="proof-coast">MDQ <span>—</span> 2026</div>
        </div>
      </section>

      <section className="services-section section-pad" id="servicios">
        <div className="section-heading reveal">
          <div><span className="section-index">02 / Sistemas para el día a día</span><h2>Apps que acompañan<br /><span>el trabajo real.</span></h2></div>
          <p>Apps de escritorio y móviles, tiendas que procesan pedidos y bots que se conectan con tus sistemas.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.number}>
              <div className="service-top"><span className="service-number">{service.number}</span><span className="service-icon">{service.icon}</span></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className={"service-preview service-preview-" + service.number} aria-hidden="true">
                <div className="preview-toolbar"><span><i /><i /><i /></span><b>{service.number === "01" ? "MozoPlus" : service.number === "02" ? "Tienda online" : "Atención"}</b><small>EN VIVO</small></div>
                <div className="preview-content"><div><small>{service.number === "01" ? "SALÓN" : service.number === "02" ? "CATÁLOGO" : "WHATSAPP"}</small><strong>{service.number === "01" ? "Mesas y pedidos" : service.number === "02" ? "Productos y stock" : "Conversaciones"}</strong></div><span className="preview-chip">{service.number === "01" ? "Abierto" : service.number === "02" ? "Sincronizado" : "Conectado"}</span></div>
                <div className="preview-list"><span><i />{service.number === "01" ? "Comandas del salón" : service.number === "02" ? "Pagos integrados" : "Respuesta automática"}</span><span><i />{service.number === "01" ? "Equipo de servicio" : service.number === "02" ? "Panel de gestión" : "Datos registrados"}</span></div>
              </div>
              <div className="tag-row">{service.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              <a href="#contacto" className="service-link" aria-label={"Consultar por " + service.title}><Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section section-pad" id="proyectos">
        <div className="section-heading project-heading reveal">
          <div><span className="section-index">03 / Apps en uso</span><h2>Sistemas que<br /><span>hacen su trabajo.</span></h2></div>
          <p>Del salón de un restaurante al trabajo en el campo: cada app parte de cómo se hacen las cosas hoy.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={"project-card reveal " + project.className} key={project.name}>
              <div className="project-visual">
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
                {project.brandImage && <Image className="project-brand-overlay" src={project.brandImage} alt="Beemore" width={142} height={86} />}
                <span className="project-counter">{project.number} / 04</span>
                <span className="project-open"><Arrow /></span>
              </div>
              <div className="project-info">
                <div className="project-category">{project.category}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                {project.href && <a className="project-visit" href={project.href} target="_blank" rel="noreferrer">Visitar sitio <Arrow /></a>}
              </div>
            </article>
          ))}
        </div>
        <p className="project-note reveal">Marcas, nombres e imágenes pertenecen a sus respectivos proyectos y clientes.</p>
      </section>

      <section className="demos-section section-pad" id="demos">
        <div className="section-heading reveal">
          <div><span className="section-index">04 / Antes de empezar</span><h2>Probalo en marcha.<br /><span>Después lo hacemos tuyo.</span></h2></div>
          <p>Entrá, tocá y recorré cada flujo. Son maquetas para ver cómo podría funcionar una app en el día a día de tu negocio.</p>
        </div>
        <div className="demo-grid">
          {demos.map((demo, index) => (
            <article className="demo-card reveal" key={demo.title}>
              <div className={"demo-visual " + demo.visual}>
                <span className="demo-index">0{index + 1}</span>
                {index === 0 && <div className="cafe-mock"><span>CAFÉ</span><strong>Faro</strong><small>Buenos momentos, a fuego lento.</small><b>VER LA CARTA　<FiArrowUpRight /></b></div>}
                {index === 1 && <div className="store-mock"><div className="store-bar"><i /><i /><i /></div><div className="store-body"><span>OBJETOS PARA<br />TODOS LOS DÍAS</span><strong>Elegí algo<br />que te inspire.</strong><b>EXPLORAR　<FiArrowUpRight /></b></div></div>}
                {index === 2 && <div className="chat-mock"><div className="chat-head"><span className="chat-avatar">C</span><div><strong>Atención online</strong><small>responde al instante</small></div><i /></div><p>¡Hola! ¿En qué podemos ayudarte hoy?</p><div className="chat-option">Quiero conocer sus servicios <FiArrowUpRight /></div><div className="chat-option">Necesito ayuda con un pedido <FiArrowUpRight /></div></div>}
              </div>
              <div className="demo-body">
                <div className="demo-kind">{demo.kind}</div><h3>{demo.title}</h3><p>{demo.text}</p>
                <div className="tag-row">{demo.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                <div className="demo-links"><a href={demo.href} target="_blank" rel="noreferrer">Ver demo <Arrow /></a><a href={demo.source} target="_blank" rel="noreferrer">Ver código <Arrow /></a></div>
              </div>
            </article>
          ))}
        </div>
        <div className="demo-disclaimer reveal"><span className="status-dot" /> Son puntos de partida, no productos cerrados ni trabajos de clientes.</div>
      </section>

      <section className="contact-section section-pad" id="contacto">
        <div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" />
        <div className="contact-content reveal">
          <span className="section-index">05 / El próximo paso</span>
          <h2>¿Qué tarea te<br /><em>saca tiempo?</em></h2>
          <p>Contanos qué parte del trabajo hoy se hace a mano. Lo charlamos por WhatsApp y vemos si una app puede resolverlo.</p>
          <a className="button button-light" href="https://wa.me/5492236684777?text=Hola%2C%20quiero%20conversar%20sobre%20una%20app" target="_blank" rel="noreferrer">Hablemos por WhatsApp <Arrow /></a>
          <a className="contact-email" href="mailto:codigodelmar@gmail.com">codigodelmar@gmail.com</a>
        </div>
        <aside className="contact-aside"><div className="contact-widget-head"><span><i /> DISPONIBLES PARA CONVERSAR</span><FiArrowUpRight /></div><strong>Una primera charla.<br /><em>Sin vueltas.</em></strong><p>+54 9 223 668 4777<br />Mar del Plata · Argentina</p><a href="https://wa.me/5492236684777" target="_blank" rel="noreferrer"><FaWhatsapp /> Abrir WhatsApp <FiArrowUpRight /></a></aside>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-identity">
            <a className="brand footer-brand" href="#inicio">
              <Image src="/images/codigo-del-mar-logo.png" alt="" width={64} height={64} />
              <span className="brand-lockup">
                <span className="brand-name">código<span>del</span>mar<span className="brand-dot">.</span></span>
                <span className="brand-caption">ESTUDIO DIGITAL <i /> MDQ</span>
              </span>
            </a>
            <p>Apps, automatizaciones e integraciones<br />hechas desde Mar del Plata.</p>
            <span className="footer-location"><FiMapPin /> Mar del Plata, Argentina</span>
          </div>
          <div className="footer-column">
            <h3>Explorá</h3>
            <a href="#servicios">Servicios</a><a href="#proyectos">Proyectos</a><a href="#demos">Demos</a><a href="#nosotros">Nosotros</a>
          </div>
          <div className="footer-column">
            <h3>Contacto</h3>
            <a href="tel:+5492236684777"><FiPhone /> +54 9 223 668 4777</a>
            <a href="mailto:codigodelmar@gmail.com"><FiMail /> codigodelmar@gmail.com</a>
          </div>
          <div className="footer-column footer-socials">
            <h3>Seguinos</h3>
            <div className="social-links">
              <a href="https://github.com/codigodelmar" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href="https://www.instagram.com/codigodelmar" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
            </div>
            <a className="footer-contact-link" href="#contacto">Empezar un proyecto <FiArrowUpRight /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Código del Mar. Todos los derechos reservados.</span>
          <a href="#inicio">Volver al inicio <FiArrowUpRight /></a>
        </div>
      </footer>
    </main>
  );
}
































