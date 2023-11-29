import { useContext } from 'react';
import logo from '../image/logo.png';
import { SectionContext } from '../context/SectionContext';

const Navbar = () => {
    const { sectionHome, sectionAbout, scrollToSection } = useContext(SectionContext);

    return (
        <div className="navbar">
            <nav>
                <div className='nav-logo'>
                    <img src={logo} alt='Logo' width={40} height={40} />
                </div>

                <div className='nav-link'>
                    <a onClick={(e) => {scrollToSection(e, sectionHome)}} href='#'>Home</a>
                    <a onClick={(e) => {scrollToSection(e, sectionAbout)}} href='#'>About</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;