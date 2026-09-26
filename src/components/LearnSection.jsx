import {
  AlertTriangle,
  LockKeyhole,
  UserRoundX,
  MessageCircleWarning,
  ShieldCheck,
  EyeOff,
} from 'lucide-react';

const guides = [
  {
    icon: AlertTriangle,
    title: 'Scams & Phishing',
    color: 'warning',
    steps: [
      'Do not click suspicious links or open unexpected attachments.',
      'Never share passwords, verification codes, or banking information.',
      'Verify unexpected requests using an official website or trusted contact.',
      'If you already sent money, contact your bank or payment provider quickly.',
    ],
  },
  {
    icon: LockKeyhole,
    title: 'Blackmail & Private Images',
    color: 'danger',
    steps: [
      'Do not pay or send more images. Paying does not guarantee the threats will stop.',
      'Save evidence such as messages, usernames, dates, and profile links.',
      'Block and report the person after preserving important evidence.',
      'Tell someone you trust and contact appropriate authorities if you are threatened.',
    ],
  },
  {
    icon: UserRoundX,
    title: 'Fake Accounts',
    color: 'info',
    steps: [
      'Check whether the profile has a realistic history and genuine interactions.',
      'Be careful if someone quickly asks for money, private information, or intimate images.',
      'Verify the person through another trusted communication channel.',
      'Report accounts impersonating you or someone you know.',
    ],
  },
  {
    icon: MessageCircleWarning,
    title: 'Online Harassment',
    color: 'purple',
    steps: [
      'Do not engage with threats or abusive messages.',
      'Save important evidence before blocking the account.',
      'Use the platform’s block and report tools.',
      'Tell a trusted person if the harassment becomes threatening or persistent.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Account Security',
    color: 'success',
    steps: [
      'Use a different strong password for every important account.',
      'Turn on two-factor authentication whenever it is available.',
      'Never share verification codes with anyone.',
      'Review active sessions and remove devices you do not recognize.',
    ],
  },
  {
    icon: EyeOff,
    title: 'Privacy Protection',
    color: 'teal',
    steps: [
      'Avoid publicly sharing your home address, phone number, or financial information.',
      'Review who can see your posts, stories, friends, and profile information.',
      'Remove unnecessary personal information from public profiles.',
      'Think carefully before posting photos that reveal locations or private details.',
    ],
  },
];

function LearnSection() {
  return (
    <section id="learn-more" className="section learn-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Practical guides</span>
          <h2 className="section-title">Learn What To Do</h2>
          <p className="section-subtitle">
            Simple steps you can follow when something feels unsafe online.
          </p>
        </div>

        <div className="guide-list">
          {guides.map((guide) => {
            const Icon = guide.icon;

            return (
              <article className={`guide-card guide-card--${guide.color}`} key={guide.title}>
                <div className="guide-card__header">
                  <div className="guide-card__icon">
                    <Icon size={28} />
                  </div>

                  <h3>{guide.title}</h3>
                </div>

                <ol className="guide-card__steps">
                  {guide.steps.map((step, index) => (
                    <li key={index}>
                      <span>{index + 1}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LearnSection;