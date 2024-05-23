import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
         Hecho En NEXT.JS
        </p>
        <div>
          <p>Autor Joseph López</p>
        </div>
      </div>
      <div className={styles.center}>
      <Image
              src="/foto-joseph.png"
              alt="Imagen Joseph"
              width={160}
              height={200}
              priority
            />
        <h1>Joseph lópez Henao</h1>
        <h2>Tecnico En Programcion De Software</h2>
        <div className={styles.informationcontact}>
          <div className={styles.columns}>
          <div className={styles.center}>
          <p>Telefono:</p>
          <p>3112625555</p>
          </div>
          </div>
          <div className={styles.columns}>
          <div className={styles.center}>
          <p>Correo:</p>
          <p>joseph.lopez2@soy.sena.edu.co</p>
          </div>
        </div>
        </div>
        <div className={styles.container}>
          <div className={styles.columns}>
          <div className={styles.containerDatos}>
            <h2>Datos Personales</h2>
            <p>Fecha De Nacimiento: 06/06/2005</p>
            <p>Edad: 06/06/2005</p>
            <p>Direccion: Bogota, Distrito Capital</p>
          </div>
          <div className={styles.containerDatos}>
            <h2>Formacion Academica</h2>
            <p>2021 - 2022: Tecnico En Programacion De Software</p>
            <p>2023 - act: Tecnologo En Analisis Y Desarrollo De Software</p>
          </div>
          <div className={styles.containerDatos}>
            <h2>Cursos</h2>
            <p>Samsung - Universidad Del Rosario: Curso Virtual De Python De 90 Horas</p>
            <p>Platzi: Curso Virtual De Git y GitHub De 60 Horas</p>
          </div>
          <div className={styles.containerDatos}>
            <h2>Habilidades - Skills</h2>
            <p>Html: 90%</p>
            <p>Css: 90%</p>
            <p>JavaScript: 95%</p>
            <p>Python: 50%</p>
            <p>MySql: 80%</p>
            <p>MySql: 90%</p>
            <p>GitHub y Git: 95%</p>
            <p>Node Js (Back-End): 80%</p>
            <p>Next Js - React (Full Stack): 80%</p>
          </div>
          </div>
          <div className={styles.columns}></div>
          <div className={styles.containerDatos}>
          <h2>Perfil - Sobre Mi</h2>
          <p>Desarrollador web con sólidos conocimientos en HTML, CSS, JavaScript y<br></br> 
            Python, complementados con frameworks modernos como Next.js, Tailwind 
            CSS<br></br> y bases de datos SQL y NoSQL. Experiencia práctica en control de 
            versiones (Git, GitHub)<br></br>  y metodologías ágiles. En constante aprendizaje y 
            actualización en las últimas tendencias <br></br> tecnológicas del desarrollo web. Con
            motivación para aplicar habilidades en proyectos <br></br> retadores que permitan 
            seguir creciendo como programador.
        </p>
        <div className={styles.containerDatos}>
          <h2>Experencia Laboral</h2>
          <p>GRUPO DE INVESTIGACION DESARROLLO TECNOLOGICO E INNOVACION SENNOVA:</p>
          <p>Desarrollador Front-end: Monitorias Renumeradas Para El Desarrollo Para Proyecto <br></br>
          Machine Learning En Ambito Web</p>
        </div>
        <div className={styles.containerDatos}>
          <h2>Objetivo</h2>
          <p>Joven técnico en programación buscando oportunidad para realizar prácticas profesionales <br></br> 
          y así consolidar mis conocimientos técnicos en desarrollo de software. Deseo aplicar lo aprendido <br></br> 
          en un entorno laboral real, colaborando en equipos ágiles en todo el ciclo de desarrollo. Aspiro crecer<br></br> 
          como programador resolviendo desafíos e interactuando con mentores que nutran mi experiencia. <br></br>
          Me interesa una empresa dinámica que potencie mis habilidades en beneficio de entregar soluciones digitales <br></br>
          de alto valor para el usuario final </p>
        </div>
        </div>
        </div>
      </div>
      <div className={styles.grid}>
       
      </div>
    </main>
  );
}
