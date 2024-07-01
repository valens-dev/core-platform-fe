import { useOutletContext } from 'react-router-dom';

import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import HowWeWork from './HowWeWork';
import InfoPanel from './InfoPanel';
import Track from './Track';

function LandingPage() {
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

export default LandingPage;
