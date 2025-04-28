import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Start Bootstrap</Link>
        <ul className="navbar-nav">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <Link to={link.path} className="nav-link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
