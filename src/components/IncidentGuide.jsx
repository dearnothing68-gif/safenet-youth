import { useState } from 'react';
import {
  AlertTriangle,
  LockKeyhole,
  MessageCircleWarning,
  UserRoundX,
  ShieldAlert,
  HelpCircle,
  ArrowLeft,
} from 'lucide-react';

const incidents = [
  {
    icon: AlertTriangle,
    title: 'I was scammed',
    description: 'Someone tricked me into sending money or personal information.',
    steps: [
      'Stop communicating with the scammer and do not send anything else.',
      'Contact your bank or payment provider as soon as possible if money was sent.',
      'Change passwords if you shared login information.',
      'Save messages, payment records, usernames, and other evidence.',
      'Report the account or website through the platform involved.',
    ],
  },
  {
    icon: LockKeyhole,
    title: 'Someone is blackmailing me',
    description: 'Someone is threatening me using private information or images.',
    steps: [
      'Do not pay and do not send additional private images or information.',
      'Save important messages, usernames, profile links, and threats.',
      'Block and report the person after preserving the evidence.',
      'Tell someone you trust. You do not have to handle this alone.',
      'If there are serious threats or immediate danger, contact appropriate authorities.',
    ],
  },
  {
    icon: MessageCircleWarning,
    title: 'I am being harassed or threatened',
    description: 'Someone is repeatedly sending abusive or threatening messages.',
    steps: [
      'Do not escalate the conversation or threaten the person back.',
      'Save evidence of serious threats or repeated harassment.',
      'Block the account after preserving important evidence.',
      'Report the behavior using the platform’s reporting tools.',
      'Tell someone you trust if the situation is serious or frightening.',
    ],
  },
  {
    icon: UserRoundX,
    title: 'Someone made a fake account',
    description: 'Someone is impersonating me or another person.',
    steps: [
      'Take screenshots of the fake profile and save its username or profile link.',
      'Report the account for impersonation through the platform.',
      'Tell friends or contacts if the fake account is contacting them.',
      'Secure your real account with a strong password and two-factor authentication.',
      'Continue monitoring your account for unusual activity.',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'My account was hacked',
    description: 'I think someone has accessed my account without permission.',
    steps: [
      'Change your password immediately from a trusted device.',
      'Sign out of unfamiliar sessions or devices.',
      'Turn on two-factor authentication.',
      'Check recovery email addresses and phone numbers for changes.',
      'If you cannot access the account, use the platform’s official account-recovery process.',
    ],
  },
  {
    icon: HelpCircle,
    title: 'I am not sure what happened',
    description: 'Something online feels unsafe, but I do not know exactly what it is.',
    steps: [
      'Do not send money, passwords, verification codes, or private information.',
      'Stop and take screenshots of anything suspicious.',
      'Do not click additional links or download unexpected files.',
      'Talk to someone you trust about what happened.',
      'Use the SafeNet Youth guides to identify the closest matching situation.',
    ],
  },
];

function IncidentGuide() {
  const [selectedIncident, setSelectedIncident] = useState(null);

  const selected = incidents.find(
    (incident) => incident.title === selectedIncident
  );

  return (
    <section id="incident-guide" className="section incident-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">What happened?</span>
          <h2 className="section-title">Find the Right Next Step</h2>
          <p className="section-subtitle">
            Choose the situation that is closest to what you are experiencing.
          </p>
        </div>

        {!selected ? (
          <div className="incident-grid">
            {incidents.map((incident) => {
              const Icon = incident.icon;

              return (
                <button
                  className="incident-card"
                  key={incident.title}
                  onClick={() => setSelectedIncident(incident.title)}
                >
                  <div className="incident-card__icon">
                    <Icon size={28} />
                  </div>

                  <h3>{incident.title}</h3>
                  <p>{incident.description}</p>
                  <span>See what to do →</span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="incident-result">
            <button
              className="incident-back"
              onClick={() => setSelectedIncident(null)}
            >
              <ArrowLeft size={18} />
              Back to situations
            </button>

            <div className="incident-result__header">
              <div className="incident-card__icon">
                {(() => {
                  const Icon = selected.icon;
                  return <Icon size={30} />;
                })()}
              </div>

              <div>
                <span className="eyebrow">Recommended steps</span>
                <h3>{selected.title}</h3>
              </div>
            </div>

            <p className="incident-result__description">
              {selected.description}
            </p>

            <ol className="incident-steps">
              {selected.steps.map((step, index) => (
                <li key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>

            <div className="incident-warning">
              <AlertTriangle size={20} />
              <p>
                If you are in immediate danger, contact your local emergency
                services. SafeNet Youth provides educational information and
                cannot provide emergency intervention.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default IncidentGuide;