import Header from '@components/Header'
import Footer from '@components/Footer'

import { ILandingPageLayout } from '@utils/interfaces'

function LandingPageLayout({ children }: ILandingPageLayout) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default LandingPageLayout
