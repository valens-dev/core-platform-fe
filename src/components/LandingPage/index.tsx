import { useOutletContext } from 'react-router-dom'

import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import HowWeWork from './HowWeWork'
import InfoPanel from './InfoPanel'

import { LandingPageOutletContextType } from '@utils/types'

function LandingPage() {
  const [contactUsRef, scrollToContactUs]: LandingPageOutletContextType =
    useOutletContext()

  return (
    <>
      <InfoPanel />
      <HowWeWork scrollToContactUs={scrollToContactUs} />
      <AboutUs />
      <ContactUs contactUsRef={contactUsRef} />
    </>
  )
}

export default LandingPage
