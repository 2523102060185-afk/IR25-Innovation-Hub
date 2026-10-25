import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcosystemOverview } from './components/EcosystemOverview';
import { PolicyFramework } from './components/PolicyFramework';
import { MarketAndOECD } from './components/MarketAndOECD';
import { StudentStartupLandscape } from './components/StudentStartupLandscape';
import { IRStudentAdvantages } from './components/IRStudentAdvantages';
import { StudentIdeasCatalog } from './components/StudentIdeasCatalog';
import { BoothShowcase } from './components/BoothShowcase';
import { ConclusionSection } from './components/ConclusionSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <EcosystemOverview />
        <PolicyFramework />
        <MarketAndOECD />
        <StudentStartupLandscape />
        <IRStudentAdvantages />
        <StudentIdeasCatalog />
        <BoothShowcase />
        <ConclusionSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
