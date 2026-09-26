import { ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="badge">
            <ShieldCheck size={16} />
            Free educational guidance
          </span>

          <h1 className="hero__title">Stay Safe Online</h1>

          <p className="hero__text">
            SafeNet Youth helps young people recognize and respond to online
            scams, harassment, blackmail, fake accounts, and other cyber
            threats — with clear, practical guidance you can trust.
          </p>

          <div className="hero__actions">
            <a href="#check-safety" className="btn btn-primary">
              Check Your Safety <ArrowRight size={18} />
            </a>

            <a href="#learn" className="btn btn-secondary">
              <BookOpen size={18} /> Learn the Basics
            </a>
          </div>

          <p className="hero__disclaimer">
            This site provides educational information only. In an emergency,
            always contact your local emergency services.
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__visual-circle">
            <ShieldCheck size={96} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;