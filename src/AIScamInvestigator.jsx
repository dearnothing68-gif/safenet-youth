import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Bot,
  ShieldCheck,
  AlertTriangle,
  Search,
  RotateCcw,
} from 'lucide-react';

function AIScamInvestigator() {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeMessage = () => {
    if (!message.trim()) return;

    const text = message.toLowerCase();

    let risk = 'LOW';
    let score = 15;
    const warnings = [];

    if (
      text.includes('urgent') ||
      text.includes('immediately') ||
      text.includes('within 30 minutes') ||
      text.includes('act now')
    ) {
      warnings.push('Creates urgency or pressure');
      score += 20;
    }

    if (
      text.includes('pay') ||
      text.includes('payment') ||
      text.includes('fee') ||
      text.includes('money')
    ) {
      warnings.push('Requests money or payment');
      score += 25;
    }

    if (
      text.includes('password') ||
      text.includes('otp') ||
      text.includes('verification code') ||
      text.includes('pin')
    ) {
      warnings.push('Requests sensitive security information');
      score += 30;
    }

    if (
      text.includes('click') ||
      text.includes('link') ||
      text.includes('login')
    ) {
      warnings.push('Contains a potentially risky link or login request');
      score += 15;
    }

    if (
      text.includes('won') ||
      text.includes('winner') ||
      text.includes('congratulations') ||
      text.includes('prize')
    ) {
      warnings.push('Uses a prize or reward to attract attention');
      score += 15;
    }

    if (score >= 70) {
      risk = 'HIGH';
    } else if (score >= 40) {
      risk = 'MEDIUM';
    }

    setResult({
      risk,
      score: Math.min(score, 100),
      warnings,
    });
  };
const analyzeWithAI = async () => {
  if (!message.trim()) return;

  setLoading(true);

  try {
    const response = await fetch('http://localhost:3001/api/analyze-scam', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message.trim(),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'AI analysis failed.');
    }

    setResult({
      risk: 'AI',
      score: null,
      warnings: [data.result],
    });
  } catch (error) {
    console.error('AI analysis error:', error);

    setResult({
      risk: 'ERROR',
      score: null,
      warnings: [
        'Unable to connect to SafeNet Guardian. Please make sure the AI server is running.',
      ],
    });
  } finally {
    setLoading(false);
  }
};
  const reset = () => {
    setMessage('');
    setResult(null);
  };

  return (
    <section className="section ai-investigator" id="ai-investigator">
      <div className="container">

        <div className="ai-investigator-header">

          <div className="ai-icon">
            <Bot size={34} />
          </div>

          <span className="eyebrow">
            AI-Powered Safety
          </span>

          <h2 className="section-title">
            AI Scam Investigator
          </h2>

          <p className="section-subtitle">
            Paste a suspicious message and investigate its warning signs
            before you trust it.
          </p>

        </div>

        <div className="ai-investigator-card">
          <div className="ai-guardian">
  <div className="ai-guardian-avatar">
    <img
      src="/safenet-guardian.png"
      alt="SafeNet Guardian"
    />
    <span className="ai-online-dot"></span>
  </div>

  <div className="ai-guardian-info">
    <strong>SafeNet Guardian</strong>
    <span>
      <span className="ai-status-dot"></span>
      AI protection active
    </span>
  </div>
</div>

          <div className="ai-input-area">

            <div className="ai-input-label">
              <Search size={20} />
              <strong>
                What did you receive?
              </strong>
            </div>

            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Paste an SMS, WhatsApp message, email, job offer, scholarship offer, or suspicious message here..."
              rows={7}
            />
            <p className="text-sm text-gray-500 mt-2">
  Privacy: Your message is sent to SafeNet Guardian for analysis and is not intentionally stored long-term by SafeNet Youth.
</p>

           <button
  className="btn btn-primary ai-investigate-btn"
  onClick={analyzeWithAI}
  disabled={!message.trim() || loading}
>
  {loading ? (
    <>
      <span className="ai-spinner"></span>
      Analyzing Message...
    </>
  ) : (
    <>
      <Bot size={19} />
      Investigate Message
    </>
  )}
</button>
          </div>

          {result && (
            <div className="ai-result">

              <div className={`ai-risk ${result.risk.toLowerCase()}`}>

                {result.risk === 'HIGH' ? (
                  <AlertTriangle size={30} />
                ) : (
                  <ShieldCheck size={30} />
                )}

                <div>
                  <span>Risk Assessment</span>
                  <strong>
                    {result.risk} RISK
                  </strong>
                </div>

                <div className="ai-score">
                  {result.score !== null && (
  <div className="ai-score">
    {result.score}/100
  </div>
)}
                </div>

              </div>

              <div className="ai-result-content">

                <h3>
                  SafeNet Guardian Analysis
                </h3>

                {result.warnings.length > 0 ? (
                  <ul>
                    {result.warnings.map((warning) => (
  <li key={warning}>
    {result.risk === 'AI' ? (
      <div className="ai-response">
  <ReactMarkdown>{warning}</ReactMarkdown>
</div>
    ) : (
      <>
        <AlertTriangle size={17} />
        {warning}
      </>
    )}
  </li>
))}
                  </ul>
                ) : (
                  <p>
                    No obvious warning signs were detected.
                    This does not prove the message is safe.
                    Always verify important requests independently.
                  </p>
                )}

                <div className="ai-advice">

                  <ShieldCheck size={22} />

                  <div>
                    <strong>
                      Remember
                    </strong>

                    <p>
                      A message can look professional and still be
                      deceptive. Verify the sender, request, link,
                      and context before taking action.
                    </p>
                  </div>

                </div>

              </div>

              <button
              
                className="btn btn-secondary"
                onClick={reset}
              >
                <RotateCcw size={18} />
                Investigate Another
              </button>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default AIScamInvestigator;