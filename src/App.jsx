import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SafetyCategories from './components/SafetyCategories';
import SafetyChecker from './components/SafetyChecker';
import LearnSection from './components/LearnSection';
import GetHelp from './components/GetHelp';
import IncidentGuide from './components/IncidentGuide';
import './index.css';
import BankScamSimulator from './BankScamSimulator';
import DeepfakeSafety from './DeepfakeSafety';
import SafeNetKids from './SafeNetKids';
import AIScamInvestigator from './AIScamInvestigator';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <SafetyCategories />
        <SafetyChecker />
<BankScamSimulator />
<DeepfakeSafety />
<SafeNetKids />
<AIScamInvestigator />
        <LearnSection />
        <GetHelp />
        <IncidentGuide />
      </main>

      <Footer />
    </div>
  );
}

export default App;