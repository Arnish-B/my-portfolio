import React from 'react';
import styled from 'styled-components';
// import { SiTailwindcss } from 'react-icons/si';
import PText from '../components/Ptext';
// import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
// import resume from

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      height: 70vh;
      width: 90%;
      margin-left: 3rem;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Arnish Bhardwaj</span>
              </p>
              <h2 className="about__heading">
                A fullstack Blockchain developer
              </h2>
              <div className="about__info">
                <PText>
                  I'm Arnish, from Bengaluru, and I work as a freelance web and
                  blockchain engineer. I enjoy developing web applications and
                  learning new technologies. I have spent the previous two years
                  investigating numerous web sites development and have been
                  doing the same with web 3.0 technologies.
                  <br /> <br />
                  I began coding in high school. Since then, I've refined my
                  programming abilities and am now a full-stack Blockchain
                  engineer. I work with cutting-edge technology. frameworks for
                  developing safe blockchain apps based on the MERN and Ethereum
                  stack. I am also an AWS certified solutions architect.
                  <br />
                  <br />
                  My goal is to help make the world a better place. Building
                  blockchain fullstack apps allows users to complete tasks in a
                  completely safe manner.
                  <br />
                  <br /> Outside my work time I am a standup enthusiast and a
                  basketball player, I also love playing chess from time to
                  time.
                </PText>
              </div>
              {/* <Button
                btnText="Open CV"
                btnLink="https://drive.google.com/file/d/1hWd5g2CkdeAbLhoMUBb_t_NER1k2LCL8/view?usp=sharing"
              /> */}
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="High-School"
                items={['National Public School , Bengaluru']}
              />
              <AboutInfoItem
                title="B.Tech"
                items={['Vellore Institute of Technology, Vellore']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>
              <AboutInfoItem
                title="Certifications"
                items={['AWS Certified Solutions Architect']}
              />
              <AboutInfoItem
                title="FrontEnd"
                items={['JavaScript', 'REACTJS', 'REDUX', 'NextJS']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['AWS', 'Node', 'MongoDB', 'MySQL']}
              />
              <AboutInfoItem
                title="Blockchain"
                items={['Solidity', 'web 3.0', 'Ethereum']}
              />
              <AboutInfoItem
                title="Languages"
                items={['JAVA', 'C++', 'C', 'Python']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2021"
                items={['Freelance Web and BlockChain Developer']}
              />
              <AboutInfoItem
                title="2021"
                items={['Front-end Developer for Uninets']}
              />
              <AboutInfoItem
                title="2022"
                items={['Front-end Developer for Trademarkia']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
