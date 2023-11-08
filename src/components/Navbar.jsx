import logoDark from '../assets/logo-dark.svg'
import logoLight from '../assets/logo-light.svg'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import useGlobalContext from '../customHooks/useGlobalContext'
const Navbar = () => {
  const { darkMode, setDartMode } = useGlobalContext()
  return (
    <div className="nav">
      <div className="nav-center">
        <img
          className="logo"
          src={darkMode ? logoDark : logoLight}
          alt="img4YOU-logo"
        />
        <button
          className="darkmode-btn"
          onClick={() => setDartMode((darkMode) => !darkMode)}
        >
          {darkMode ? (
            <BsSunFill className="sun" />
          ) : (
            <BsMoonFill className="moon" />
          )}
        </button>
      </div>
    </div>
  )
}
export default Navbar
