import { usePortfolio } from '../context/PortfolioContext';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { data } = usePortfolio();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="navbar-modern">
      <div className="nav-container">
        <Link to="/" className="nav-brand">{data.name}</Link>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/skills" className="nav-link">Skills</Link></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
        <div className="theme-switcher">
          <button
            className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
          >
            Light
          </button>
          <button
            className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
          >
            Dark
          </button>
        </div>
      </div>
    </nav>
  );
}
