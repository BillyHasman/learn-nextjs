import { useState } from 'react'

export default function Footer() {
  const [number, setNumber] = useState(0)
  return (
    <div>
      <button onClick={() => setNumber((prevState) => prevState + 1)}>
        Button Number
      </button>
      <p>Component Footer {number} </p>
    </div>
  )
}
