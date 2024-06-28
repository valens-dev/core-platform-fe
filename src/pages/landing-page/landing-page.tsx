import { useOutletContext } from 'react-router-dom';

import { AboutUs } from './about-us';
import { ContactUs } from './contact-us';
import { HowWeWork } from './how-we-work';
import { InfoPanel } from './info-panel';
import { Track } from './track';

export function LandingPage() {
  const { contactUsRef, aboutUsRef, howWeWorkRef } = useOutletContext<{
    contactUsRef: React.RefObject<HTMLDivElement>;
    aboutUsRef: React.RefObject<HTMLDivElement>;
    howWeWorkRef: React.RefObject<HTMLDivElement>;
  }>();

  const scrollToContactUs = () => {
    contactUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
