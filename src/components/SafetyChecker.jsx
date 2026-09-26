import { useState } from 'react';
import { ShieldCheck, ArrowRight, RotateCcw } from 'lucide-react';

const questions = [
  'Have you received a message asking for your password or verification code?',
  'Has someone you do not know asked you to send money or gift cards?',
  'Has someone threatened you or tried to blackmail you online?',
  'Have you clicked a suspicious link or downloaded an unexpected file?',
  'Is someone using a fake account to impersonate or harass you?',
];

function SafetyChecker() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [yesAnswers, setYesAnswers] = useState(0);
  const [finished, setFinished] = useState(false);

  const answer = (isYes) => {
    const newYesAnswers = yesAnswers + (isYes ? 1 : 0);

    setYesAnswers(newYesAnswers);

    if (currentQuestion === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setYesAnswers(0);
    setFinished(false);
  };

  const getRiskMessage = () => {
    if (yesAnswers === 0) {
      return 'Low risk — keep practicing safe online habits.';
    }

    if (yesAnswers <= 2) {
      return 'Be careful — some warning signs were detected. Review the safety guides below.';
    }

    return 'High risk — several warning signs were detected. Consider getting help from someone you trust.';
  };

  return (
    <section id="check-safety" className="section checker-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Quick check</span>

          <h2 className="section-title">
            Check Your Safety
          </h2>

          <p className="section-subtitle">
            Answer five simple questions to identify common online-safety
            warning signs.
          </p>
        </div>

        <div className="checker-card">
          {!finished ? (
            <>
              <div className="checker-progress">
                Question {currentQuestion + 1} of {questions.length}
              </div>

              <div className="checker-progress-bar">
                <div
                  className="checker-progress-fill"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              <div className="checker-icon">
                <ShieldCheck size={42} />
              </div>

              <h3>
                {questions[currentQuestion]}
              </h3>

              <div className="checker-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => answer(true)}
                >
                  Yes <ArrowRight size={18} />
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => answer(false)}
                >
                  No <ArrowRight size={18} />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="checker-icon">
                <ShieldCheck size={42} />
              </div>

              <h3>
                Your safety check is complete
              </h3>

              <div className="checker-score">
                {yesAnswers} / {questions.length} warning signs
              </div>

              <p className="checker-risk">
                {getRiskMessage()}
              </p>

              {yesAnswers === 0 ? (
                <p>
                  You did not select any warning signs. Keep using strong
                  passwords, privacy settings, and healthy online habits.
                </p>
              ) : (
                <p>
                  Your answers identified some potential warning signs.
                  Review the safety guides below to learn what you can do next.
                </p>
              )}

              <button
                className="btn btn-primary"
                onClick={restart}
              >
                <RotateCcw size={18} />
                Start Again
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default SafetyChecker;