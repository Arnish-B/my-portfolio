import React from 'react';
// import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import { DiCss3, DiNodejs } from 'react-icons/di';
import { FaAws, FaDocker, FaJava, FaPython, FaBootstrap } from 'react-icons/fa';

import {
  SiTailwindcss,
  SiJavascript,
  // SiMaterialui,
  SiEthereum,
  SiWeb3Dotjs,
  SiReact,
  SiMongodb,
  SiSolidity,
  SiRedux,
} from 'react-icons/si';

import { AiOutlineHtml5, AiOutlineAntDesign } from 'react-icons/ai';

import { GrGatsbyjs } from 'react-icons/gr';

import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10rem;
    /* justify-content: space-between; */
    margin-top: 5rem;
  }
  @media only screen and (max-width: 1000px) {
    .services__allItems {
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 700px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  return (
    <ServicesItemsStyles
      ref={ref}
      className={`hero-section ${isVisible ? 'animation-class' : ''}`}
    >
      <div className="container">
        <SectionTitle subheading="What i can do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem icon={<AiOutlineHtml5 />} title="HTML" />
          <ServicesSectionItem icon={<DiCss3 />} title="CSS" />
          <ServicesSectionItem icon={<SiTailwindcss />} title="TailwindCSS" />
          <ServicesSectionItem icon={<FaBootstrap />} title="Bootstrap" />
          <ServicesSectionItem icon={<SiJavascript />} title="Javascript" />
          <ServicesSectionItem
            icon={<AiOutlineAntDesign />}
            title="AntDesign"
          />
          <ServicesSectionItem icon={<SiReact />} title="ReactJS" />
          <ServicesSectionItem icon={<SiMongodb />} title="MongoDB" />
          <ServicesSectionItem icon={<SiEthereum />} title="Ethereum" />
          <ServicesSectionItem icon={<DiNodejs />} title="nodeJS" />
          <ServicesSectionItem icon={<FaAws />} title="AWS" />
          <ServicesSectionItem icon={<FaJava />} title="Java" />
          <ServicesSectionItem icon={<FaPython />} title="Python" />
          <ServicesSectionItem icon={<FaDocker />} title="Docker" />
          <ServicesSectionItem icon={<SiSolidity />} title="Solidity" />
          <ServicesSectionItem icon={<SiWeb3Dotjs />} title="Web 3.0" />
          <ServicesSectionItem icon={<SiRedux />} title="Redux" />
          <ServicesSectionItem icon={<GrGatsbyjs />} title="GatsbyJS" />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
