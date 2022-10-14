import Layout from '../components/Layout'
import NavBar from '../components/NavBar.jsx'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Layout />
      
      <div className={styles.container}>
        <NavBar />
        <div className={styles.containslider}>
          <div className={styles.containtitle}>
            <h1>Deqoimagen</h1>
            <h3>Capturando Historias</h3>
          </div>
          <Slider />
          
        </div>
      </div>    
    </>
  )
}
