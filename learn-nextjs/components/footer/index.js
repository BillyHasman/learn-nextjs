import { useState } from 'react'
import styles from './styles.module.css'

export default function Footer() {
  const [number, setNumber] = useState(0)
  return (
    <div className={styles.header}>
      <button
        className='text-3xl font-bold underline'
        onClick={() => setNumber((prevState) => prevState + 1)}
      >
        Button Number
      </button>
      <p>Component Footer {number} </p>
    </div>
  )
}
