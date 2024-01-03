import "./About.css";
import image from '../../assets/about.png';
import Info from "./Info";
const About = () =>{
      return(
        <>
            <section className="about section" id="about">
                  <h2 className="section_title">About Me</h2>
                  <span className="section_subtitle">My introduction</span>
                  <div className="about_container container grid">
                       <img src={image} alt="" className="about_img"/>
                       <div className="about_data">
                            <Info/>
                            <p className="about_description">
                                My Name is Shaikh Arbaj Dilip. I am From Shirdi . I did my graduation in BSC(computer Science) from Pune University at R.B.N.B College Shrirampur. And I Completed My Full Stack web Development Course From Bitcode Technologies Pune.
                            </p>
                            <a href="" className="button button--flex">Download My Resume. <i class="fa-solid fa-download"></i></a>
                       </div>
                  </div>
            </section>
        </>
      )
}
export default About;