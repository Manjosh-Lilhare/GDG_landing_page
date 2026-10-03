import React, { useState, useEffect } from 'react';
import NagpurLoader from './components/Loader/NagpurLoader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Heritage from './components/Heritage/Heritage';
import OrangeCity from './components/OrangeCity/OrangeCity';
import Community from './components/Community/Community';
import Events from './components/Events/Events';
import Stories from './components/Stories/Stories';
import HeritageTransition from './components/Transition/HeritageTransition';
import Values from './components/Values/Values';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import NagpurEasterEgg from './components/EasterEgg/NagpurEasterEgg';
import JoinModal from './components/Modal/JoinModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Join GDG Nagpur');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenJoinModal = (title = 'Join GDG Nagpur') => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#E2E2E8] relative selection:bg-[#FD6C00] selection:text-black">
      
      {/* 1. Cinematic Website Loader (6-7s sequence) */}
      {loading && (
        <NagpurLoader onComplete={() => setLoading(false)} />
      )}

      {/* Main Website Experience */}
      {!loading && (
        <>
          {/* Scroll Progress Bar at Top */}
          <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-[#4285F4] via-[#FD6C00] to-[#34A853] transition-all duration-75"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Navigation */}
          <Navbar onOpenJoinModal={() => handleOpenJoinModal('Join GDG Nagpur')} />

          {/* Hero Section */}
          <Hero onOpenJoinModal={() => handleOpenJoinModal('Join GDG Nagpur')} />

          {/* Rooted in Nagpur */}
          <Heritage />

          {/* Orange City Interaction */}
          <OrangeCity />

          {/* Community Pillars */}
          <Community onOpenJoinModal={() => handleOpenJoinModal('Join Community Track')} />

          {/* Events Timeline */}
          <Events onOpenRSVPModal={(eventName) => handleOpenJoinModal(`RSVP: ${eventName}`)} />

          {/* Community Stories */}
          <Stories />

          {/* Heritage -> Tech Transition */}
          <HeritageTransition />

          {/* Core Values */}
          <Values />

          {/* Final CTA */}
          <CTA onOpenJoinModal={() => handleOpenJoinModal('Join GDG Nagpur')} />

          {/* Footer */}
          <Footer onOpenJoinModal={() => handleOpenJoinModal('Become an Organizer')} />

          {/* Discoverable Orange Easter Egg */}
          <NagpurEasterEgg />

          {/* RSVP & Join Modal */}
          <JoinModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            defaultTitle={modalTitle}
          />
        </>
      )}

    </div>
  );
}
