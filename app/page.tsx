import Image from "next/image";

const whatsapp = "https://wa.me/5491133315497?text=Hola";
const instagram = "https://www.instagram.com/dpr.argentina/";
const instagramDiego = "https://www.instagram.com/diegopierluigi/";

const maps =
  "https://www.google.com/maps/place/DPR+ARGENTINA/data=!4m2!3m1!1s0x0:0xddd04680a1502eb5";

const mapsEmbed =
  "https://www.google.com/maps?q=DPR+ARGENTINA,+Autodromo+de+Arrecifes,+Buenos+Aires&output=embed";

const servicios = [
  {
    titulo: "Cursos iniciales",
    descripcion: "Viví la experiencia de ser piloto, sin importar tu nivel.",
  },
  {
    titulo: "Entrenamientos",
    descripcion:
      "Entrená con alquiler de moto o recibí asistencia si ya tenés una moto para circuito.",
  },
  {
    titulo: "Entrenamiento nivel II",
    descripcion: "Continuá desarrollando tus habilidades en pista.",
  },
  {
    titulo: "Trabajo personalizado",
    descripcion: "Preparación individual para pilotos en actividad.",
  },
];

const preguntas = [
  {
    pregunta: "¿A quién está dirigido el curso inicial?",
    respuesta:
      "A todas las personas que quieran vivir la experiencia de ser piloto, sea cual sea su objetivo, nivel o edad.",
  },
  {
    pregunta: "¿Cuáles son los requisitos?",
    respuesta: "Contar con casco y saber manejar una moto con cambios.",
  },
  {
    pregunta: "¿Qué incluyen los cursos y entrenamientos en Arrecifes?",
    respuesta:
      "Mono de cuero con protecciones, catering y refrigerios, área de descanso, área de almuerzo y wifi. Además, asistencia mecánica en boxes, ambulancia, enfermería y fotografías digitales de la jornada.",
  },
  {
    pregunta: "¿Qué hay durante una jornada de cursos y entrenamientos?",
    respuesta:
      "Moto Twitter 250, mono con protecciones, mesa para cascos, catering, área de descanso, pantallas para ver la pista y la carrera, y wifi.",
  },
  {
    pregunta: "¿Dónde se realiza?",
    respuesta: "En el Autódromo de Arrecifes, provincia de Buenos Aires.",
  },
];

