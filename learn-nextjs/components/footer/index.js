import { useState } from 'react'
import styles from './footer.module.css'

export default function Footer() {
  const [number, setNumber] = useState(0)
  return (
    <div className={styles.footer}>
      <button
        className='w-full text-3xl font-bold underline'
        onClick={() => setNumber((prevState) => prevState + 1)}
      >
        Button Number
      </button>
      <div className='w-full text-center'>
        <p>Component Footer {number} </p>
      </div>
    </div>
  )
}
