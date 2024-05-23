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
        <h1>Joseph lópez Henao</h1>
        <h2>Tecnico En Programcion De Software</h2>
        <div className={styles.informationcontact}>
          <div className={styles.center}>
          <p>Telefono:</p>
          <p>3112625555</p>
          </div>
        <Image
              src="/vercel.svg"
              alt="Imagen Joseph"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          <div className={styles.center}>
          <p>Correo:</p>
          <p>joseph.lopez2@soy.sena.edu.co</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.left}></div>
          <div className={styles.datosPersonales}>
            
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
      <div className={styles.grid}>
       
      </div>
    </main>
  );
}
