// import Menu from '../menu'
import Link from 'next/link'
// import { withAuth } from '../with-auth'
import styles from './styles.module.css'

/**
 *
 * @param {Number} param.number
 * @param {Function} param.handleSetNumber
 * @returns
 */

export default function Header({ number, handleSetNumber }) {
  return (
    <div className={styles.header}>
      <ul className={'list-disc list-inside'}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/profile'>Profile</Link>
        </li>
        <li>
          <Link href='/users'>Users</Link>
        </li>
      </ul>

      {/* <div>
        <button onClick={handleSetNumber}>Button Number</button>
        <p>Component Header {number}</p>
      </div> */}
      {/* <div>
        <Menu />
      </div> */}
    </div>
  )
}

// export default withAuth(Header) <-- Jika ingin menggunakan logic !isLogin comment -->
