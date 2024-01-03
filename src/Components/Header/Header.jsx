import { useState } from "react";
import "./Header.css";

const Header = () => {

   //change the color of header when we scroll
   window.addEventListener('scroll',function(){
        const header = document.querySelector(".header");
        if(this.scrollY>80)
        {
            header.classList.add('scroll-header')
        }else{
              header.classList.remove("scroll-header");
            }
   })


    const [Toggle,showMenu] = useState(false);
    const [activeLink,setActiveLink]=useState('#home');
    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <a href="" className="nav_logo">
                        PORTFOLIO
                    </a>
                    <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
                        <ul className="nav_list grid">
                           

                            <li className="nav_item">
                                <a href="#home" className={activeLink==="#home"?"nav_link active_link":"nav_link"} onClick={()=>setActiveLink('#home')}>
                                    <i className="fa-solid fa-house nav_icon"></i>Home
                                </a>
                            </li>

                            <li className="nav_item">
                                <a href="#about" className={activeLink==="#about"?"nav_link active_link":"nav_link"}>
                                    <i className="fa-solid fa-house nav_icon" onClick={()=>setActiveLink('#about')}></i>About
                                </a>
                            </li>

                            <li className="nav_item">
                                <a href="#skills" className={activeLink==="#skills"?"nav_link active_link":"nav_link"}>
                                    <i className="fa-solid fa-file-lines nav_icon" onClick={()=>setActiveLink('#skills')}></i>Skills
                                </a>
                            </li>
 
                            <li className="nav_item">
                                <a href="#qualification" className={activeLink==="#qualification"?"nav_link active_link":"nav_link"}>
                                    <i className="fa-solid fa-user nav_icon" onClick={()=>setActiveLink('#qualification')}></i>Qualification
                                </a>
                            </li>

                            

                            <li className="nav_item">
                                <a href="#projects" className={activeLink==="#project"?"nav_link active_link":"nav_link"}>
                                    <i className="fa-solid fa-file-lines nav_icon" onClick={()=>setActiveLink('#project')}></i>Projects
                                </a>
                            </li>

                            <li className="nav_item">
                                <a href="#contact" className={activeLink==="#contact"?"nav_link active_link":"nav_link"}>
                                    <i className="fa-solid fa-address-book nav_icon" onClick={()=>setActiveLink('#contact')}></i>Contact
                                </a>
                            </li>

                            <i className="fa-solid fa-xmark nav_close" onClick={()=>showMenu(!Toggle)}></i>
                        </ul>
                    </div>
                    <div className="nav_toggle" onClick={()=>showMenu(!Toggle)}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
