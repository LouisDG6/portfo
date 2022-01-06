import React from "react";
import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from 'react-scroll-motion'
import './styles.css'
// importing images
import headshot from '../../img/headshot.png'
import triviagame from '../../img/triviagame.png'
import segovia from '../../img/segovia.png'
import travelapp from '../../img/travelapp.png'
import safequeerspaces from '../../img/safequeerspaces.png'
import bigmomscakies from '../../img/bigmomscakies.png'
// importing icons
import { FiMail } from 'react-icons/fi'
import { FiGithub} from 'react-icons/fi'
import { TiSocialLinkedin } from 'react-icons/ti'



const Home = () => {
    const ZoomInScrollOut= batch(StickyIn(), FadeIn(), ZoomIn())

    const work = [
        {
            name: "Trivia Game",
            link: "https://seir-penguin-project-1-alpha.vercel.app/",
            imageSrc: triviagame
        },
        {
            name: "Segovia Goods",
            link: "",
            imageSrc: segovia
        },
        {
            name: "Travel App",
            link: "https://penguin-travel-app.netlify.app/",
            imageSrc: travelapp
        },
        {
            name: "Safe Queer Spaces",
            link: "https://thirsty-turing-b47009.netlify.app/",
            imageSrc: safequeerspaces
        },
        {
            name: "Big Moms Cakies Bakery",
            link: "https://ecstatic-mcclintock-8894dd.netlify.app/bigmomscakies",
            imageSrc: bigmomscakies
        },
    ]

    const handleContactClick = (url) => {
        const win = window.open(url, '_blank')
        win.focis()
    }
    return(
        <ScrollContainer>
            <ScrollPage page={0}>
             <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <div className= "image-container">
                <img src={'https://i.imgur.com/k2zXUQI.jpg?1'} alt="header image" />
                <div className="black-background"></div>
             </div>
             </Animator>
             <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
                 <div className="name">
                     <h2 className="first">
                         Louis
                     </h2>
                 </div>
             </Animator>
             <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
                 <div className="name">
                     <h2 className="last">
                         Guillermo
                     </h2>
                 </div>
             </Animator>
             <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
                 <div className="position">
                     <div></div>
                     <h2 className="last">
                         Software Engineer
                     </h2>
                 </div>
             </Animator>
            </ScrollPage>

            {/* section 2 */}

            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}>
                 <div className="section-title">Portfolio</div>
                </Animator>
            </ScrollPage>
            
            <ScrollPage page={2}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <div className="portfolio-content">
                        {
                            work?.map((work, index) => {
                                return(
                                    <a href={work?.link} target="_blank" key={work?.name}>
                                        <div className="portfolio-card">
                                        <div className="portfolio-title">
                                                <h3>{work?.name}</h3>
                                            </div>
                                            <div className="project-image">
                                                <img src={work?.imageSrc} alt={work?.name}/>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </Animator>
            </ScrollPage>

            {/* section 3 */}
            <ScrollPage page={3}>
                <Animator animation={ZoomInScrollOut}>
                 <div className="section-title about-me">About Me</div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={4}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, -400))}>
                    <div className="background-image-container">
                        <img src={headshot} alt="my pic"/>
                        <div className="black-background"></div>
                    </div>
                </Animator>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
                    <div className="details">
                        <div className="greeting">Hello</div>
                        <p className="bio">
                        I’m a software engineer with a background in public administration. I merge experience in administration in the public and non-profit atmospheres and software engineering to facilitate the use of technologies in providing services that advance humanitarian causes. My goal is to make user experience and interface more intuitive. By combining these two skills, I will make websites or apps easier for users.
                        </p>

                    </div>
                </Animator>
            </ScrollPage>

            {/* section 4 */}
            <ScrollPage page={5}>
                <Animator animation={ZoomInScrollOut}>
                 <div className="section-title contact">Contact</div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={6}>
                <div style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                }}>
                    <span style={{ fontSize: '40px'}}>
                        {/* {linkedin link} */}
                        <Animator animator={MoveIn(-1000, 0)}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onClick={() => handleContactClick('https://www.linkedin.com/in/louis-guillermo/') }>
                                <TiSocialLinkedin color="white" classname= 'contact-list-icon'/>
                                    <p>Louis Guillermo</p>
                            </div>
                        </Animator>
                        {/* {gmail link} */}
                        <Animator animator={MoveOut(1000, 0)}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onClick={() => handleContactClick('https://mail.google.com/mail/u/0/?tab=mm#inbox') }>
                                <FiMail color="white" classname= 'contact-list-icon'/>
                                    <p>guilleld01@gmail.com</p>
                            </div>
                        </Animator>
                        {/* {github link} */}
                        <Animator animator={MoveOut(-1000, 0)}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onClick={() => handleContactClick('https://github.com/LouisDG6') }>
                                <FiGithub color="white" classname= 'contact-list-icon'/>
                                    <p>LouisDG6</p>
                            </div>
                        </Animator>
                    </span>
                </div>
            </ScrollPage>
        </ScrollContainer>
    )
}

export default Home