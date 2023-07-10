import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './Ptext';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Arnish Bhardwaj</h1>
          <PText>
            A web and Blockchain developer from Bengaluru, India. I create
            professional websites.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91 7892389386',
                path: 'tel:+91 7892389386',
              },
              {
                title: 'arnishb86532@gmail.com',
                path: 'mailto:arnishb86532@gmail.com',
              },
              {
                title: 'Vidyaranyapura, Bengaluru, India',
                path: 'https://www.google.com/maps/place/Vidyaranyapura,+Bengaluru,+Karnataka/@13.0812816,77.520381,13z/data=!3m1!4b1!4m5!3m4!1s0x3bae229f7a8debe1:0x4d80f1d259c7e7ac!8m2!3d13.0810718!4d77.5561667',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'CV',
                path: 'https://drive.google.com/file/d/13e8Pb4yjw6nAnkxSHB12pXWa_fFdUano/view?usp=sharing',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/arnish-bhardwaj-a93051202/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/DominusMoris',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/arnishhhhhhh/',
              },
              {
                title: 'Medium',
                path: 'https://medium.com/@arnish',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2023 - Arnish Bhardwaj - All Rights Reserved</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
