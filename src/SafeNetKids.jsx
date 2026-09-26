import { useState } from 'react';
import {
  ShieldCheck,
  Gamepad2,
  MessageCircle,
  Gift,
  Camera,
  Bot,
  Heart,
  AlertTriangle,
  ArrowRight,
  Star,
} from 'lucide-react';

const lessons = [
  {
    icon: Gamepad2,
    title: 'Gaming Safety',
    description: 'Stay safe while playing games and talking to other players.',
    color: 'blue',
    question:
      'A player you just met asks for your real name, school, and home city. What should you do?',
    options: [
      'Tell them because they seem friendly',
      'Share only my school',
      'Keep personal information private and tell a trusted adult',
      'Give them my information if they promise me a game item',
    ],
    correct: 2,
    explanation:
      'People online may not be who they say they are. Your real name, school, location, and other personal details should stay private.',
  },

  {
    icon: MessageCircle,
    title: 'Stranger Chat',
    description: 'Learn what to do when someone you do not know contacts you.',
    color: 'purple',
    question:
      'Someone online says they are your age and asks you to move the conversation to a private app. What should you do?',
    options: [
      'Move to the private app',
      'Keep chatting because they seem nice',
      'Stop the conversation and tell a trusted adult',
      'Give them my phone number first',
    ],
    correct: 2,
    explanation:
      'A person can lie about their age or identity online. If someone wants to move a conversation somewhere private, especially when you do not know them in real life, get help from a trusted adult.',
  },

  {
    icon: Gift,
    title: 'Fake Prizes',
    description: 'Spot fake giveaways, free items, and gaming rewards.',
    color: 'yellow',
    question:
      'A pop-up says: “Congratulations! You won 10,000 game coins. Enter your password to claim them.” What should you do?',
    options: [
      'Enter my password quickly',
      'Share the message with my friends',
      'Close it and tell a trusted adult',
      'Use my friend’s password instead',
    ],
    correct: 2,
    explanation:
      'Real rewards should not require you to give away your password. Fake prizes are often used to steal accounts.',
  },

  {
    icon: Camera,
    title: 'Photos & Privacy',
    description: 'Understand why private photos and personal information matter.',
    color: 'pink',
    question:
      'Someone online asks you to send a private photo and says, “Don’t tell your parents.” What should you do?',
    options: [
      'Send it because they promised to keep it secret',
      'Send one photo but not two',
      'Do not send it and tell a trusted adult immediately',
      'Ask them to send theirs first',
    ],
    correct: 2,
    explanation:
      'A request for secrecy is a major warning sign. Never send private images because someone pressures you. Tell a trusted adult and keep the messages as evidence.',
  },

  {
    icon: Bot,
    title: 'AI & Fake Videos',
    description: 'Learn that faces and voices can be changed with AI.',
    color: 'green',
    question:
      'You see a video of a famous person saying you can win money by sending a small payment. What should you do?',
    options: [
      'Send the payment immediately',
      'Trust the video because the person looks real',
      'Check the claim using a trusted official source',
      'Share the video with everyone',
    ],
    correct: 2,
    explanation:
      'AI can create convincing fake voices and videos. Never send money because of a video alone. Check trusted sources first.',
  },

  {
    icon: Heart,
    title: 'Cyberbullying',
    description: 'Know what to do when someone is mean, threatening, or abusive online.',
    color: 'red',
    question:
      'Someone keeps sending you hurtful messages and tells you not to tell anyone. What should you do?',
    options: [
      'Keep it secret',
      'Send an angry message back',
      'Save the evidence and tell a trusted adult',
      'Delete everything immediately',
    ],
    correct: 2,
    explanation:
      'You do not have to deal with online bullying alone. Save important evidence, block and report the person, and tell a trusted adult.',
  },
];

function SafeNetKids() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [points, setPoints] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [levelUpMessage, setLevelUpMessage] = useState('');

  const chooseAnswer = (index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    if (index === lessons[selectedLesson].correct) {
      setPoints((previous) => previous + 10);
      const newPoints = points + 10;

if (newPoints === 20 || newPoints === 40 || newPoints === 60 || newPoints === 100) {
  setLevelUpMessage('🎉 Level Up! You reached a new Safety Level!');
  setTimeout(() => setLevelUpMessage(''), 3000);
}
setCompletedLessons((previous) =>
  previous.includes(selectedLesson) ? previous : [...previous, selectedLesson]
);
    }
  };

  const closeLesson = () => {
    setSelectedLesson(null);
    setSelectedAnswer(null);
  };

  const lesson = selectedLesson !== null ? lessons[selectedLesson] : null;
  const LessonIcon = lesson?.icon;
  const getSafetyLevel = () => {
  if (points >= 100) {
    return {
      title: 'SafeNet Guardian',
      icon: '🏆',
      next: 100,
      progress: 100,
    };
  }

  if (points >= 60) {
    return {
      title: 'Safety Expert',
      icon: '⭐',
      next: 100,
      progress: points,
    };
  }

  if (points >= 40) {
    return {
      title: 'Cyber Defender',
      icon: '🛡️',
      next: 60,
      progress: (points / 60) * 100,
    };
  }

  if (points >= 20) {
    return {
      title: 'Scam Spotter',
      icon: '🔎',
      next: 40,
      progress: (points / 40) * 100,
    };
  }

  return {
    title: 'Safety Beginner',
    icon: '🌱',
    next: 20,
    progress: (points / 20) * 100,
  };
};

