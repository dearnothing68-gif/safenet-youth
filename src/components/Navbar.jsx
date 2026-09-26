import { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Learn', href: '#learn-more' },
  { label: 'Check Safety', href: '#check-safety' },
  { label: 'Get Help', href: '#get-help' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <Shield size={26} strokeWidth={2.2} />
          <span>SafeNet Youth</span>
        </a>

        <nav
          className={
            isOpen
              ? 'navbar__links navbar__links--open'
              : 'navbar__links'
          }
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;