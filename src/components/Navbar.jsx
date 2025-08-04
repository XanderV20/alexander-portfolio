import { AlignJustify } from "lucide-react";
import { useState, useEffect } from "react";
import resume from "/resume.pdf";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = (openState) => {
        setIsOpen(openState);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">

                {/* Desktop nav */}
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href={resume} target="blank" rel="noopener noreferrer">Resume</a>
                </div>

                {/* Mobile nav */}
                <div className="mobile-nav">
                    <AlignJustify className="tab-icon" onClick={() => toggleMenu(true)} style={{display: isOpen ? "none" : "inherit"}}/>
                </div>
            </div>

            <div className="mobile-nav-screen" style={{display: isOpen ? "flex" : "none"}}>
                <button className="close-button" onClick={() => toggleMenu(false)} style={{display: isOpen ? "inherit" : "none"}}>X</button>
                <div className="nav-links">
                    <a href="#about" onClick={() => toggleMenu(false)}>About</a>
                    <a href="#projects" onClick={() => toggleMenu(false)}>Projects</a>
                    <a href={resume} target="blank" rel="noopener noreferrer" onClick={() => toggleMenu(false)}>Resume</a>
                </div>
            </div>
        </nav>
    )
}