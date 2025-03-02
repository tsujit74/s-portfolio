import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../Navbar/navbar.css';

const Navbar = () => {
    // State to manage sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Close sidebar when clicking a link
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {/* Navbar (Fixed Top) */}
            <nav className="navbar">
                <div className="container">
                    {/* Logo Section */}
                    <div>
                        <Link className="navbar-brand" to="home" smooth={true} duration={500}>
                            <strong>『Ｓ𝕦𝕛𝕚𝕥<span>⫷𝕿𝖍𝖆𝖐𝖚𝖗⫸</span></strong>
                        </Link>
                    </div>

                    {/* Navbar Toggle Button for Mobile */}
                    <div>
                        <button className="navbar-toggler" onClick={toggleSidebar}>
                            ☰
                        </button>
                    </div>
                </div>

                {/* Navbar Links (Desktop) */}
                <ul className="nav-links">
                    <li><Link to="home" smooth={true} duration={500} onClick={closeSidebar} activeClass="active">Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500} onClick={closeSidebar} activeClass="active">About Me</Link></li>
                    <li><Link to="skills" smooth={true} duration={500} onClick={closeSidebar} activeClass="active">Skills</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} onClick={closeSidebar} activeClass="active">Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} onClick={closeSidebar} activeClass="active">Contact</Link></li>
                </ul>
            </nav>

            {/* Sidebar (Mobile) */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>&times;</button>
                <ul className="sidebar-links">
                    <li><Link to="home" smooth={true} duration={500} onClick={closeSidebar}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500} onClick={closeSidebar}>About Me</Link></li>
                    <li><Link to="skills" smooth={true} duration={500} onClick={closeSidebar}>Skills</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} onClick={closeSidebar}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} onClick={closeSidebar}>Contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
