import { useContext } from 'react';
import ssBreaker from '../image/breaker.png';
import ssScheduler from '../image/schedule.png';
import { SectionContext } from '../context/SectionContext';

const Home = () => {
    const { sectionHome, sectionAbout, scrollToSection } = useContext(SectionContext);

    return (
        <div ref={sectionHome} className="home-section">
            <div className="home-content">
                <div className="home-text">
                    <h1>Silent Breaker and Scheduler</h1>
                    <p>Make your life simple by automating the audio profiles.</p>
                    <div className="home-button">
                        <a href="http://play.google.com/store/apps/details?id=com.mahfuz.silentBreakerScheduler" className="btn-download">Download Now</a>
                        <a onClick={(e) => scrollToSection(e, sectionAbout)} href="#" className="btn-about">About App</a>
                    </div>
                </div>
                <div className="home-screenshot">
                    <img id='ss-breaker' src={ssBreaker} width={350} height={622} />
                    <img id='ss-scheduler' src={ssScheduler} width={350} height={622} />
                </div>
            </div>
        </div>
    );
}

export default Home;