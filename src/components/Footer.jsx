import { Shield, AlertTriangle } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__disclaimer-wrap">
        <div className="footer__disclaimer">
          <AlertTriangle size={20} />
          <p>
            SafeNet Youth provides general educational information and is not
            a substitute for professional legal advice, law enforcement, or
            emergency services. If you or someone else is in immediate
            danger, contact your local emergency number right away.
          </p>
        </div>
      </div>

      <div className="container footer__main">
        <div className="footer__brand">
          <Shield size={22} />
          <span>SafeNet Youth</span>
        </div>

        <nav className="footer__links">
          <a href="#home">Home</a>
          <a href="#learn-more">Learn</a>
          <a href="#check-safety">Check Safety</a>
          <a href="#get-help">Get Help</a>
        </nav>
      </div>

      <div className="container">
        <p className="footer__copyright">
          © {new Date().getFullYear()} SafeNet Youth. Built to help young
          people stay safer online.
        </p>
      </div>
    </footer>
  );
}

export default Footer;