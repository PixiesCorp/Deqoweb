import Link from "next/link";
import styles from "../styles/Nav.module.css";
import MyDropdown from "./DropDown";
import { motion, AnimatePresence} from "framer-motion";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    opened: {
      rotate: 45,
      y: -5.9
    },
    closed:{
      rotate: 0,
    }
  }

  const iconVariants2 = {
    opened: {
      opacity: 0
    },
    closed:{
      opacity: 1
    }
  }

  const iconVariants3 = {
    opened: {
      rotate: -45,
      y: 5.9
    },
    closed:{
      rotate: 0,
    }
  }



  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h2>Deqoimagen</h2>
        </div>
        <ul className={styles.navContain}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
        </ul>
        <div className={styles.contactlink}>
          <div className={styles.btnContact}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.ul className={styles.navContain2} 
                key="menu"
                initial={{x: -350}} 
                animate={{x: 0}}
                transition={{delay: 0.3}}
                exit={{x: -350}} >
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery">
                    <a>Gallery</a>
                  </Link>
                </li>
                <li className={styles.itemContact}>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </motion.ul>
            </>
          )}
        </AnimatePresence>
        <motion.svg
          initial={false}
          onClick={() => setIsOpen(!isOpen)}
          animate={isOpen ? "opened" : "closed"}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svgMenu}
        >
          <motion.path variants={iconVariants3} animate={isOpen ? "opened" : "closed"} initial={false}
            d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
            fill="currentColor"
          />
          <motion.path variants={iconVariants} animate={isOpen ? "opened" : "closed"} initial={false}
            d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
            fill="currentColor"
          />
          <motion.path variants={iconVariants2} animate={isOpen ? "opened" : "closed"} initial={false}
            d="M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H11Z"
            fill="currentColor"
          />
        </motion.svg>
      </nav>
    </>
  );
}
