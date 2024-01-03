import React from 'react'
import './Project.css'
import Foodhunt from '../../assets/IMG_20240103_144108.jpg'
import PORTFOLIO from '../../assets/IMG_20240103_155447.jpg'
const Project = () => {
    return (
        <>
            <section className="project section" id="projects">
                <h2 className="section_title">Project</h2>
                <span className="section_subtitle">My Recent Work</span>
                <div className="project_container container">
                    <div className="scroll">
                        <a href="https://food-hunt-react.vercel.app/">
                            <img src={Foodhunt} alt="" className='img-fluid foodhunt' />
                            <p className='project_title'>FOODHUNT</p>
                        </a>
                    </div>
                    <div className="scroll">
                        <a href="">
                            <img src={PORTFOLIO} alt="" className='img-fluid foodhunt' />
                            <p className='project_title'>PORTFOLIO</p>
                        </a>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Project