import { useContext } from "react";
import { SectionContext } from "../context/SectionContext";
import Feature from "./Feature";

const About = () => {
    const {sectionAbout} = useContext(SectionContext);
    const silentBreakerDesc = 'Let the phone ring for urgent calls even if the phone is in silent mode';
    const specialNumberDesc = 'Let the ringtone be played for some special numbers regardless of the sound profile';
    const mutedNumberDesc = 'Ignore unwanted calls without letting them knowing';
    const silentSchedulerDesc = 'Schedule silent modes beforehand as per your preference';

    return (
        <div ref={sectionAbout} className="about-section">
            <h2>Features</h2>
            <p>The app was originally intended to increase focus on productivity by avoiding distraction caused by managing silent profile</p>
            <div className="feature-cards">
                <Feature name='Silent Breaker' description={silentBreakerDesc}/>
                <Feature name='Special Number' description={specialNumberDesc}/>
                <Feature name='Muted Number' description={mutedNumberDesc}/>
                <Feature name='Silent Scheduler' description={silentSchedulerDesc}/>
            </div>
        </div>
    );
}
 
export default About;