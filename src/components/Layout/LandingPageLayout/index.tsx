import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/Header';
import Footer from '@components/Footer';

function LandingPageLayout() {
  const contactUsRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const howWeWorkRef = useRef<HTMLDivElement | null>(null);

  const scrollToContactUs = () =>
    contactUsRef.current?.scrollIntoView({ behavior: 'smooth' });

  const scrollToAboutUs = () =>
    aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' });

  const scrollToHowWeWork = () =>
    howWeWorkRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Header
        scrollToContactUs={scrollToContactUs}
        scrollToAboutUs={scrollToAboutUs}
        scrollToHowWeWork={scrollToHowWeWork}
      />
      <Outlet context={{ contactUsRef, aboutUsRef, howWeWorkRef }} />
      <Footer />
    </>
  );
}

export default LandingPageLayout;
