import React from 'react'
import './Qualification.css'
const Qualification = () => {
    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section_title">
                Qualification
            </h2>
            <span className="section_subtitle">
                My Qualification.
            </span>
            <div className="qualification_container container">
                <div class="timeline">
                    <div class="timeline-empty">
                    </div>

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h3>Ty Bsc(comp. science)</h3>
                        <p>R.B.N.B college Shrirampur</p>
                        <p>Year : 2022</p>
                        <p>Percentage : 82.41%</p>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h3>12th (HSC)</h3>
                        <p>New English School Chitali</p>
                        <p>Year : 2019</p>
                        <p>Percentage : 59.23%</p>
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-empty">
                    </div>

                    <div class="timeline-empty">
                    </div>

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class=" timeline-component timeline-content">
                        <h3>10th (SSC)</h3>
                        <p>New English School Chitali</p>
                        <p>Year : 2017</p>
                        <p>Percentage : 87.80%</p>

                    </div>

                </div>
            </div>
   </section >
  )
}

export default Qualification