import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Section from "../components/Section"
import Image from "../components/Image"
import Blog from "../components/Blog"
import Insights from "../components/Insights"
import Inquire from "../components/Inquire"
import Footer from "../components/Footer"
const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Image />
        <Section />
        <Blog />
        <Insights />
        <Inquire />
        <Footer />
    </div>
  )
}

export default LandingPage