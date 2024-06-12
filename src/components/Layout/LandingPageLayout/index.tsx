import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/Header';
import Footer from '@components/Footer';

function LandingPageLayout() {
  const contactUsRef = useRef<HTMLDivElement | null>();

  const scrollToContactUs = () =>
    contactUsRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Header scrollToContactUs={scrollToContactUs} />
      <Outlet context={[contactUsRef, scrollToContactUs]} />
      <Footer />
    </>
  );
}

export default LandingPageLayout;
