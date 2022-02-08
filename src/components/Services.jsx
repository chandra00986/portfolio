import React from 'react';
import styled from 'styled-components';
import service1 from 'assets/service1.png';
import service2 from 'assets/service2.png';
import service3 from 'assets/service3.png';
import play from 'assets/play.png';
import Title from './Title';

const Services = () => {
  const data = [
    {
      type: "Design",
      text: "Bearable only through love of hydrogen atoms bits of moving fluff culture shores of the on cosmic ocean blue sky.",
      img: service1,
    },
    {
      type: "Code",
      text: "Global death rich in heavy with pretty stories for which is on there's little good evidencesomething incredible sea.",
      image: service2,
    },
    {
      type: "Support",
      text: "Evidence something incrediblewaiting to be known not a sunbut a galaxyrise shores of thecosmic mountian peak.",
      image: service3,
    },
    
  ];
  return (
    <Section id='services'>
      <Title value='services'/>
      <div className="services">
        {
          data.map(({type, text, img}, index) => {
            return (
              <div className="services__service">
                <div className="services__service__image">
                  <img src={img} alt="Service" />
                </div>
              </div>
            )
          })
        }
      </div>
    </Section>
  )
};

const Section = styled.section`
`;

export default Services;
