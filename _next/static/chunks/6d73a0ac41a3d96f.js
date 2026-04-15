(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,62860,e=>{"use strict";var n=e.i(43476),a=e.i(71645);function i(){let[e,i]=(0,a.useState)("Cocina asturiana de mercado"),[s,r]=(0,a.useState)("Producto local, recetas de siempre y un equipo que disfruta cocinando para ti."),[t,o]=(0,a.useState)(["#8B4513","#D2691E"]),[l,c]=(0,a.useState)(!1),[d,p]=(0,a.useState)(!1),[x,m]=(0,a.useState)(!0),g=[{title:"Cocina asturiana de mercado",desc:"Producto local, recetas de siempre y un equipo que disfruta cocinando para ti.",color:["#8B4513","#D2691E"]},{title:"Sabores de Asturias",desc:"Producto local, recetas de siempre y un equipo que disfruta cocinando para ti.",color:["#8B4513","#D2691E"]},{title:"Sabores de Asturias",desc:"Cocina tradicional con producto del día. Menú degustación desde 28 €. Reserva tu mesa.",color:["#8B4513","#D2691E"]},{title:"Sabores de Asturias",desc:"Cocina tradicional con producto del día. Menú degustación desde 28 €. Reserva tu mesa.",color:["#1a365d","#2c5282"]}];(0,a.useEffect)(()=>{let e=0,n=setInterval(()=>{1==(e=(e+1)%6)?i(g[1].title):2===e?r(g[2].desc):3===e?o(g[3].color):4===e?(c(!0),setTimeout(()=>{c(!1),p(!0),setTimeout(()=>p(!1),2e3)},1200)):5===e&&(i(g[0].title),r(g[0].desc),o(g[0].color))},3e3);return()=>clearInterval(n)},[]),(0,a.useEffect)(()=>{let e=setInterval(()=>m(e=>!e),530);return()=>clearInterval(e)},[]);let h=l?"#f59e0b":d?"#22c55e":"rgba(255,255,255,0.4)";return(0,n.jsxs)("div",{className:"nl-cms-container",children:[(0,n.jsxs)("div",{className:"nl-cms-editor",children:[(0,n.jsxs)("div",{className:"nl-cms-editor-header",children:[(0,n.jsx)("span",{className:"nl-cms-editor-title",children:"Editor"}),(0,n.jsxs)("span",{className:"nl-cms-status",style:{color:h},children:[(0,n.jsx)("span",{className:"nl-cms-status-dot",style:{background:h}}),l?"Publicando...":d?"Publicado":"Editor en vivo"]})]}),(0,n.jsxs)("div",{className:"nl-cms-field",children:[(0,n.jsx)("label",{children:"Título principal"}),(0,n.jsxs)("div",{className:"nl-cms-input",children:[e,(0,n.jsx)("span",{className:"nl-cursor",style:{opacity:+!!x},children:"|"})]})]}),(0,n.jsxs)("div",{className:"nl-cms-field",children:[(0,n.jsx)("label",{children:"Descripción"}),(0,n.jsxs)("div",{className:"nl-cms-toolbar",children:[(0,n.jsx)("span",{className:"nl-cms-toolbar-btn",children:(0,n.jsx)("b",{children:"B"})}),(0,n.jsx)("span",{className:"nl-cms-toolbar-btn",children:(0,n.jsx)("i",{children:"I"})}),(0,n.jsx)("span",{className:"nl-cms-toolbar-btn",style:{textDecoration:"underline"},children:"U"}),(0,n.jsx)("span",{className:"nl-cms-toolbar-btn",children:"🔗"})]}),(0,n.jsx)("div",{className:"nl-cms-input nl-textarea",children:s})]}),(0,n.jsxs)("div",{className:"nl-cms-field",children:[(0,n.jsx)("label",{children:"Color principal"}),(0,n.jsx)("div",{style:{display:"flex",gap:8},children:[["#8B4513","#D2691E"],["#1a365d","#2c5282"],["#22543d","#276749"],["#7f1d1d","#991b1b"]].map(([e],a)=>(0,n.jsx)("div",{className:"nl-color-swatch",style:{background:e,borderColor:t[0]===e?"#3B82F6":"transparent"}},a))})]}),(0,n.jsx)("button",{className:"nl-cms-save-btn",style:{background:l?"#f59e0b":d?"#22c55e":"#3B82F6"},children:l?"Publicando...":d?"✓ Publicado":"Publicar cambios →"})]}),(0,n.jsxs)("div",{className:"nl-cms-preview",children:[(0,n.jsxs)("div",{className:"nl-preview-chrome",children:[(0,n.jsx)("span",{className:"nl-dot nl-dot-r"}),(0,n.jsx)("span",{className:"nl-dot nl-dot-y"}),(0,n.jsx)("span",{className:"nl-dot nl-dot-g"}),(0,n.jsx)("span",{className:"nl-preview-url",children:"casafermin.es"})]}),(0,n.jsxs)("div",{className:"nl-preview-body",children:[(0,n.jsxs)("div",{className:"nl-preview-nav",children:[(0,n.jsx)("span",{className:"nl-preview-logo",children:"Casa Fermín"}),(0,n.jsxs)("span",{className:"nl-preview-links",children:[(0,n.jsx)("span",{children:"Carta"}),(0,n.jsx)("span",{children:"Reservas"}),(0,n.jsx)("span",{children:"Contacto"})]})]}),(0,n.jsxs)("div",{className:"nl-preview-hero",style:{background:`linear-gradient(135deg, ${t[0]}, ${t[1]})`,transition:"background 0.8s ease"},children:[(0,n.jsx)("h3",{children:e}),(0,n.jsx)("p",{children:s})]}),(0,n.jsx)("div",{className:"nl-preview-cards",children:["Menú del día","Carta","Reservar"].map((e,a)=>(0,n.jsxs)("div",{className:"nl-preview-card",children:[(0,n.jsx)("div",{className:"nl-card-color",style:{background:`linear-gradient(135deg, ${t[1]}, ${t[0]}88)`,transition:"background 0.8s ease"}}),(0,n.jsx)("h4",{children:e}),(0,n.jsx)("p",{children:["Dos platos, postre y café","Platos de temporada","Online o por teléfono"][a]})]},a))})]})]})]})}function s({children:e,className:i=""}){let s=(0,a.useRef)(null),[r,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=s.current;if(!e)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&t(!0)},{threshold:.1,rootMargin:"0px 0px -40px 0px"});return n.observe(e),()=>n.disconnect()},[]),(0,n.jsx)("div",{ref:s,className:`nl-reveal ${r?"nl-visible":""} ${i}`,children:e})}function r(){let[e,r]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>r(window.scrollY>60);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap",rel:"stylesheet"}),(0,n.jsx)("style",{children:t}),(0,n.jsxs)("div",{className:"nl-page",children:[(0,n.jsxs)("nav",{className:`nl-nav ${e?"nl-nav-scrolled":""}`,children:[(0,n.jsx)("a",{href:"#",className:"nl-nav-logo",children:"Sitios"}),(0,n.jsxs)("div",{className:"nl-nav-links",children:[(0,n.jsx)("a",{href:"#ventajas",children:"Ventajas"}),(0,n.jsx)("a",{href:"#ejemplos",children:"Ejemplos"}),(0,n.jsx)("a",{href:"#cms",children:"El CMS"}),(0,n.jsx)("a",{href:"#precio",children:"Precio"}),(0,n.jsx)("a",{href:"#contacto",className:"nl-nav-cta",children:"Contactar"})]})]}),(0,n.jsxs)("section",{className:"nl-hero",children:[(0,n.jsx)("div",{className:"nl-hero-grid"}),(0,n.jsxs)("div",{className:"nl-hero-content",children:[(0,n.jsx)("div",{className:"nl-hero-tag",children:"Webs para negocios locales"}),(0,n.jsxs)("h1",{children:["La web de tu negocio.",(0,n.jsx)("br",{}),(0,n.jsx)("em",{children:"Simple y directa."})]}),(0,n.jsx)("p",{className:"nl-hero-sub",children:"Una web profesional con un gestor de contenidos que entiende cualquiera. Sin plugins. Sin actualizaciones. Sin mantenimiento. Pagas una vez y te olvidas de problemas."}),(0,n.jsxs)("div",{className:"nl-hero-actions",children:[(0,n.jsx)("a",{href:"#precio",className:"nl-btn-primary",children:"Ver precio →"}),(0,n.jsx)("a",{href:"#cms",className:"nl-btn-ghost",children:"Ver el CMS en acción"})]}),(0,n.jsx)("div",{className:"nl-hero-metrics",children:[["48h","Tiempo de entrega"],["0","Plugins que instalar"],["0 €","Mantenimiento mensual"],["0","Actualizaciones necesarias"]].map(([e,a],i)=>(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"nl-metric-value",children:e}),(0,n.jsx)("div",{className:"nl-metric-label",children:a})]},i))})]})]}),(0,n.jsx)("section",{className:"nl-section nl-pain",id:"ventajas",children:(0,n.jsxs)("div",{className:"nl-container",children:[(0,n.jsx)(s,{children:(0,n.jsx)("div",{className:"nl-section-tag",children:"El problema"})}),(0,n.jsx)(s,{children:(0,n.jsxs)("h2",{className:"nl-section-title",children:["WordPress fue una buena idea.",(0,n.jsx)("br",{}),"En 2010."]})}),(0,n.jsx)(s,{children:(0,n.jsx)("p",{className:"nl-section-subtitle",children:"Hoy, tener una web en WordPress significa asumir cosas que no deberías tener que asumir."})}),(0,n.jsx)("div",{className:"nl-pain-grid",children:[{icon:"⚠",title:"Actualizaciones constantes",text:"WordPress, theme, plugins... si no actualizas, tu web es vulnerable. Si actualizas, puede romperse. Pierdes siempre."},{icon:"⏱",title:"Lenta por defecto",text:"Plugins de caché, optimización de imágenes, CDN... Solo para que cargue en menos de 4 segundos. Y Google penaliza la lentitud."},{icon:"🔒",title:"Problemas de seguridad",text:"WordPress es el CMS más atacado del mundo. El 43% de las webs lo usan. Los hackers también lo saben."},{icon:"💰",title:"Costes ocultos",text:"Hosting, dominio, theme premium, plugins de pago, mantenimiento, alguien que lo actualice cuando se rompe... La factura crece."}].map((e,a)=>(0,n.jsx)(s,{children:(0,n.jsxs)("div",{className:"nl-pain-card",children:[(0,n.jsx)("div",{className:"nl-pain-icon",children:e.icon}),(0,n.jsx)("h3",{children:e.title}),(0,n.jsx)("p",{children:e.text})]})},a))})]})}),(0,n.jsx)("section",{className:"nl-section nl-comparison",children:(0,n.jsxs)("div",{className:"nl-container",children:[(0,n.jsx)(s,{children:(0,n.jsx)("div",{className:"nl-section-tag",children:"Comparativa real"})}),(0,n.jsx)(s,{children:(0,n.jsxs)("h2",{className:"nl-section-title",children:["No es marketing.",(0,n.jsx)("br",{}),"Son datos."]})}),(0,n.jsx)(s,{children:(0,n.jsx)("p",{className:"nl-section-subtitle",children:"Comparativa directa entre una web WordPress media y lo que entregamos nosotros."})}),(0,n.jsx)(s,{children:(0,n.jsx)("div",{className:"nl-table-wrapper",children:(0,n.jsxs)("table",{className:"nl-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{}),(0,n.jsx)("th",{className:"nl-th-us",children:"Nosotros"}),(0,n.jsx)("th",{children:"WordPress"}),(0,n.jsx)("th",{children:"Wix / Squarespace"})]})}),(0,n.jsx)("tbody",{children:[["Mantenimiento necesario","Ninguno","Constante (plugins, core, theme)","Ninguno"],["Facilidad de uso","Muy simple","Curva de aprendizaje alta","Media"],["Riesgo de que se rompa","Nulo","Alto (actualizaciones, conflictos)","Bajo"],["Plugins necesarios","Cero","10-20 de media","Depende del plan"],["Coste tras la entrega","0 €","Hosting + plugins + mantenimiento","12-40 €/mes"],["Hosting incluido","✓","✗","✓"],["SSL incluido","✓","Depende del hosting","✓"],["Diseño a medida","✓","Templates","Templates"],["Seguridad","Sin vulnerabilidades","Objetivo frecuente de ataques","Buena"]].map(([e,a,i,s],r)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e}),(0,n.jsx)("td",{className:"nl-td-us",children:a}),(0,n.jsx)("td",{children:i}),(0,n.jsx)("td",{children:s})]},r))})]})})})]})}),(0,n.jsx)("section",{className:"nl-section",id:"como-funciona",children:(0,n.jsxs)("div",{className:"nl-container",children:[(0,n.jsx)(s,{children:(0,n.jsx)("div",{className:"nl-section-tag",children:"Cómo funciona"})}),(0,n.jsx)(s,{children:(0,n.jsxs)("h2",{className:"nl-section-title",children:["Nos cuentas qué necesitas.",(0,n.jsx)("br",{}),"Nosotros hacemos el resto."]})}),(0,n.jsx)(s,{children:(0,n.jsx)("p",{className:"nl-section-subtitle",children:"En 48 horas tienes tu web online, con todo incluido. Tú solo pones el contenido."})}),(0,n.jsx)("div",{className:"nl-features-grid",children:[{n:"01",title:"Nos cuentas tu negocio",text:"Qué haces, a quién te diriges, qué quieres transmitir. Una llamada de 15 minutos es suficiente."},{n:"02",title:"Diseñamos tu web",text:"Creamos un diseño a medida para tu negocio. Sin templates genéricos. Tu web no se parece a ninguna otra."},{n:"03",title:"La publicamos",text:"En 48h tu web está online. Hosting, dominio, SSL, SEO técnico. Todo configurado y funcionando."},{n:"04",title:"Tú gestionas el contenido",text:"Con nuestro CMS puedes cambiar textos, imágenes y secciones. Tan fácil como escribir un WhatsApp."},{n:"05",title:"Nosotros mantenemos todo",text:"Hosting, rendimiento, seguridad, certificados. Todo incluido. Tú te olvidas de la parte técnica."},{n:"06",title:"Google te encuentra",text:"SEO técnico de serie: velocidad, estructura, datos estructurados, sitemap. Tu web nace optimizada."}].map((e,a)=>(0,n.jsx)(s,{children:(0,n.jsxs)("div",{className:"nl-feature-card",children:[(0,n.jsx)("div",{className:"nl-feature-number",children:e.n}),(0,n.jsx)("h3",{children:e.title}),(0,n.jsx)("p",{children:e.text})]})},a))})]})}),(0,n.jsx)("section",{className:"nl-section nl-sectors",id:"ejemplos",children:(0,n.jsxs)("div",{className:"nl-container",children:[(0,n.jsxs)("div",{className:"nl-sectors-intro",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(s,{children:(0,n.jsx)("div",{className:"nl-section-tag",children:"Sectores"})}),(0,n.jsx)(s,{children:(0,n.jsx)("h2",{className:"nl-section-title",children:"Webs para todo tipo de negocios locales"})}),(0,n.jsx)(s,{children:(0,n.jsx)("p",{className:"nl-section-subtitle",style:{marginBottom:0},children:"Restaurantes, talleres, bufetes, clínicas, asesores... Cada negocio es diferente y su web también."})})]}),(0,n.jsx)(s,{children:(0,n.jsx)("div",{className:"nl-sector-tags",children:["Hostelería","Talleres mecánicos","Abogados","Asesorías","Clínicas","Inmobiliarias","Gimnasios","Peluquerías","Tiendas locales","Reformas","Carpintería","Arquitectura","Fotografía","Veterinarios"].map(e=>(0,n.jsx)("span",{className:"nl-sector-tag",children:e},e))})})]}),(0,n.jsx)("div",{className:"nl-examples-grid",children:[{colors:["#8B4513","#D2691E"],name:"Casa Fermín",sector:"Hostelería",sub:"Cocina asturiana de mercado",desc:"Restaurante con carta digital, reservas y galería de platos."},{colors:["#1a365d","#2c5282"],name:"Rodríguez & Suárez",sector:"Abogados",sub:"Abogados",desc:"Bufete con áreas de práctica, equipo y formulario de consulta."},{colors:["#1a1a2e","#16213e"],name:"Talleres Ordóñez",sector:"Talleres",sub:"Mecánica integral",desc:"Taller con servicios, cita previa online y ubicación."},{colors:["#22543d","#276749"],name:"Clínica Vega",sector:"Salud",sub:"Fisioterapia deportiva",desc:"Clínica con tratamientos, equipo profesional y reserva online."},{colors:["#2d2d2d","#4a4a4a"],name:"Hotel Asturias",sector:"Hostelería",sub:"Alojamiento con encanto",desc:"Hotel rural con habitaciones, galería y motor de reservas."},{colors:["#7f1d1d","#991b1b"],name:"Asesores Pelayo",sector:"Asesoría",sub:"Asesoría fiscal y laboral",desc:"Asesoría con servicios, solicitud de cita y área de descargas."}].map((e,a)=>(0,n.jsx)(s,{children:(0,n.jsxs)("div",{className:"nl-example-card",children:[(0,n.jsx)("div",{className:"nl-example-preview",children:(0,n.jsxs)("div",{className:"nl-example-inner",children:[(0,n.jsxs)("div",{className:"nl-browser-dots",children:[(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{})]}),(0,n.jsxs)("div",{className:"nl-mini-site",children:[(0,n.jsx)("div",{className:"nl-mini-hero",style:{background:`linear-gradient(135deg, ${e.colors[0]}, ${e.colors[1]})`},children:(0,n.jsxs)("div",{className:"nl-mini-hero-text",children:[e.name,(0,n.jsx)("br",{}),e.sub]})}),(0,n.jsxs)("div",{className:"nl-mini-bars",children:[(0,n.jsx)("span",{style:{background:e.colors[1]}}),(0,n.jsx)("span",{style:{background:e.colors[0],opacity:.5}}),(0,n.jsx)("span",{style:{background:e.colors[1],opacity:.3}})]})]})]})}),(0,n.jsxs)("div",{className:"nl-example-info",children:[(0,n.jsx)("div",{className:"nl-example-sector",children:e.sector}),(0,n.jsx)("div",{className:"nl-example-name",children:e.name}),(0,n.jsx)("div",{className:"nl-example-desc",children:e.desc})]})]})},a))})]})}),(0,n.jsx)("section",{className:"nl-section nl-cms-demo",id:"cms",children:(0,n.jsxs)("div",{className:"nl-container",children:[(0,n.jsx)(s,{children:(0,n.jsx)("div",{className:"nl-section-tag",children:"El gestor de contenidos"})}),(0,n.jsx)(s,{children:(0,n.jsxs)("h2",{className:"nl-section-title",children:["Edita tu web como",(0,n.jsx)("br",{}),"si editaras un documento"]})}),(0,n.jsx)(s,{children:(0,n.jsx)("p",{className:"nl-section-subtitle",children:"Sin código. Sin formación. Cambias un texto, le das a guardar, y tu web se actualiza al instante."})}),(0,n.jsx)(s,{children:(0,n.jsxs)("div",{className:"nl-demo-wrapper",children:[(0,n.jsx)("div",{className:"nl-demo-badge",children:"▶ Demo en vivo — se reproduce automáticamente"}),(0,n.jsx)(i,{})]})}),(0,n.jsx)("div",{className:"nl-cms-features-row",children:[{icon:"✏️",title:"Edición visual",text:"Cambias texto e imagen y ves el resultado en tiempo real. Sin sorpresas."},{icon:"⚡",title:"Publicación instantánea",text:"Guardas y los cambios están online en menos de 10 segundos."},{icon:"🔒",title:"Sin riesgo de romper nada",text:"Solo puedes editar contenido. El diseño y la estructura están protegidos."}].map((e,a)=>(0,n.jsx)(s,{children:(0,n.jsxs)("div",{className:"nl-cms-feature",children:[(0,n.jsx)("div",{className:"nl-cms-feature-icon",children:e.icon}),(0,n.jsx)("h4",{children:e.title}),(0,n.jsx)("p",{children:e.text})]})},a))})]})}),(0,n.jsx)("section",{className:"nl-section nl-pricing",id:"precio",children:(0,n.jsxs)("div",{className:"nl-container",children:[(0,n.jsx)(s,{children:(0,n.jsx)("div",{className:"nl-section-tag",children:"Precio"})}),(0,n.jsx)(s,{children:(0,n.jsx)("h2",{className:"nl-section-title",children:"Un precio. Todo incluido."})}),(0,n.jsx)(s,{children:(0,n.jsx)("p",{className:"nl-section-subtitle",children:"Sin letra pequeña, sin extras, sin sorpresas en la factura."})}),(0,n.jsx)(s,{children:(0,n.jsxs)("div",{className:"nl-pricing-card",children:[(0,n.jsx)("div",{className:"nl-pricing-label",children:"Precio cerrado"}),(0,n.jsxs)("div",{className:"nl-pricing-amount",children:[(0,n.jsx)("span",{className:"nl-pricing-currency",children:"€"}),(0,n.jsx)("span",{className:"nl-pricing-value",children:"499"})]}),(0,n.jsx)("p",{className:"nl-pricing-desc",children:"Pago único. Sin cuotas mensuales. Sin costes ocultos."}),(0,n.jsx)("div",{className:"nl-pricing-features",children:[["Diseño web a medida","para tu negocio, no un template"],["Hosting incluido","durante el primer año"],["Dominio incluido","(.es o .com)"],["Certificado SSL","(el candado verde)"],["CMS propio","para editar textos e imágenes cuando quieras"],["Cero mantenimiento","no tienes que tocar nada técnico, nunca"],["Responsive","se ve perfecta en móvil, tablet y PC"],["Entrega en 48h","desde que recibimos tu contenido"]].map(([e,a],i)=>(0,n.jsxs)("div",{className:"nl-pricing-feature",children:[(0,n.jsx)("div",{className:"nl-pricing-check",children:"✓"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:e})," — ",a]})]},i))}),(0,n.jsx)("a",{href:"#contacto",className:"nl-pricing-cta",children:"Quiero mi web →"}),(0,n.jsx)("p",{className:"nl-pricing-note",children:"Precio para web estándar de negocio local. Proyectos más complejos, consúltanos."})]})})]})}),(0,n.jsx)("section",{className:"nl-section nl-faq",id:"faq",children:(0,n.jsxs)("div",{className:"nl-container",children:[(0,n.jsx)(s,{children:(0,n.jsx)("div",{className:"nl-section-tag",children:"Preguntas frecuentes"})}),(0,n.jsx)(s,{children:(0,n.jsx)("h2",{className:"nl-section-title",children:"Lo que nos suelen preguntar"})}),(0,n.jsx)("div",{className:"nl-faq-grid",children:[["¿En cuánto tiempo tengo mi web?","En 48 horas desde que recibimos tu contenido (textos e imágenes). Si necesitas ayuda con el contenido, te echamos una mano."],["¿Puedo cambiar los textos yo mismo?","Sí. Tienes acceso a un gestor de contenidos donde puedes cambiar textos, imágenes y secciones sin necesidad de saber programar."],["¿Hay costes mensuales?","No. Pagas una vez y la web es tuya. El hosting del primer año está incluido. A partir del segundo año, el coste de hosting es mínimo."],["¿Tengo que comprar hosting aparte?","No. El hosting está incluido en el precio. Y es hosting de alto rendimiento, no un servidor compartido lento."],["¿Y si necesito funcionalidades extra?","Reservas, formularios, integración con redes sociales, Google Maps, WhatsApp... lo hablamos y lo incluimos."],["¿Mi web saldrá en Google?","Sí. Todas nuestras webs se entregan con la estructura técnica que Google necesita para indexarlas correctamente: sitemap, metadatos, datos estructurados y URLs limpias."]].map(([e,a],i)=>(0,n.jsx)(s,{children:(0,n.jsxs)("div",{className:"nl-faq-item",children:[(0,n.jsx)("h3",{children:e}),(0,n.jsx)("p",{children:a})]})},i))})]})}),(0,n.jsxs)("section",{className:"nl-cta-final",id:"contacto",children:[(0,n.jsx)("h2",{children:"Tu negocio merece una web que funcione"}),(0,n.jsx)("p",{children:"Cuéntanos qué necesitas y en 48h tienes tu web online."}),(0,n.jsx)("a",{href:"mailto:hola@esconzeta.com",className:"nl-btn-white",children:"Hablemos →"})]}),(0,n.jsx)("footer",{className:"nl-footer",children:(0,n.jsx)("p",{children:"© 2026 Sitios. Todos los derechos reservados."})})]})]})}let t=`
  /* Hide parent layout nav/footer */
  .negocios-locales-standalone ~ footer,
  .negocios-locales-standalone ~ nav,
  .min-h-screen > nav,
  .min-h-screen > footer,
  .min-h-screen > div[class*="cookie"] {
    display: none !important;
  }

  .nl-page {
    font-family: 'DM Sans', -apple-system, sans-serif;
    color: #1B2A4A;
    background: #fff;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  .nl-page *, .nl-page *::before, .nl-page *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* NAV */
  .nl-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
    padding: 20px 48px; display: flex; align-items: center; justify-content: space-between;
    transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
  }
  .nl-nav-scrolled {
    padding: 14px 48px;
    background: rgba(17,27,48,0.92);
    backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .nl-nav-logo {
    font-family: 'DM Serif Display', Georgia, serif;
    font-weight: 400; font-size: 22px; color: #fff; text-decoration: none;
  }
  .nl-nav-links { display: flex; gap: 32px; align-items: center; }
  .nl-nav-links a { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.65); text-decoration: none; transition: color 0.3s; }
  .nl-nav-links a:hover { color: #fff; }
  .nl-nav-cta { background: #3B82F6 !important; color: #fff !important; padding: 10px 24px; border-radius: 6px; font-weight: 600 !important; }
  .nl-nav-cta:hover { background: #2563EB !important; transform: translateY(-1px); }

  /* HERO */
  .nl-hero { background: #111B30; min-height: 100vh; display: flex; align-items: center; position: relative; overflow: hidden; }
  .nl-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.04) 0%, transparent 40%); }
  .nl-hero-grid { position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 32px 32px; }
  .nl-hero-content { position: relative; max-width: 1200px; margin: 0 auto; padding: 140px 48px 100px; }
  .nl-hero-tag { font-size: 12px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #3B82F6; margin-bottom: 28px; animation: nlFadeUp 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s both; }
  .nl-hero h1 { font-family: 'DM Serif Display', serif; font-size: clamp(42px,5.5vw,72px); font-weight: 400; color: #fff; line-height: 1.08; max-width: 800px; margin-bottom: 28px; animation: nlFadeUp 0.8s cubic-bezier(0.23,1,0.32,1) 0.35s both; }
  .nl-hero h1 em { font-style: italic; color: #3B82F6; }
  .nl-hero-sub { font-size: 19px; font-weight: 300; color: rgba(255,255,255,0.8); line-height: 1.65; max-width: 560px; margin-bottom: 44px; animation: nlFadeUp 0.8s cubic-bezier(0.23,1,0.32,1) 0.5s both; }
  .nl-hero-actions { display: flex; gap: 16px; align-items: center; animation: nlFadeUp 0.8s cubic-bezier(0.23,1,0.32,1) 0.65s both; }
  .nl-hero-metrics { display: flex; gap: 56px; margin-top: 72px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.08); animation: nlFadeUp 0.8s cubic-bezier(0.23,1,0.32,1) 0.8s both; }
  .nl-metric-value { font-family: 'DM Serif Display', serif; font-size: 36px; color: #fff; }
  .nl-metric-label { font-size: 13px; color: rgba(255,255,255,0.45); margin-top: 6px; }

  /* BUTTONS */
  .nl-btn-primary { display: inline-flex; align-items: center; gap: 8px; background: #3B82F6; color: #fff; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600; padding: 16px 32px; border-radius: 8px; text-decoration: none; transition: all 0.3s; }
  .nl-btn-primary:hover { background: #2563EB; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(59,130,246,0.35); }
  .nl-btn-ghost { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: rgba(255,255,255,0.7); font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; padding: 16px 28px; border-radius: 8px; text-decoration: none; border: 1px solid rgba(255,255,255,0.15); transition: all 0.3s; }
  .nl-btn-ghost:hover { border-color: rgba(255,255,255,0.35); color: #fff; transform: translateY(-2px); }

  /* SECTIONS */
  .nl-section { padding: 120px 48px; }
  .nl-container { max-width: 1200px; margin: 0 auto; }
  .nl-section-tag { font-size: 12px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #3B82F6; margin-bottom: 16px; }
  .nl-section-title { font-family: 'DM Serif Display', serif; font-size: clamp(32px,3.5vw,48px); font-weight: 400; line-height: 1.15; max-width: 680px; margin-bottom: 20px; }
  .nl-section-subtitle { font-size: 18px; font-weight: 300; color: rgba(27,42,74,0.55); line-height: 1.65; max-width: 560px; margin-bottom: 64px; }

  /* PAIN */
  .nl-pain { background: #F8F9FB; }
  .nl-pain-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }
  .nl-pain-card { background: #fff; border-radius: 12px; padding: 36px; border: 1px solid rgba(27,42,74,0.06); transition: all 0.3s; }
  .nl-pain-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(27,42,74,0.08); }
  .nl-pain-icon { width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 20px; background: rgba(59,130,246,0.08); }
  .nl-pain-card h3 { font-size: 17px; font-weight: 700; margin-bottom: 10px; }
  .nl-pain-card p { font-size: 15px; font-weight: 300; color: rgba(27,42,74,0.55); line-height: 1.6; }

  /* COMPARISON */
  .nl-comparison { background: #111B30; color: #fff; }
  .nl-comparison .nl-section-title { color: #fff; }
  .nl-comparison .nl-section-subtitle { color: rgba(255,255,255,0.5); }
  .nl-table-wrapper { overflow-x: auto; }
  .nl-table { width: 100%; border-collapse: collapse; min-width: 600px; }
  .nl-table thead th { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 16px 24px; text-align: left; color: rgba(255,255,255,0.4); border-bottom: 1px solid rgba(255,255,255,0.08); }
  .nl-th-us { color: #3B82F6 !important; }
  .nl-table tbody td { padding: 20px 24px; font-size: 15px; color: rgba(255,255,255,0.65); border-bottom: 1px solid rgba(255,255,255,0.04); }
  .nl-table tbody td:first-child { font-weight: 500; color: rgba(255,255,255,0.85); }
  .nl-td-us { color: #fff !important; font-weight: 600 !important; }
  .nl-table tbody tr:hover td { background: rgba(255,255,255,0.02); }

  /* FEATURES */
  .nl-features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 32px; }
  .nl-feature-card { padding: 40px 32px; border-radius: 12px; background: #fff; border: 1px solid rgba(27,42,74,0.06); transition: all 0.35s; position: relative; overflow: hidden; }
  .nl-feature-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: #3B82F6; transform: scaleX(0); transform-origin: left; transition: transform 0.4s cubic-bezier(0.23,1,0.32,1); }
  .nl-feature-card:hover::before { transform: scaleX(1); }
  .nl-feature-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(27,42,74,0.1); }
  .nl-feature-number { font-family: 'DM Serif Display', serif; font-size: 42px; color: #3B82F6; opacity: 0.2; margin-bottom: 20px; }
  .nl-feature-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 12px; }
  .nl-feature-card p { font-size: 15px; font-weight: 300; color: rgba(27,42,74,0.55); line-height: 1.6; }

  /* SECTORS */
  .nl-sectors { background: #F8F9FB; }
  .nl-sectors-intro { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; margin-bottom: 80px; }
  .nl-sector-tags { display: flex; flex-wrap: wrap; gap: 10px; padding-top: 12px; }
  .nl-sector-tag { display: inline-block; padding: 10px 20px; border-radius: 100px; font-size: 14px; font-weight: 500; background: #fff; color: #1B2A4A; border: 1px solid rgba(27,42,74,0.08); transition: all 0.3s; cursor: default; }
  .nl-sector-tag:hover { border-color: #3B82F6; color: #3B82F6; transform: translateY(-2px); }
  .nl-examples-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 28px; }
  .nl-example-card { border-radius: 16px; overflow: hidden; background: #fff; border: 1px solid rgba(27,42,74,0.06); transition: all 0.4s cubic-bezier(0.23,1,0.32,1); cursor: pointer; }
  .nl-example-card:hover { transform: translateY(-8px); box-shadow: 0 24px 64px rgba(27,42,74,0.12); }
  .nl-example-preview { width: 100%; aspect-ratio: 16/10; background: #111B30; position: relative; overflow: hidden; }
  .nl-example-inner { position: absolute; inset: 16px; border-radius: 8px; overflow: hidden; background: #fff; }
  .nl-browser-dots { display: flex; gap: 6px; padding: 10px 14px; background: #f0f0f2; border-bottom: 1px solid #e5e5e7; }
  .nl-browser-dots span { width: 8px; height: 8px; border-radius: 50%; background: #ddd; }
  .nl-browser-dots span:first-child { background: #ff5f57; }
  .nl-browser-dots span:nth-child(2) { background: #febc2e; }
  .nl-browser-dots span:nth-child(3) { background: #28c840; }
  .nl-mini-site { padding: 12px; height: calc(100% - 33px); display: flex; flex-direction: column; gap: 8px; }
  .nl-mini-hero { flex: 1; border-radius: 6px; display: flex; align-items: flex-end; padding: 14px; position: relative; overflow: hidden; }
  .nl-mini-hero::before { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.5), transparent); }
  .nl-mini-hero-text { position: relative; color: white; font-size: 9px; font-weight: 700; line-height: 1.3; }
  .nl-mini-bars { display: flex; gap: 6px; }
  .nl-mini-bars span { height: 6px; border-radius: 3px; flex: 1; }
  .nl-example-info { padding: 24px; }
  .nl-example-sector { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #3B82F6; margin-bottom: 8px; }
  .nl-example-name { font-size: 17px; font-weight: 700; margin-bottom: 6px; }
  .nl-example-desc { font-size: 13px; color: rgba(27,42,74,0.55); line-height: 1.5; }

  /* CMS DEMO */
  .nl-cms-demo { background: #111B30; color: #fff; }
  .nl-cms-demo .nl-section-title { color: #fff; }
  .nl-cms-demo .nl-section-subtitle { color: rgba(255,255,255,0.5); }
  .nl-demo-wrapper { position: relative; border-radius: 20px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 32px 80px rgba(0,0,0,0.3); }
  .nl-demo-badge { position: absolute; top: 16px; left: 50%; transform: translateX(-50%); z-index: 10; background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.3); backdrop-filter: blur(12px); padding: 8px 20px; border-radius: 100px; font-size: 12px; font-weight: 600; color: #93C5FD; letter-spacing: 0.5px; white-space: nowrap; }
  .nl-cms-container { display: grid; grid-template-columns: 1fr 1fr; min-height: 520px; background: rgba(255,255,255,0.02); }
  .nl-cms-editor { padding: 56px 32px 32px; border-right: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; }
  .nl-cms-editor-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 28px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .nl-cms-editor-title { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.5); letter-spacing: 1px; text-transform: uppercase; }
  .nl-cms-status { font-size: 12px; display: flex; align-items: center; gap: 6px; transition: color 0.4s; }
  .nl-cms-status-dot { width: 6px; height: 6px; border-radius: 50%; transition: background 0.4s; }
  .nl-cms-field { margin-bottom: 20px; }
  .nl-cms-field label { display: block; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.4); margin-bottom: 8px; }
  .nl-cms-input { width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 12px 16px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #fff; transition: all 0.5s ease; }
  .nl-textarea { min-height: 80px; line-height: 1.5; }
  .nl-cursor { color: #3B82F6; font-weight: 300; }
  .nl-cms-toolbar { display: flex; gap: 4px; margin-bottom: 8px; }
  .nl-cms-toolbar-btn { width: 32px; height: 32px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.4); font-size: 13px; display: flex; align-items: center; justify-content: center; }
  .nl-color-swatch { width: 32px; height: 32px; border-radius: 8px; border: 2px solid transparent; transition: border-color 0.3s; }
  .nl-cms-save-btn { margin-top: auto; color: #fff; border: none; padding: 14px 24px; border-radius: 8px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.4s ease; text-align: center; }
  .nl-cms-preview { background: #fff; display: flex; flex-direction: column; }
  .nl-preview-chrome { display: flex; align-items: center; gap: 8px; padding: 12px 20px; background: #f0f0f2; border-bottom: 1px solid #e5e5e7; }
  .nl-dot { width: 10px; height: 10px; border-radius: 50%; }
  .nl-dot-r { background: #ff5f57; }
  .nl-dot-y { background: #febc2e; }
  .nl-dot-g { background: #28c840; }
  .nl-preview-url { flex: 1; margin-left: 12px; background: #fff; border-radius: 4px; padding: 4px 12px; font-size: 11px; color: #999; }
  .nl-preview-body { flex: 1; padding: 32px; color: #1B2A4A; }
  .nl-preview-nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
  .nl-preview-logo { font-weight: 700; font-size: 14px; color: #8B4513; }
  .nl-preview-links { display: flex; gap: 16px; font-size: 12px; color: rgba(27,42,74,0.55); }
  .nl-preview-hero { border-radius: 12px; padding: 40px 28px; color: white; margin-bottom: 24px; }
  .nl-preview-hero h3 { font-family: 'DM Serif Display', serif; font-size: 22px; margin-bottom: 8px; transition: all 0.5s ease; }
  .nl-preview-hero p { font-size: 12px; opacity: 0.85; line-height: 1.5; transition: all 0.5s ease; }
  .nl-preview-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
  .nl-preview-card { background: #F8F9FB; border-radius: 8px; padding: 16px; }
  .nl-card-color { width: 100%; height: 48px; border-radius: 6px; margin-bottom: 10px; }
  .nl-preview-card h4 { font-size: 11px; font-weight: 700; margin-bottom: 4px; }
  .nl-preview-card p { font-size: 10px; color: rgba(27,42,74,0.55); line-height: 1.4; }
  .nl-cms-features-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 64px; }
  .nl-cms-feature { text-align: center; padding: 24px; }
  .nl-cms-feature-icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(59,130,246,0.1); display: flex; align-items: center; justify-content: center; font-size: 22px; margin: 0 auto 16px; }
  .nl-cms-feature h4 { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 8px; }
  .nl-cms-feature p { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.5; }

  /* PRICING */
  .nl-pricing { background: #F8F9FB; text-align: center; }
  .nl-pricing .nl-section-tag, .nl-pricing .nl-section-title, .nl-pricing .nl-section-subtitle { margin-left: auto; margin-right: auto; }
  .nl-pricing-card { max-width: 560px; margin: 0 auto; background: #fff; border-radius: 20px; padding: 56px 48px; border: 1px solid rgba(27,42,74,0.06); box-shadow: 0 20px 60px rgba(27,42,74,0.08); position: relative; overflow: hidden; text-align: left; }
  .nl-pricing-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #3B82F6; }
  .nl-pricing-label { font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #3B82F6; margin-bottom: 20px; text-align: center; }
  .nl-pricing-amount { display: flex; align-items: baseline; justify-content: center; gap: 4px; margin-bottom: 8px; }
  .nl-pricing-currency { font-size: 28px; font-weight: 300; color: rgba(27,42,74,0.55); }
  .nl-pricing-value { font-family: 'DM Serif Display', serif; font-size: 72px; color: #1B2A4A; line-height: 1; }
  .nl-pricing-desc { font-size: 15px; color: rgba(27,42,74,0.55); margin-bottom: 36px; text-align: center; }
  .nl-pricing-features { margin-bottom: 40px; }
  .nl-pricing-feature { display: flex; align-items: flex-start; gap: 14px; padding: 14px 0; border-bottom: 1px solid rgba(27,42,74,0.05); font-size: 15px; line-height: 1.5; }
  .nl-pricing-feature:last-child { border-bottom: none; }
  .nl-pricing-check { width: 22px; height: 22px; border-radius: 50%; background: rgba(59,130,246,0.1); color: #3B82F6; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; margin-top: 1px; }
  .nl-pricing-cta { display: block; width: 100%; background: #3B82F6; color: #fff; border: none; padding: 18px 32px; border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 600; text-decoration: none; text-align: center; cursor: pointer; transition: all 0.3s; }
  .nl-pricing-cta:hover { background: #2563EB; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(59,130,246,0.35); }
  .nl-pricing-note { font-size: 13px; color: rgba(27,42,74,0.55); margin-top: 16px; text-align: center; }

  /* FAQ */
  .nl-faq { background: #fff; }
  .nl-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 16px; }
  .nl-faq-item { padding: 32px; border-radius: 12px; border: 1px solid rgba(27,42,74,0.06); transition: all 0.3s; }
  .nl-faq-item:hover { border-color: rgba(59,130,246,0.2); }
  .nl-faq-item h3 { font-size: 16px; font-weight: 700; margin-bottom: 10px; }
  .nl-faq-item p { font-size: 14px; color: rgba(27,42,74,0.55); line-height: 1.6; }

  /* CTA FINAL */
  .nl-cta-final { background: #3B82F6; text-align: center; padding: 100px 48px; }
  .nl-cta-final h2 { font-family: 'DM Serif Display', serif; font-size: clamp(32px,3.5vw,52px); font-weight: 400; color: #fff; line-height: 1.15; max-width: 600px; margin: 0 auto 20px; }
  .nl-cta-final p { font-size: 18px; color: rgba(255,255,255,0.8); margin-bottom: 36px; }
  .nl-btn-white { display: inline-flex; align-items: center; gap: 8px; background: #fff; color: #3B82F6; font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; padding: 18px 40px; border-radius: 10px; text-decoration: none; transition: all 0.3s; }
  .nl-btn-white:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.15); }

  /* FOOTER */
  .nl-footer { background: #111B30; color: rgba(255,255,255,0.4); padding: 48px; text-align: center; font-size: 13px; }

  /* ANIMATIONS */
  @keyframes nlFadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  .nl-reveal { opacity: 0; transform: translateY(32px); transition: all 0.7s cubic-bezier(0.23,1,0.32,1); }
  .nl-visible { opacity: 1; transform: translateY(0); }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    .nl-features-grid, .nl-examples-grid { grid-template-columns: repeat(2,1fr); }
    .nl-cms-container { grid-template-columns: 1fr; }
    .nl-sectors-intro { grid-template-columns: 1fr; gap: 40px; }
    .nl-cms-features-row { grid-template-columns: repeat(2,1fr); }
  }
  @media (max-width: 768px) {
    .nl-section { padding: 80px 24px; }
    .nl-nav { padding: 16px 24px; }
    .nl-nav-scrolled { padding: 12px 24px; }
    .nl-nav-links { display: none; }
    .nl-hero-content { padding: 120px 24px 80px; }
    .nl-hero-metrics { flex-direction: column; gap: 28px; }
    .nl-hero-actions { flex-direction: column; }
    .nl-hero-actions a { width: 100%; text-align: center; justify-content: center; }
    .nl-pain-grid, .nl-features-grid, .nl-examples-grid, .nl-faq-grid { grid-template-columns: 1fr; }
    .nl-table { font-size: 13px; }
    .nl-table thead th, .nl-table tbody td { padding: 12px 14px; }
    .nl-pricing-card { padding: 40px 28px; }
    .nl-preview-cards { grid-template-columns: 1fr; }
    .nl-cms-features-row { grid-template-columns: 1fr; }
    .nl-cta-final { padding: 72px 24px; }
    .nl-demo-badge { font-size: 10px; padding: 6px 14px; }
  }
`;e.s(["default",()=>r])}]);