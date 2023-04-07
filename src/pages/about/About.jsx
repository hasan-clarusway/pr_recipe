import { AboutContainer, InfoContainer,StyledImage } from './About.style';
import doodle from '../../assets/doodle.webp';

const About = () => {
  return (
     <AboutContainer>
        <StyledImage src={doodle} />      
        <div>
           <h1>
              About Software Developer <span>Robert Cook</span>
           </h1> 
        </div>
        <InfoContainer>
           <h2>Hi, I'm Robert</h2>
           <h3>I’m currently learning Full-Stack Development Languages.</h3>
           <h4>
           I've already known JS, ReactJS, NodeJS, SQL, Python, GitHub, Agile, Jira.
          </h4>
          <h2>
            <a href="mailto:robert.cook@clarusway.com">Send Email</a>
             robert.cook@clarusway.com
          </h2>
        </InfoContainer>
    </AboutContainer>
  );
};

export default About;