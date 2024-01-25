// import Menu from '../menu'
import Link from 'next/link'
// import { withAuth } from '../with-auth'
import styles from './header.module.css'

/**
 *
 * @param {Number} param.number
 * @param {Function} param.handleSetNumber
 * @returns
 */

export default function Header({ number, handleSetNumber }) {
  return (
    <div className={styles.header}>
      <ul className='flex gap-2'>
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
    </div>
  )
}
// export default withAuth(Header) <-- Jika ingin menggunakan logic !isLogin comment -->
