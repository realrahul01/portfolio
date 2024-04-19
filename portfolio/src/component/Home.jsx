import img from '../images/unsplash_xvPPaYBJEZs.png'
import img1 from '../images/Screenshot 2022-02-02 at 21.29 1.png'
import img2 from '../images/image 1.png'
import img3 from '../images/image 2.png'
import img4 from '../images/Frame 7.png'
import img5 from '../images/image 3.png'
import img6 from '../images/Screenshot 2022-02-02 at 21.37 1.png'
import img7 from '../images/Frame 10.png'
import img8 from '../images/image 4.png'
import img9 from '../images/Screenshot 2022-02-02 at 21.41 1.png'
import img10 from '../images/Group.png'
import img11 from '../images/akar-icons_github-fill.png'
import img12 from '../images/akar-icons_twitter-fill.png'
import img13 from '../images/bi_phone-fill.png'
import Footer from './Footer'




const Home=()=>{


    
    return (
        <section>
            <div className="main" id='home'>
                <div className="left_main">
                    <img src={img} alt="error" />   
                </div>
                <div className="right_main">
                    <p> <span className='hy'>Hi,</span> <span className='say1'>I am</span> <big>John Doe</big> </p>
                    <p>Frontend Developer</p>
                </div>
            </div>
            <div className="project" id='project'>
                <div>
                <h1>PROJECTS</h1>
                <div className="project_card">
                    <img src={img1} alt="error" />
                    <img src={img2} alt="error" />
                    <img src={img3} alt="error" />
                    <img src={img4} alt="error" />
                    <img src={img5} alt="error" />
                    <img src={img6} alt="error" />
                    <img src={img7} alt="error" />
                    <img src={img8} alt="error" />
                    <img src={img9} alt="error" />
                </div>
                </div>
            </div>
            

            <div className="contact" id='contact'>
                <div>
                <h1>Let's work together...</h1>
                <p className='social_link1'><span><img src={img10} alt="error" /> Linkedin</span> <span> <img src={img12} alt="error" /> Twitter</span> <span> @ Send Mail</span></p>
                <p className='social_link2'><span> <img src={img11} alt="error" /> Github</span> <span> <img src={img13} alt="error" /> Call Me</span></p>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </section>
    )
}

export default Home;