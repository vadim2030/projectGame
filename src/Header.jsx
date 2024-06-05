import logo from '../public/vite.svg';
import Time from './Time.jsx';
import { NavLink } from 'react-router-dom';
import "./scss/style.scss";

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt={'Result'} />
      <div>
        <NavLink className='btn btn-white btn-animate' to='registr'>
          Sign Up
        </NavLink>
        <NavLink className='btn btn-white btn-animate' to='login'>
          Log In
        </NavLink>
      </div>
      <Time />
    </header >

  )

}

export default Header;