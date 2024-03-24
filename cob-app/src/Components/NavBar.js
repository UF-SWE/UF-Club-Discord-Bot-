import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="site-title">
        Community Outreach Bot
      </Link>

      <ul>
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