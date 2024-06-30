/* eslint-disable import/no-default-export */

import { useOutletContext } from 'react-router-dom';

import { Track } from './track';
import { AboutUs } from './about-us';
import { ContactUs } from './contact-us';
import { InfoPanel } from './info-panel';
import { HowWeWork } from './how-we-work';

export default function LandingPage(): React.ReactNode {
  const { contactUsRef, aboutUsRef, howWeWorkRef } = useOutletContext<{
    contactUsRef: React.RefObject<HTMLDivElement>;
    aboutUsRef: React.RefObject<HTMLDivElement>;
    howWeWorkRef: React.RefObject<HTMLDivElement>;
  }>();

  function scrollToContactUs(): void {
    contactUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <InfoPanel />
      <HowWeWork
        howWeWorkRef={howWeWorkRef}
        scrollToContactUs={scrollToContactUs}
      />
      <Track />
      <AboutUs aboutUsRef={aboutUsRef} />
      <ContactUs contactUsRef={contactUsRef} />
    </>
  );
}
