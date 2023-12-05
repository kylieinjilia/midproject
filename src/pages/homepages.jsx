import About from "../Components/About"
import Contact from "../Components/Contact"
import Education from "../Components/Education"
import Exp from "../Components/Experience"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Portfolio from "../Components/Portfolio"
import Profile from "../Components/Profile"
import Ref from "../Components/Reference"
import Skill from "../Components/Skill"

/* eslint-disable react/no-unknown-property */
const HomePage = () => (
  <div>
    <Header/>
    <div className="page-content">
      <div>
        <Profile/>
        <About/>
        <Skill/>
        <Portfolio/>
        <Exp/>
        <Education/>
        <Ref/>
        <Contact/>
      </div>
    </div>
    <Footer/>
  </div>

)

export default HomePage