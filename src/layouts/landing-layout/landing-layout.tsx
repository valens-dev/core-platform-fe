import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/layouts/header';
import { Footer } from '@/layouts/footer';

export function LandingLayout(): React.ReactNode {
  const contactUsRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const howWeWorkRef = useRef<HTMLDivElement | null>(null);

  function scrollToSection(sectionRef: React.RefObject<HTMLDivElement>): void {
    return sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Header
        scrollToContactUs={() => {
          scrollToSection(contactUsRef);
        }}
        scrollToAboutUs={() => {
          scrollToSection(aboutUsRef);
        }}
        scrollToHowWeWork={() => {
          scrollToSection(howWeWorkRef);
        }}
      />
      <Outlet context={{ contactUsRef, aboutUsRef, howWeWorkRef }} />
      <Footer />
    </>
  );
}
