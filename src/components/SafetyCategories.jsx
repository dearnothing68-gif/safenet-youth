import {
  AlertTriangle,
  LockKeyhole,
  UserRoundX,
  MessageCircleWarning,
  ShieldCheck,
  EyeOff,
} from 'lucide-react';

const categories = [
  {
    icon: AlertTriangle,
    title: 'Scams & Phishing',
    details: 'Learn how to recognize fake messages, suspicious links, fake jobs, and payment scams before you lose money or personal information.',
    text: 'Learn how to spot fake messages, suspicious links, fake jobs, and payment scams.',
  },
  {
    icon: LockKeyhole,
    title: 'Blackmail & Private Images',
    text: 'Learn what to do when someone threatens you or demands something using private information or images.',
  },
  {
    icon: UserRoundX,
    title: 'Fake Accounts',
    text: 'Learn how to identify impersonation, fake profiles, and suspicious online identities.',
  },
  {
    icon: MessageCircleWarning,
    title: 'Online Harassment',
    text: 'Learn how to respond to harassment, threats, bullying, and abusive messages.',
  },
  {
    icon: ShieldCheck,
    title: 'Account Security',
    text: 'Learn how to create stronger passwords, use two-factor authentication, and secure your accounts.',
  },
  {
    icon: EyeOff,
    title: 'Privacy Protection',
    text: 'Learn how to reduce the amount of personal information you expose online.',
  },
];

function SafetyCategories() {
  return (
    <section id="learn" className="section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Know the risks</span>
          <h2 className="section-title">Protect Yourself Online</h2>
          <p className="section-subtitle">
            Learn the most important online-safety basics and what to do when
            something doesn't feel right.
          </p>
        </div>

        <div className="safety-grid">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article className="safety-card" key={category.title}>
                <div className="safety-card__icon">
                  <Icon size={28} />
                </div>

                <h3>{category.title}</h3>

                <p>{category.text}</p>

                <a href="#learn-more" className="safety-card__link">
                  Learn more →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SafetyCategories;