import Footer from '@components/Footer'
import Header from '@components/Header'

import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import HowWeWork from './HowWeWork'
import InfoPanel from './InfoPanel'

function Homepage() {
  return (
    <>
      <Header />
      <InfoPanel />
      <HowWeWork />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Homepage
