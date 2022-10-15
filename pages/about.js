import Image from "next/image";
import NavBar from "../components/NavBar";
import Omar from "../public/images/Omar__02.png"
import styles from "../styles/About.module.css"

export default function About () {
  return(
    <>
      <NavBar />
      <section className={styles.aboutContain}>
        <div className={styles.subtitle2}>
            <h2>Omar Deqoimagen</h2>
        </div>
        <div className={styles.contain}>
          <div className={styles.containerImage}>
              <Image src={Omar} alt=""/>
          </div>
          <div>
            <div className={styles.subtitle}>
              <h2>Fotógrafo en Cd.Juárez, Chih.</h2>
            </div>
            <div className="description">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, necessitatibus.</h2>
            </div>
          </div>
        </div>



      </section>
    </>
  )
}