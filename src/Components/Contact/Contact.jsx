import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <section className="section_subtitle">Contact Me</section>
      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk To ME</h3>
          <div className="contact_info">


            <div className="contact_card">
              <i class="fa-solid fa-envelope contact_card-icon"></i>
              <h3 className="contact_card-title">Mail</h3>
              <span className="contact_card-data">shaikharbaj2001@gmail.com</span>
              <a href="mailto:shaikharbaj2001@gmail.com" className="contact_button">
                Write Me{" "}
                <i class="fa-solid fa-right-to-bracket contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i class="fa-brands fa-linkedin contact_card-icon"></i>
              <h3 className="contact_card-title">LinkedIn</h3>
              <span className="contact_card-data">ARBAJ SHAIKH</span>
              <a href="https://www.linkedin.com/in/arbaj-dilip-shaikh/" className="contact_button">
                Write Me{" "}
                <i class="fa-solid fa-right-to-bracket contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i class="fa-brands fa-instagram contact_card-icon"></i>
              <h3 className="contact_card-title">Instagram</h3>
              <span className="contact_card-data">@arbaj_1147</span>
              <a href="https://www.instagram.com/arbaj_1147/" className="contact_button">
                Write Me{" "}
                <i class="fa-solid fa-right-to-bracket contact_button-icon"></i>
              </a>
            </div>


          </div>
        </div>
        <div className="contact_content">
              <h3 className="contact_title">Write Me Your Project</h3>
              <form action="" className="contact_form">

                   <div className="contact_form-div">
                      <label htmlFor="" className="contact_form-tag">Name</label>
                      <input type="text" 
                      name="name"
                      className="contact_form-input"
                      placeholder="Insert Your Name" />
                   </div>

                   <div className="contact_form-div">
                      <label htmlFor="" className="contact_form-tag">Mail</label>
                      <input type="email" 
                      name="email"
                      className="contact_form-input"
                      placeholder="Insert Your Email" />
                   </div>

                   <div className="contact_form-div contact_form-area">
                      <label htmlFor="" className="contact_form-tag">Project</label>
                      <textarea type="text" 
                      name="project"
                      className="contact_form-input "
                      placeholder="Write Your Project...." />
                   </div>
                   <button className="button button-flex">
                       Send Message<i className="fa-regular fa-paper-plane" style={{marginLeft:".5rem"}}></i>
                   </button>
              </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
