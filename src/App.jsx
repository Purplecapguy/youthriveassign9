import { useState } from 'react'
import './App.css'
import Navbar from './navigation/Navbar';
import Paragraph1 from './section1/Paragraph1';
import Logo from './images/logo1.svg'
import Img1 from './images/Vector.svg'
import Img2 from './images/Vector3.svg'
import Img3 from './images/Vector2.svg'
import Img4 from './images/image17.png'
import Ibtext from './section2/Ibtext'
import AboutMe from './section3/AboutMe'
import Portfolio from './section4/Portfolio'
import Footer from './footer/Footer';
import Logo1 from './images/separator.svg'
import G1 from './images/Group12.svg'
import G2 from './images/Group13.svg'
import G3 from './images/strass.svg'
import G4 from './images/Group.svg'
import G5 from './images/Group14.svg'
import G6 from './images/bootstrap.svg'
import G7 from './images/figma.svg'
import G8 from './images/git.svg'
import G99 from './images/Group99.svg'
import G77 from './images/group77.svg'
import G66 from './images/group66.svg'
import G88 from './images/Group88.svg'
import Img18 from './images/image18.svg'
import Img19 from './images/image19.svg'
import Img20 from './images/image20.svg'
import Img17 from './images/image17.svg'
import P1 from './images/Project.png'
import P2 from './images/Rectangle17.png'
import P3 from './images/Project1.png'
import P4 from './images/Project2.png'
import P5 from './images/Project3.png'
import P6 from './images/Project4.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='section1'>
        <img className='log' src={Logo} alt="" />
        <Navbar />
        <Paragraph1 />
        <div className='icons'>
          <img src={Img1} alt="" />
          <img src={Img3} alt="" />
          <img src={Img2} alt="" />
        </div>
        <img className='person' src={Img4} alt="" />
        <p className='man-text'>this is not my photo, but I dearly hope to get one just like this </p>
      </div>
      <div className='itbtext'>
        <Ibtext />
      </div>
      <div className='section3'>
        <div className='rectangle'>
          <AboutMe />
        </div>
        <img className='seperator' src={Logo1} alt="" />
        <div className="development">
            <img src="" alt="" />
            <h4>DESIGN</h4>
            <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            <img src="" alt="" />
            <h4>DEVELOPMENT</h4>
            <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            <img src="" alt="" />
            <h4>MAINTENANCE</h4>
            <p></p>
        </div>
        <img className='seperator' src={Logo1} alt="" />
            <div className="Skills">
                <div className="rectanglelast">
                    <h3>SKILLS</h3>
                </div>
                <div className="skills-learn">
                    <p className="pp">USING NOW:</p>
                    <img className='log' src={G1} alt="" />
                    <img className='log' src={G2} alt="" />
                    <img className='log' src={G3} alt="" />
                    <img className='log' src={G4} alt="" />
                    <img className='log' src={G5} alt="" />
                    <img className='log' src={G6} alt="" />
                    <img className='log' src={G7} alt="" />
                    <img className='log' src={G8} alt="" />
                    <p class="pp">LEARNING:</p>
                    <img className='log' src={G99} alt="" />
                    <img className='log' src={G77} alt="" />
                    <img className='log' src={G66} alt="" />
                    <img className='log' src={G88} alt="" />
                    <p class="pp">OTHER SKILLS:</p>
                    <img className='log' src={Img18} alt="" />
                    <img className='log' src={Img19} alt="" />
                    <img className='log' src={Img20} alt="" />
                    <img className='log' src={Img17} alt="" />
                </div>
            </div>
      </div>
      <div className='section4'>
        <div>
          <Portfolio />
        </div>
        <div className='imgs'>
          <img className='card' src={P1} alt="" />
          <img className='card' src={P2} alt="" />
          <img className='card' src={P3} alt="" />
          <img className='card' src={P4} alt="" />
          <img className='card' src={P5} alt="" />
          <img className='card' src={P6} alt="" />
        </div>
        <p>And many more to come!</p>
        <div className='footer'>
          <div>
            <Footer />
          </div>
          <img className='seperator' src={Logo1} alt="" />
          <div className='leftdown'>
            <p>ENTER YOUR NAME*</p>
          </div>
          <div className="leftdown">
            <p>ENTER YOUR EMAIL*</p>
          </div>
          <div className="leftdown">
            <p>PHONE NUMBER</p>
          </div>
          <div className='leftdownlast'>
            <p>YOUR MESSAGE</p>
          </div>
          <div className='divide'>
            <p>SUBMIT</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
