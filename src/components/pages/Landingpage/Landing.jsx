import React from 'react'
import Navbar from './Navbar'
import LandingHero from './LandingHero'
import Imagesection from './Imagesection'
import FindTalentSection from './FindtalentedSection'
import Howitwork from './Howitwork'
import FAQ from './FAQ'
import CastingCall from './Castingcall'
import Downloadappsection from './Downloadappsection'
import Connectwithus from './Connectwithus'
import Footer from './Footer'
// import { Sidebar } from 'lucide-react'
const Landing = () => {
  return (
    <div>
      <Navbar />
      <LandingHero/>
      <Imagesection/>
      <FindTalentSection/>
      <CastingCall/>
      <Howitwork/>
      <FAQ/>
      <Downloadappsection/>
      <Connectwithus/>
      <Footer/>
    </div>
  )
}

export default Landing
