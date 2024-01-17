import Menu from '../menu'
import { withAuth } from '../with-auth'

/**
 *
 * @param {Number} param.number
 * @param {Function} param.handleSetNumber
 * @returns
 */

function Header({ number, handleSetNumber }) {
  return (
    <div>
      <div>
        <button onClick={handleSetNumber}>Button Number</button>
        <p>Component Header {number}</p>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  )
}

export default withAuth(Header)