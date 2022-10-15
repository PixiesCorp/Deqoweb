import styles from "../styles/Contact.module.css"
import NavBar from "../components/NavBar";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillPhone } from 'react-icons/ai'




const Result = () => {
  return(
    <p>Tu mensaje fue enviado con exito! Te contactare pronto</p>
  )
}

export default function Contact () {

  const form = useRef();
  const [result, showResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_au9s2si", form.current, "g8PvHiId3S7IGbpnR")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.title}>Contactanos</h1>
        <div className={styles.containredes}>
          <a href="https://www.facebook.com/deqoimagen">
            <AiFillFacebook size="2em"/>
          </a>
          <a href="https://www.instagram.com/deqoimagen">
            <AiFillInstagram size="2em"/>
          </a>
          <a href="https://www.youtube.com/channel/UCTRqlA-OJirz3jRB2oVspfg">
            <AiFillYoutube size="2em"/>
          </a>
        </div>
        <div className={styles.containphone}>
          <p>+52 656-360-5991</p>
          <div>
            <AiFillPhone />
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <label>Name</label>
          <input type="text" name="fullName" className={styles.input}/>
          <br />
          <label>Email</label>
          <input type="email" name="email" className={styles.input}/>
          <br />
          <label>Message</label>
          <textarea name="message" className={styles.input}/>
          <br />
          <br />
          <button className={styles.submit}>ENVIAR</button>


        </form>
        <div className={styles.row}>
          {result ? <Result /> : null}
        </div>
      </div>
    </>
  )
}