function BotonWhatsApp() {
  return (
    <a
      className="boton"
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="21"
        height="21"
        fill="currentColor"
      >
        <path d="M12.04 2a9.93 9.93 0 0 0-8.6 14.89L2 22l5.24-1.38A9.96 9.96 0 1 0 12.04 2Zm0 18.15a8.15 8.15 0 0 1-4.15-1.13l-.3-.18-3.1.82.83-3.02-.2-.31a8.16 8.16 0 1 1 6.92 3.82Zm4.48-6.1c-.25-.12-1.47-.72-1.7-.81-.22-.08-.39-.12-.55.13-.17.25-.64.8-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.38-2-1.22a7.48 7.48 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.47-.4-.4-.55-.41h-.47c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.06s.89 2.37 1.01 2.53c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.19.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.29Z" />
      </svg>
      Consultar por WhatsApp
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="cabecera">
        <div className="contenedor navegacion">
          <a href="#inicio" aria-label="DPR Argentina - Inicio">
            <Image
              className="logo"
              src="/logo.png"
              alt="Logo de DPR Argentina"
              width={400}
              height={120}
              priority
            />
          </a>

          <nav aria-label="Navegación principal">
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#preguntas">Preguntas frecuentes</a>
            <a href="#contacto">Contacto</a>

            <a
              className="instagram-icono"
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de DPR Argentina"
            >
              <svg
                aria-hidden="true"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.5"
                  fill="currentColor"
                />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      <section className="portada" id="inicio">
        <div className="contenedor">
          <p className="etiqueta">Escuela de pilotos · Arrecifes</p>
          <h1>Viví la experiencia de ser piloto</h1>
          <p className="introduccion">
            Formación y preparación de pilotos de velocidad, para quienes
            quieren comenzar y para quienes ya están en actividad.
          </p>
          <BotonWhatsApp />
          <p className="fundador">
            Fundada por{" "}
            <a
              href={instagramDiego}
              target="_blank"
              rel="noopener noreferrer"
            >
              Diego Pierluigi #84
            </a>
            , múltiple campeón argentino.
          </p>
        </div>
      </section>

      <section className="seccion" id="nosotros">
        <div className="contenedor dos-columnas">
          <div>
            <p className="etiqueta">Nuestra escuela</p>
            <h2>Nosotros</h2>

            <p>
              DPR nació con el espíritu de difundir el motociclismo de
              velocidad. Formamos pilotos desde sus primeros pasos y
              acompañamos a quienes desean seguir creciendo dentro y fuera
              del circuito.
            </p>

            <ul className="lista">
              <li>
                Preparamos desde la base a nuevos pilotos que quieran entrar
                en el mundo de la competición.
              </li>
              <li>Recibimos a hombres y mujeres de todas las edades.</li>
              <li>
                Ofrecemos clases orientadas al motociclismo de velocidad
                recreativo y a los track days.
              </li>
              <li>
                Preparamos pilotos en actividad para CAMOD, FEBOM y
                competencias internacionales.
              </li>
              <li>
                Formamos alumnos para el uso de la moto dentro y fuera del
                circuito.
              </li>
              <li>
                Damos clases especiales para el uso urbano de la moto como
                medio de transporte diario.
              </li>
              <li>
                Ofrecemos clases in company y out company para agencias de
                seguridad, servicios médicos y servicios de mensajería.
              </li>
            </ul>

            <p>
              <strong>¡Sumate a la escuela y a un mundo apasionante!</strong>
            </p>
          </div>

          <Image
            className="imagen-seccion"
            src="/dpr.jpeg"
            alt="DPR Argentina"
            width={900}
            height={700}
          />
        </div>
      </section>

      <section className="seccion" id="servicios">
        <div className="contenedor">
          <p className="etiqueta">Para cada etapa</p>
          <h2>¿Qué ofrecemos?</h2>

          <div className="servicios">
            {servicios.map((servicio) => (
              <article className="tarjeta" key={servicio.titulo}>
                <h3>{servicio.titulo}</h3>
                <p>{servicio.descripcion}</p>
              </article>
            ))}
          </div>

          <Image
            className="imagen-panoramica"
            src="/motos.jpeg"
            alt="Motos de DPR Argentina"
            width={1400}
            height={600}
          />
        </div>
      </section>

      <section className="seccion" id="preguntas">
        <div className="contenedor dos-columnas">
          <div>
            <p className="etiqueta">Todo lo que necesitás saber</p>
            <h2>Preguntas frecuentes</h2>

            <div className="preguntas">
              {preguntas.map((item) => (
                <details key={item.pregunta}>
                  <summary>{item.pregunta}</summary>
                  <p>{item.respuesta}</p>
                </details>
              ))}
            </div>

            <p className="consulta">
              Consultanos por costos actualizados y cualquier otra duda.
            </p>
            <BotonWhatsApp />
          </div>

          <div className="imagenes-preguntas">
            <Image
              className="imagen-seccion"
              src="/monos.jpeg"
              alt="Equipamiento de DPR Argentina"
              width={900}
              height={600}
            />
            <Image
              className="imagen-seccion"
              src="/descansomotos.jpeg"
              alt="Espacio de DPR Argentina"
              width={900}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="seccion" id="contacto">
        <div className="contenedor">
          <Image
            className="imagen-panoramica imagen-contacto"
            src="/pilotos.jpeg"
            alt="Pilotos de DPR Argentina"
            width={1400}
            height={600}
          />

          <p className="etiqueta">Encontranos</p>
          <h2>Contacto y ubicación</h2>
          <p>Autódromo de Arrecifes, provincia de Buenos Aires.</p>
          <p>
            Teléfono: <a href="tel:+541133315497">011 3331-5497</a>
          </p>

          <div className="mapa">
            <iframe
              src={mapsEmbed}
              title="Ubicación de DPR Argentina"
              loading="lazy"
              tabIndex={-1}
              aria-hidden="true"
            />
            <a
              className="mapa-enlace"
              href={maps}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir la ubicación de DPR Argentina en Google Maps"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="contenedor">
          DPR Argentina · Escuela de pilotos
        </div>
      </footer>
    </main>
  );
}