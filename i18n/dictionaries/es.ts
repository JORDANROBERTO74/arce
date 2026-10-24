import type { Dictionary } from "./en";

export const es: Dictionary = {
  meta: {
    home: {
      title: "Arce — La plataforma de datos relacional para equipos de producto",
      description:
        "Arce es la plataforma de datos relacional, segura y escalable para equipos que construyen productos digitales de alto impacto. Hecha en Suiza, para el mundo.",
    },
    about: {
      title: "Nosotros — Arce",
      description:
        "Conoce al equipo de ingeniería detrás de Arce, la plataforma de datos relacional, y la visión que nos impulsa.",
    },
    pricing: {
      title: "Precios — Arce",
      description:
        "Planes simples y transparentes que crecen con tu equipo. Empieza gratis y escala con precios por uso.",
    },
    changelog: {
      title: "Novedades — Arce",
      description:
        "Las últimas incorporaciones, mejoras y correcciones de la plataforma de datos Arce.",
    },
    notFound: {
      title: "Página no encontrada — Arce",
      description: "La página que buscas no existe.",
    },
  },

  common: {
    skip: "Saltar al contenido",
    brand: "Arce",
  },

  nav: {
    home: "Inicio",
    about: "Nosotros",
    pricing: "Precios",
    changelog: "Novedades",
    demo: "Agendar una demo",
    demoShort: "Agendar demo",
    menu: "Menú",
    close: "Cerrar menú",
    language: "Idioma",
  },

  footer: {
    tagline:
      "Redefiniendo la forma en que se construyen y gestionan las bases de datos. Hecha en Suiza, para el mundo.",
    productTitle: "Producto",
    product: {
      enterprise: "Enterprise",
      pricing: "Precios",
      docs: "Documentación",
      changelog: "Novedades",
    },
    resourcesTitle: "Recursos",
    resources: {
      faqs: "Preguntas frecuentes",
      github: "GitHub",
      discord: "Discord",
      youtube: "YouTube",
    },
    companyTitle: "Empresa",
    company: {
      about: "Nosotros",
      careers: "Empleo",
      contact: "Contacto",
      status: "Estado",
    },
    legalTitle: "Legal",
    legal: {
      imprint: "Aviso legal",
      privacy: "Privacidad",
      terms: "Términos",
      dpa: "DPA",
    },
    copyright: "Todos los derechos reservados.",
    status: "Todos los sistemas operativos",
  },

  hero: {
    title1: "Datos que crecen",
    title2: "contigo",
    description:
      "Arce es la plataforma de datos relacional, segura y escalable para equipos que construyen productos digitales de alto impacto.",
    cta: "Prueba gratis 14 días",
    secondary: "Ver novedades",
  },

  logoCloud: {
    title: "Con la confianza de los mejores equipos de ingeniería del mundo",
  },

  globalDatabase: {
    badge: "Hecha para la nube",
    title1: "La base de datos",
    title2: "global en la nube",
    features: [
      {
        name: "Clústeres globales",
        description:
          "Acceso global de baja latencia que mejora el rendimiento.",
      },
      {
        name: "Disparadores serverless",
        description:
          "Ejecuta funciones automáticamente para un comportamiento dinámico de la app.",
      },
      {
        name: "Monitoreo y alertas",
        description:
          "Supervisa el estado con métricas clave o integra herramientas de terceros.",
      },
    ],
  },

  codeExample: {
    badge: "Pensada para desarrolladores",
    title1: "Hecha por desarrolladores,",
    title2: "para desarrolladores",
    description:
      "Un lenguaje de consulta rico y expresivo que te permite filtrar y ordenar por cualquier campo, sin importar lo anidado que esté.",
    selectLabel: "Seleccionar ejemplo de código",
    tab1Title: "Modela todo",
    tab1Description:
      "Integridad de datos y consultas eficientes para tipos de datos diversos, incluidos geoespaciales y series temporales. Fácil de crear, sencillo de mantener.",
    tab2Title: "Consulta con eficiencia",
    tab2Description:
      "Aprovecha una API de consultas nativa para gestionar datos PostgreSQL de forma eficiente. Inicializa una vez, escala sin límites.",
    features: [
      {
        name: "Usa Arce con tu stack",
        description:
          "Ofrecemos librerías de cliente y servidor en todo, desde React y Ruby hasta iOS.",
      },
      {
        name: "Prueba opciones plug & play",
        description:
          "Personaliza y despliega infraestructura de datos directamente desde el panel de Arce.",
      },
      {
        name: "Explora integraciones listas",
        description:
          "Conecta Arce con más de cien herramientas, incluidas Stripe, Salesforce o QuickBooks.",
      },
      {
        name: "Seguridad y privacidad",
        description:
          "Arce admite datos PII cifrados con AES-256 en reposo y flujos de consentimiento explícito.",
      },
    ],
  },

  features: {
    badge: "Seguridad a escala",
    title: "Diseñada para la velocidad y la fiabilidad",
    description:
      "La arquitectura innovadora de Arce evita los cuellos de botella centrales de los sistemas tradicionales, mejorando la fiabilidad. Este diseño garantiza alta productividad y seguridad, minimizando el riesgo de interrupciones.",
    stats: [
      { name: "Aumento de ancho de banda", value: "+162%" },
      { name: "Mejor eficiencia de almacenamiento", value: "2-3x" },
      { name: "Filas ingeridas / segundo", value: "Hasta 9M" },
    ],
  },

  cta: {
    title: "¿Listo para empezar?",
    description:
      "Lanza un clúster nuevo o migra a Arce sin tiempo de inactividad.",
    placeholder: "Tu email de trabajo",
    button: "Empezar",
    notSure: "¿No sabes por dónde empezar?",
    talkToSales: "Habla con ventas",
  },

  testimonial: {
    quote:
      "\u201CGracias a esta sólida solución de bases de datos, nuestra organización ha optimizado la gestión de datos, logrando mayor eficiencia y precisión en nuestras operaciones.\u201D",
    name: "Dima Coil",
    role: "CEO, Hornertools",
  },

  about: {
    badge: "Sobre Arce",
    title:
      "Somos ingenieros construyendo la plataforma de bases de datos que siempre quisimos",
    description:
      "Los datos están cambiando todos los aspectos de gestionar un negocio, y está ocurriendo ahora. Arce está en el centro de esta revolución.",
    visionTitle: "Nuestra visión",
    visionP1:
      "Imaginamos un mundo donde la gestión de datos ya no sea un desafío complejo, sino una ventaja poderosa. Al integrar IA de vanguardia en las soluciones de bases de datos, transformamos los datos en activos estratégicos.",
    visionP2:
      "Creemos en eliminar las barreras de la complejidad y la escalabilidad, permitiendo que los equipos se centren en insights e innovación. Nuestro objetivo es dar a cada organización las herramientas para aprovechar todo el potencial de sus datos.",
    signature: "\u2013 Alex y Robin",
    rolesCta: "Ver vacantes",
    gallery: [
      {
        src: "/images/working.webp",
        alt: "Dos empleados trabajando con ordenadores",
        caption: "En Arce usamos ordenadores",
      },
      {
        src: "/images/workplace.webp",
        alt: "Oficina con una cabina telefónica",
        caption: "Nuestras cabinas son geniales",
      },
      {
        src: "/images/home.webp",
        alt: "Fotografía del Fraum\u00fcnster en Zúrich",
        caption: "Hogar, dulce hogar",
      },
      {
        src: "/images/break.webp",
        alt: "Equipo descansando en la sala de almuerzo",
        caption: "A veces hacemos una pausa",
      },
      {
        src: "/images/cool.webp",
        alt: "Persona con auriculares",
        caption: "Robin lleva la playlist",
      },
      {
        src: "/images/release.webp",
        alt: "Fotografía de una fiesta con confeti",
        caption:
          "Fiesta de lanzamiento v1.0. Mike, nuestro becario de EE. UU., tomó su primera cerveza sin alcohol",
      },
      {
        src: "/images/founders.webp",
        alt: "Únete a Arce, sé tú mismo.",
        caption: "Únete a Arce, sé tú mismo.",
      },
    ],
    benefitsTitle: "Qué ganas tú",
    benefits: [
      {
        title: "Trabaja en Zúrich",
        description:
          "Priorizamos el trabajo presencial y tenemos una oficina fantástica en Zúrich.",
      },
      {
        title: "Salario competitivo y equity",
        description:
          "Pagamos salarios competitivos y paquetes de opciones para atraer al mejor talento.",
      },
      {
        title: "Salud, dental y visión",
        description:
          "Arce cubre todo tu seguro de salud, dental y visión.",
      },
      {
        title: "Retiros anuales",
        description:
          "Reunimos a todo el equipo en un lugar interesante para hablar del panorama general.",
      },
      {
        title: "Presupuesto para libros",
        description:
          "Damos a cada empleado un presupuesto de 350 dólares para libros.",
      },
      {
        title: "Snacks deliciosos",
        description:
          "Nevera y despensa surtidas, más cena gratis cada noche.",
      },
      {
        title: "20 días de vacaciones al año",
        description: "Tómate tiempo para recargar energías y volver renovado.",
      },
      {
        title: "Spotify Premium",
        description:
          "Tenemos los mejores beneficios, incluso incluye una suscripción a Spotify.",
      },
    ],
  },

  pricing: {
    badge: "Precios",
    title: "Nuestros planes crecen contigo",
    description:
      "Planes que empoderan a tu equipo para lanzar sin fricción. Nuestros modelos flexibles aseguran que la eficiencia no cueste tu presupuesto.",
    monthly: "Mensual",
    yearly: "Anual (-20%)",
    mostPopular: "Más popular",
    perUser1: "por usuario",
    perUser2: "por mes",
    perUserShort: "por usuario",
    compare: "Comparar planes",
    compareSub: "Precio por mes (facturación anual)",
    caption: "Comparación de planes de precios",
    included: "Incluido",
    notIncluded: "No incluido",
    activateLabel: "Enlace para activar el plan",
    plans: [
      {
        id: "starter",
        name: "Starter",
        price: { fixed: "$0" },
        description:
          "Para individuos y freelancers que necesitan una base de datos escalable.",
        capacity: ["Hasta 5 usuarios, 1 admin", "1 espacio de trabajo"],
        features: [
          "Hasta 1000/req. por día",
          "5 GB de almacenamiento máx.",
          "Soporte comunitario por Slack",
        ],
        isStarter: true,
        isRecommended: false,
        buttonText: "Empezar",
      },
      {
        id: "teams",
        name: "Teams",
        price: { monthly: "$49", annually: "$39" },
        description:
          "Para equipos pequeños y startups que necesitan una base de datos escalable.",
        capacity: ["Hasta 100 usuarios, 3 admins", "Hasta 20 espacios de trabajo"],
        features: [
          "Solicitudes ilimitadas",
          "$0.07 por GB procesado",
          "$0.34 por GB almacenado",
          "Slack Connect",
        ],
        isStarter: false,
        isRecommended: false,
        buttonText: "Prueba 14 días",
      },
      {
        id: "business",
        name: "Business",
        price: { monthly: "$99", annually: "$79" },
        description:
          "Para equipos grandes que necesitan controles y funciones más avanzadas.",
        capacity: ["Hasta 500 usuarios, 10 admins", "Espacios de trabajo ilimitados"],
        features: [
          "Solicitudes ilimitadas",
          "Descuento por volumen",
          "$0.03 por GB procesado",
          "$0.10 por GB almacenado",
          "Single Sign-On (SSO)",
        ],
        isStarter: false,
        isRecommended: true,
        buttonText: "Prueba 14 días",
      },
    ],
    sections: [
      {
        name: "Funciones del espacio de trabajo",
        features: [
          {
            name: "Notificaciones por email y webhooks",
            tooltip:
              "Mantente al día con alertas por email configurables y webhooks salientes.",
            plans: { starter: true, teams: true, business: true },
          },
          {
            name: "Espacios de trabajo",
            tooltip:
              "Entornos aislados para organizar proyectos y colaborar con tu equipo.",
            plans: { starter: "5", teams: "10", business: "Ilimitado" },
          },
          {
            name: "Almacenamiento",
            tooltip:
              "Coste por gigabyte almacenado, facturado mensualmente según el uso real.",
            plans: {
              starter: "$0.65 por GB almacenado",
              teams: "$0.34 por GB almacenado",
              business: "Personalizado\u00b9",
            },
          },
          {
            name: "Asientos",
            tooltip:
              "El número de miembros del equipo que pueden acceder al espacio de trabajo.",
            plans: {
              starter: "5 usuarios",
              teams: "Hasta 20 usuarios",
              business: "Ilimitado",
            },
          },
        ],
      },
      {
        name: "Automatización",
        features: [
          {
            name: "Cuentas de servicio",
            tooltip:
              "Identidades de máquina para automatizar CI/CD y tareas en segundo plano.",
            plans: { starter: true, teams: true, business: true },
          },
          {
            name: "API de administración",
            tooltip:
              "Control programático sobre espacios, usuarios y facturación.",
            plans: { teams: true, business: true },
          },
          {
            name: "Creador de flujos sin código",
            tooltip:
              "Compón automatizaciones visualmente sin escribir una sola línea de código.",
            plans: {
              starter: "Limitado",
              teams: "Estándar",
              business: "Mejorado",
            },
          },
        ],
      },
      {
        name: "Analítica",
        features: [
          {
            name: "Retención de analítica",
            tooltip:
              "Cuánto tiempo se retienen las analíticas de consultas y uso.",
            plans: {
              starter: "7 días",
              teams: "1 año",
              business: "Ilimitado",
            },
          },
          {
            name: "Detección de anomalías",
            tooltip:
              "Alertas automáticas cuando los patrones de consulta se desvían de la referencia.",
            plans: { teams: true, business: true },
          },
          {
            name: "Creador de informes personalizados",
            tooltip: "Crea y comparte informes a medida desde cualquier métrica.",
            plans: { business: true },
          },
        ],
      },
      {
        name: "Soporte",
        features: [
          {
            name: "Slack",
            plans: {
              starter: "Comunidad",
              teams: "Connect",
              business: "Agente dedicado",
            },
          },
          {
            name: "Email",
            plans: {
              starter: "2-4 días",
              teams: "1-2 días",
              business: "Prioritario",
            },
          },
        ],
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faqIntro:
      "¿No encuentras la respuesta que buscas? No dudes en ponerte en contacto con nuestro equipo de soporte.",
    faqs: [
      {
        question: "¿Qué tan seguro es Arce para proteger datos sensibles?",
        answer:
          "Cada base de datos se cifra con AES-256 en reposo y TLS 1.3 en tránsito. El control de acceso por roles, la red privada y el SSO mantienen aislados los datos sensibles en cada capa.",
      },
      {
        question: "¿Se puede autoalojar Arce?",
        answer:
          "Sí. El plan Enterprise incluye una opción autoalojada con el mismo plano de control, desplegable en tu propia nube o infraestructura local.",
      },
      {
        question: "¿Arce admite integraciones con otros sistemas?",
        answer:
          "Arce incluye más de cien integraciones listas y una API de administración completa para conectar Stripe, Salesforce, QuickBooks y herramientas internas.",
      },
      {
        question: "¿Qué tan fácil es hacer copias de seguridad y restaurar datos?",
        answer:
          "La recuperación a un punto en el tiempo es automática. Restaura cualquier esquema o base de datos a un instante concreto desde el panel en un par de clics.",
      },
      {
        question: "¿Qué pasa si supero los límites de mi plan?",
        answer:
          "Nunca detenemos tu tráfico. Se te factura de forma transparente por el excedente y puedes fijar límites suaves o estrictos desde la configuración de facturación.",
      },
    ],
  },

  changelog: {
    title: "Novedades",
    description:
      "Mantente informado sobre las incorporaciones y mejoras más recientes que hemos hecho en Arce.",
    highlightsLabel: "Nuevo y mejorado",
    fixesLabel: "Correcciones",
    entries: [
      {
        version: "v1.0.0",
        date: "20 oct 2026",
        heading: "Arce ya está disponible de forma general",
        summary:
          "Tras un año en vista previa, Arce ya está disponible de forma general. Cada espacio obtiene migraciones sin tiempo de inactividad, edge functions y un panel renovado.",
        highlights: [
          {
            label: "Panel",
            text: "Una consola rediseñada con navegación más rápida y facturación unificada.",
          },
          {
            label: "Edge functions",
            text: "Los disparadores serverless ahora se ejecutan en el edge, más cerca de tus usuarios.",
          },
          {
            label: "SSO",
            text: "El inicio de sesión único está disponible en el plan Business mediante SAML y OIDC.",
          },
        ],
        fixes: [
          {
            label: "Replicación",
            text: "Se corrigió un retraso poco frecuente entre el primario y las réplicas de lectura.",
          },
        ],
      },
      {
        version: "v0.9.0",
        date: "27 abr 2026",
        heading: "Migraciones seguras en ramas de desarrollo",
        summary:
          "Las migraciones seguras ahora se pueden activar en ramas de desarrollo, habilitando cambios de esquema sin tiempo de inactividad y con capacidad de reversión.",
        highlights: [
          {
            label: "Filtros",
            text: "Los filtros de IA ahora mejoran tus filtros compatibles existentes en lugar de reemplazarlos.",
          },
          {
            label: "Comentarios",
            text: "Al abrir una notificación sobre un comentario, el campo de respuesta se enfoca automáticamente.",
          },
          {
            label: "Editor",
            text: "Explora varias imágenes en el editor sin necesidad de alejar la vista.",
          },
        ],
        fixes: [
          {
            label: "Plantillas",
            text: "Al crear una plantilla, ahora puedes elegir a qué equipo pertenece.",
          },
        ],
      },
      {
        version: "v0.8.0",
        date: "15 ene 2026",
        heading: "Recuperación a un punto en el tiempo y branching",
        summary:
          "Restaura cualquier base de datos a un instante concreto y ramifica esquemas para desarrollo aislado sin afectar los datos de producción.",
        highlights: [
          {
            label: "Recuperación",
            text: "La recuperación a un punto en el tiempo ya está disponible en todos los planes.",
          },
          {
            label: "Ramas",
            text: "Crea ramas de base de datos desechables para pull requests y vistas previas.",
          },
        ],
        fixes: [],
      },
    ],
  },

  notFound: {
    title: "Página no encontrada",
    text: "Lo sentimos, no pudimos encontrar la página que buscas.",
    cta: "Ir a la página de inicio",
  },
};