const safetyLevel = getSafetyLevel();

  return (
    <section className="section safenet-kids" id="safenet-kids">
      <div className="container">

        <div className="kids-hero">

          <div className="kids-hero-icon">
            <ShieldCheck size={54} />
          </div>

          <span className="eyebrow">
            SafeNet Kids
          </span>

          <h2 className="section-title">
            Your Internet Safety Adventure
          </h2>

          <p className="section-subtitle">
            Learn how to stay safe while gaming, chatting, watching videos,
            using social media, and exploring the internet.
          </p>

          <div className="kids-points">
            <Star size={20} />
            <strong>{points}</strong>
            <span>Safety Points</span>
          </div>
          <div className="kids-level-card">
          {levelUpMessage && (
  <div className="kids-level-up">
    {levelUpMessage}
  </div>
)}
  <div className="kids-level-icon">
    {safetyLevel.icon}
  </div>
  <div className="kids-points">
  <ShieldCheck size={20} />
  <strong>{completedLessons.length}</strong>
  <span>Lessons Completed</span>
</div>

  <div className="kids-level-info">
    <span>Current Safety Level</span>

    <h3>{safetyLevel.title}</h3>

    <div className="kids-progress-track">
      <div
        className="kids-progress-bar"
        style={{ width: `${safetyLevel.progress}%` }}
      />
    </div>

    <small>
      {points >= 100
        ? 'Maximum level reached! 🏆'
        : `${points} / ${safetyLevel.next} points`}
    </small>
  </div>
</div>

        </div>

        {!lesson ? (
          <>

            <div className="kids-warning">

              <AlertTriangle size={26} />

              <div>
                <strong>Remember</strong>
                <p>
                  If something online makes you scared, uncomfortable,
                  or confused, you can always tell a trusted adult.
                </p>
              </div>

            </div>

            <div className="kids-lessons">

              {lessons.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.title}
                    className={`kids-lesson-card ${item.color}`}
                    onClick={() => {
                      setSelectedLesson(index);
                      setSelectedAnswer(null);
                    }}
                  >

                    <div className="kids-lesson-icon">
                      <Icon size={30} />
                    </div>

                    <div className="kids-lesson-content">

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.description}
                      </p>

                    </div>

                    <ArrowRight size={22} />

                  </button>
                );
              })}

            </div>

            <div className="kids-help-card">

              <div className="kids-help-icon">
                🆘
              </div>

              <div>
                <h3>
                  Something scary happened online?
                </h3>

                <p>
                  You are not in trouble. Tell a parent, teacher,
                  or another trusted adult.
                </p>
              </div>

            </div>

          </>
        ) : (

          <div className="kids-quiz">

            <div className="kids-quiz-top">

              <button
                className="btn btn-secondary"
                onClick={closeLesson}
              >
                ← Back
              </button>

                <span>
                  {lesson.title}
                </span>

              </div>

              <div className="kids-question">

                <div className="kids-question-icon">
                  {LessonIcon && <LessonIcon size={36} />}
                </div>

                <h3>
                  {lesson.question}
                </h3>

                <p>
                  Choose the safest answer.
                </p>

              </div>

              <div className="kids-options">

                {lesson.options.map((option, index) => {

                  let className = 'kids-option';

                  if (selectedAnswer !== null) {
                    if (index === lesson.correct) {
                      className += ' correct';
                    } else if (index === selectedAnswer) {
                      className += ' incorrect';
                    }
                  }

                  return (
                    <button
                      key={index}
                      className={className}
                      onClick={() => chooseAnswer(index)}
                      disabled={selectedAnswer !== null}
                    >

                      <span>
                        {String.fromCharCode(65 + index)}
                      </span>

                      {option}

                    </button>
                  );
                })}

              </div>

              {selectedAnswer !== null && (

                <div
                  className={
                    selectedAnswer === lesson.correct
                      ? 'kids-feedback correct-feedback'
                      : 'kids-feedback incorrect-feedback'
                  }
                >

                  {selectedAnswer === lesson.correct ? (
                    <>
                      <ShieldCheck size={30} />

                      <h3>
                        Great job! +10 points ⭐
                      </h3>

                      <p>
                        {lesson.explanation}
                      </p>
                    </>
                  ) : (
                    <>
                    <AlertTriangle size={30} />

                    <h3>
                      Good try! Let's learn from this.
                    </h3>

                    <p>
                      {lesson.explanation}
                    </p>
                  </>
                )}

                <button
                  className="btn btn-primary"
                  onClick={closeLesson}
                >
                  Continue Learning
                  <ArrowRight size={18} />
                </button>

              </div>

            )}

          </div>

        )}

      </div>
    </section>
  );
}

export default SafeNetKids;