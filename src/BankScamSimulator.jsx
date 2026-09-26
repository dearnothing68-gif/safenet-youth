import { useState } from 'react';
import {
  ShieldAlert,
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

const scenarios = [
  {
    type: 'Bank Scam',
    logo: 'SB',
    sender: 'SecureBank',
    subject: 'Security Alert',
    title: 'Unusual activity detected',
    message:
      'Your account has been temporarily restricted because unusual activity was detected.',
    secondMessage:
      'Verify your identity within 30 minutes to prevent your account from being suspended.',
    button: 'Verify Account',
    question: 'What should you do?',
    options: [
      'Tap the verification link immediately',
      'Reply to the message and ask if it is real',
      "Open my bank app separately and check for an alert",
      'Send the verification code requested in the message',
    ],
    correct: 2,
    explanation:
      "Never use a link from an unexpected banking message. Open your bank's official app or type the official website yourself and check for alerts there.",
    warnings: [
      'Urgent time limit',
      'Threat of account suspension',
      'Unexpected security request',
      'Link asking you to verify your identity',
    ],
  },

  {
    type: 'Fake Scholarship',
    logo: 'FS',
    sender: 'Global Scholarship Office',
    subject: 'Congratulations!',
    title: 'You have been selected',
    message:
      'Congratulations! You have been selected for a fully funded international scholarship.',
    secondMessage:
      'Pay a 5,000 PKR processing fee today to receive your official admission documents.',
    button: 'Pay Processing Fee',
    question: 'What should you do?',
    options: [
      'Pay immediately so I do not lose the scholarship',
      'Send my passport and CNIC first',
      'Verify the scholarship through the university or official scholarship website',
      'Ask the sender for their personal bank account',
    ],
    correct: 2,
    explanation:
      'Unexpected fees are a major warning sign. Verify scholarships through the university, government, or official scholarship website rather than trusting the message.',
    warnings: [
      'Unexpected processing fee',
      'Pressure to act quickly',
      'Unverified scholarship offer',
      'Request for sensitive documents',
    ],
  },

  {
    type: 'Fake Job Scam',
    logo: 'JOB',
    sender: 'Online Jobs HR',
    subject: 'Job Offer',
    title: 'You have been hired!',
    message:
      'Congratulations! You have been selected for a remote job paying $2,000 per month.',
    secondMessage:
      'To activate your employee account, send 10,000 PKR for equipment and registration.',
    button: 'Activate Job',
    question: 'What should you do?',
    options: [
      'Pay the registration fee',
      'Send my CNIC and bank details',
      'Verify the company and job through its official website and recruitment contacts',
      'Send the money and ask for a receipt',
    ],
    correct: 2,
    explanation:
      'Be suspicious of jobs that require upfront payments. Verify the employer independently and never send money simply to receive a job.',
    warnings: [
      'Unexpected upfront payment',
      'Very attractive salary',
      'No proper recruitment process',
      'Pressure to pay before starting',
    ],
  },

  {
    type: 'Fake Account',
    logo: 'SM',
    sender: 'Social Media Support',
    subject: 'Account Warning',
    title: 'Your account may be suspended',
    message:
      'We detected suspicious activity on your account.',
    secondMessage:
      'Confirm your password using the link below within 15 minutes or your account will be permanently disabled.',
    button: 'Confirm Password',
    question: 'What should you do?',
    options: [
      'Enter my password immediately',
      'Send the verification code to support',
      'Open the social-media app directly and check account notifications',
      'Reply with my email and password',
    ],
    correct: 2,
    explanation:
      'Legitimate services generally do not need you to give your password through a suspicious message. Open the official app yourself and check for notifications or security alerts.',
    warnings: [
      'Threat of account suspension',
      'Very short deadline',
      'Request for password',
      'Suspicious verification link',
    ],
  },

  {
    type: 'Phishing',
    logo: 'AC',
    sender: 'Account Security',
    subject: 'Verify your account',
    title: 'Security verification required',
    message:
      'We noticed a login from a new device.',
    secondMessage:
      'Confirm your identity by entering the verification code you receive.',
    button: 'Verify Identity',
    question: 'What should you do?',
    options: [
      'Give the verification code to the person who contacted me',
      'Ignore the message and check my account directly',
      'Send my password to confirm ownership',
      'Click the link and enter all requested information',
    ],
    correct: 1,
    explanation:
      'Verification codes are sensitive. Never give a login or verification code to someone who contacts you unexpectedly. Check your account through the official app or website.',
    warnings: [
      'Unexpected login notification',
      'Request for verification code',
      'Unknown sender',
      'Pressure to confirm identity',
    ],
  },
];

function BankScamSimulator() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [score, setScore] = useState(0);

  const scenario = scenarios[scenarioIndex];

  const chooseAnswer = (index) => {
    setSelected(index);
    setFinished(true);

    if (index === scenario.correct) {
      setScore((previous) => previous + 1);
    }
  };

  const nextScenario = () => {
  if (scenarioIndex < scenarios.length - 1) {
    setScenarioIndex((previous) => previous + 1);
    setSelected(null);
    setFinished(false);
  } else {
    setShowFinalResult(true);
  }
};

  const restart = () => {
  setScenarioIndex(0);
  setSelected(null);
  setFinished(false);
  setShowFinalResult(false);
  setScore(0);
};

  return (
    <section className="section bank-simulator" id="bank-scam">
      <div className="container">

        <div className="section-header">
          <span className="eyebrow">Interactive Cyber Safety Training</span>

          <h2 className="section-title">
            Scam Simulator
          </h2>

          <p className="section-subtitle">
            Test yourself against realistic fictional scam scenarios.
            Learn the warning signs before making a dangerous decision.
          </p>
        </div>

        <div className="bank-simulator-card">

          {!finished ? (
            <>
              <div className="checker-progress">
                Scenario {scenarioIndex + 1} of {scenarios.length}
              </div>

              <div className="bank-message">

                <div className="bank-message-header">

                  <div className="bank-logo">
                    {scenario.logo}
                  </div>

                  <div>
                    <strong>{scenario.sender}</strong>
                    <span>{scenario.subject}</span>
                  </div>

                </div>

                <div className="bank-message-body">

                  <h3>{scenario.title}</h3>

                  <p>
                    {scenario.message}
                  </p>

                  <p>
                    {scenario.secondMessage}
                  </p>

                  <button
                    className="fake-bank-link"
                    type="button"
                    onClick={(event) => event.preventDefault()}
                  >
                    {scenario.button}
                  </button>

                </div>

              </div>

              <div className="simulator-question">

                <ShieldAlert size={28} />

                <h3>{scenario.question}</h3>

                <p>
                  Choose the safest response.
                </p>

              </div>

              <div className="simulator-options">

                {scenario.options.map((option, index) => (
                  <button
                    key={index}
                    className="simulator-option"
                    onClick={() => chooseAnswer(index)}
                  >
                    <span>
                      {String.fromCharCode(65 + index)}
                    </span>

                    {option}

                    <ArrowRight size={18} />
                  </button>
                ))}

              </div>
            </>
          ) : (
            <div className="simulator-result">

              {selected === scenario.correct ? (
                <>
                  <CheckCircle size={52} />

                  <h3>
                    Excellent decision
                  </h3>

                  <p>
                    You chose the safest response. The goal is to avoid
                    reacting directly to suspicious messages and verify
                    information independently.
                  </p>
                </>
              ) : (
                <>
                  <XCircle size={52} />

                  <h3>
                    That could put you at risk
                  </h3>

                  <p>
                    Your selected response could expose you to a scam.
                    Stop and verify unexpected requests through an official
                    source before taking action.
                  </p>
                  <div className="correct-answer">
  <strong>Safest answer:</strong>
  <p>{scenario.options[scenario.correct]}</p>
</div>
                </>
              )}

              <div className="warning-explanation">

                <strong>
                  Warning signs:
                </strong>

                <ul>
                  {scenario.warnings.map((warning, index) => (
                    <li key={index}>
                      {warning}
                    </li>
                  ))}
                </ul>
                <div className="why-suspicious">
  <strong>Why is this suspicious?</strong>

  <p>
    Scammers often create urgency, fear, or pressure so you act before
    you have time to verify the request.
  </p>
</div>

              </div>

              <div className="simulator-score">
                Score: {score} / {scenarioIndex + 1}
              </div>

              <button
                className="btn btn-primary"
                onClick={nextScenario}
              >
                {scenarioIndex < scenarios.length - 1
                  ? 'Next Scenario'
                  : 'Finish Training'}

                <ArrowRight size={18} />
              </button>

              <button
                className="btn btn-secondary"
                onClick={restart}
              >
                <RotateCcw size={18} />
                Restart
              </button>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default BankScamSimulator;