import styles from '../styles/Nav.module.css'
import { useState } from 'react'
import Link from 'next/link'

function MyDropdown() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <span onClick={() => setOpen(!open)} className={styles.initialDrop}>
        Gallery
      </span>
      {open && (
        <div className={styles.prueba}>
          <ul className={styles.containerDrop}>
            <li>
              <Link href="/">
                <a>Xv</a>
              </Link>
            </li>
            <li>Bodas</li>
            <li>Lenceria</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MyDropdown