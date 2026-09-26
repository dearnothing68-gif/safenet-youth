import {
  PhoneCall,
  FileText,
  Ban,
  Flag,
  Users,
  ShieldAlert,
} from 'lucide-react';

const helpSteps = [
  {
    icon: ShieldAlert,
    title: 'If you are in immediate danger',
    text: 'Move to a safer place and contact your local emergency services or a trusted person who can help you.',
  },
  {
    icon: FileText,
    title: 'Save important evidence',
    text: 'Keep screenshots, messages, usernames, profile links, transaction records, and dates. Do not alter or delete important evidence before saving it.',
  },
  {
    icon: Ban,
    title: 'Block the person',
    text: 'After preserving important evidence, use the platform’s blocking tools to stop unwanted contact.',
  },
  {
    icon: Flag,
    title: 'Report the account',
    text: 'Use the platform’s report function for scams, threats, impersonation, harassment, or other rule violations.',
  },
  {
    icon: Users,
    title: 'Tell someone you trust',
    text: 'You do not have to deal with a serious online situation alone. Consider telling a parent, teacher, counselor, friend, or another trusted person.',
  },
  {
    icon: PhoneCall,
    title: 'After losing money',
    text: 'Contact your bank, card provider, or payment service as soon as possible and ask what recovery or fraud-reporting options are available.',
  },
];

function GetHelp() {
  return (
    <section id="get-help" className="section help-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Need support?</span>
          <h2 className="section-title">Get Help</h2>
          <p className="section-subtitle">
            If something has gone wrong online, these steps can help you decide
            what to do next.
          </p>
        </div>

        <div className="help-grid">
          {helpSteps.map((item) => {
            const Icon = item.icon;

            return (
              <article className="help-card" key={item.title}>
                <div className="help-card__icon">
                  <Icon size={26} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="help-note">
          <ShieldAlert size={22} />
          <p>
            SafeNet Youth is an educational resource. It does not replace
            emergency services, law enforcement, legal professionals, or
            qualified counselors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GetHelp;