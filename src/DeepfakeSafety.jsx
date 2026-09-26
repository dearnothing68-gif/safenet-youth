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
    type: 'AI Voice Scam',
    logo: 'AI',
    sender: 'Unknown Caller',
    subject: 'Emergency Call',
    title: '“Mom, I need help!”',
    message:
      'You receive a phone call from someone who sounds exactly like a family member.',
    secondMessage:
      'They say they are in trouble and urgently need you to send money.',
    button: 'Send Money',
    question: 'What should you do?',
    options: [
      'Send the money immediately',
      'Ask them for a verification code',
      'Hang up and contact the family member through a trusted number',
      'Share my bank details so they can receive the money',
    ],
    correct: 2,
    explanation:
      'AI can imitate someone’s voice. If a caller creates panic and asks for money, verify their identity using a phone number you already trust.',
    warnings: [
      'Unexpected emergency',
      'Strong emotional pressure',
      'Request for money',
      'Voice may have been AI-generated',
    ],
  },

  {
    type: 'Deepfake Video',
    logo: 'DV',
    sender: 'Celebrity Account',
    subject: 'Investment Opportunity',
    title: '“Invest with me today!”',
    message:
      'A famous person appears in a video recommending an investment that promises huge returns.',
    secondMessage:
      'The video tells you to send cryptocurrency immediately because the offer expires tonight.',
    button: 'Invest Now',
    question: 'What should you do?',
    options: [
      'Invest quickly before the offer disappears',
      'Share the video with friends',
      'Verify the claim through trusted official sources',
      'Send cryptocurrency to the account shown in the video',
    ],
    correct: 2,
    explanation:
      'Deepfake videos can make it appear that a real person said or did something they never actually said or did. Never invest based only on a video.',
    warnings: [
      'Unrealistic financial promises',
      'Urgent deadline',
      'Cryptocurrency payment',
      'Video may be manipulated',
    ],
  },

  {
    type: 'Fake Video Call',
    logo: 'VC',
    sender: 'Friend',
    subject: 'Urgent Help',
    title: 'Your friend calls on video',
    message:
      'Your friend appears on a video call and says they urgently need money.',
    secondMessage:
      'Something about their face and movements looks slightly unusual.',
    button: 'Send Money',
    question: 'What is the safest response?',
    options: [
      'Send the money because I can see their face',
      'Ask a personal question only my friend would know',
      'End the call and contact them through another trusted method',
      'Send my account password so they can explain the situation',
    ],
    correct: 2,
    explanation:
      'Seeing someone on video does not always prove that the person is real. AI can manipulate faces, voices, and video.',
    warnings: [
      'Urgent money request',
      'Unusual facial movement',
      'Unexpected video call',
      'Identity has not been independently verified',
    ],
  },
];

function DeepfakeSafety() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
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
    }
  };

  const restart = () => {
    setScenarioIndex(0);
    setSelected(null);
    setFinished(false);
    setScore(0);
  };

  return (
    <section
      className="section deepfake-safety"
      id="deepfake-safety"
    >
      <div className="container">

        <div className="section-header">

          <span className="eyebrow">
            AI & Deepfake Safety Training
          </span>

          <h2 className="section-title">
            Can You Spot an AI Scam?
          </h2>

          <p className="section-subtitle">
            AI can imitate voices, faces and videos. Test yourself
            against realistic fictional scenarios.
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

                <h3>
                  {scenario.question}
                </h3>

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
                    You chose the safest response. Always verify
                    a person's identity through another trusted method.
                  </p>
                </>
              ) : (
                <>
                  <XCircle size={52} />

                  <h3>
                    That could put you at risk
                  </h3>

                  <p>
                    AI-generated voices and videos can look and sound
                    very convincing. Verify unexpected requests
                    independently.
                  </p>

                  <div className="correct-answer">

                    <strong>
                      Safest answer:
                    </strong>

                    <p>
                      {scenario.options[scenario.correct]}
                    </p>

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

                  <strong>
                    Why is this suspicious?
                  </strong>

                  <p>
                    AI can make fake voices, faces and videos look
                    realistic. Never trust a high-pressure request
                    just because it looks or sounds like someone
                    you know.
                  </p>

                </div>

              </div>

              <div className="simulator-score">
                Score: {score} / {scenarioIndex + 1}
              </div>

              {scenarioIndex < scenarios.length - 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={nextScenario}
                >
                  Next Scenario
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={restart}
                >
                  <RotateCcw size={18} />
                  Try Again
                </button>
              )}

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

export default DeepfakeSafety;