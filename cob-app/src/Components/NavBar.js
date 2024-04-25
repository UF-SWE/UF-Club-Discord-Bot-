import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css';
import LoginPage from './LoginPage';
export default function Navbar({user}) {
  return (
    <nav className="navbar">
      <Link to="/" className="site-title">
      <img src="./Images/COBmascot.png" alt="COB Logo" className="logo-image" width = "50" height = "50"/> 
      C.O.B.
      </Link>

      <ul>
        {user.email !== '' && (
          <CustomLink to="/profile">
           <button >Welcome, {user.email}</button>
          </CustomLink>
        )}
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/signup">Sign Up</CustomLink>
        <CustomLink to="/clublist">Clubs </CustomLink>
        <CustomLink to="/about">About </CustomLink>
        
       
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}