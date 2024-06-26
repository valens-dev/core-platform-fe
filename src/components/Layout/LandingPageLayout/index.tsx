import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/Header';
import Footer from '@components/Footer';

function LandingPageLayout() {
  const contactUsRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const howWeWorkRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) =>
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Header
        scrollToContactUs={() => scrollToSection(contactUsRef)}
        scrollToAboutUs={() => scrollToSection(aboutUsRef)}
        scrollToHowWeWork={() => scrollToSection(howWeWorkRef)}
      />
      <Outlet context={{ contactUsRef, aboutUsRef, howWeWorkRef }} />
      <Footer />
    </>
  );
}

export default LandingPageLayout;
