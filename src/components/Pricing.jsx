import React, { Fragment } from 'react';
import styled from 'styled-components';
import play from '.assets/play.png';
import pricing1 from '.assets/pricing.png';
import pricing2 from '.assets/pricing2.png';


const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 9,
    },
    {
      name: 'Pro',
      price: 29,
    },
    {
      name: 'Expert',
      price: 49,
    },
    
  ];
  const data = [
    {
      value: "25 Users per Project",
      type: "Basic",
    },
    {
      value: "100 Projects",
      type: "Basic",
    },
    {
      value: "10 TB Cloud Storage",
      type: "Basic",
    },
    {
      value: "50 Reports",
      type: "Basic",
    },
    {
      value: "100 GB Bandwidth",
      type: "Basic",
    },
    {
      value: "50 Support Tickets",
      type: "Basic",
    },
    {
      value: "Online Support",
      type: "Pro",
    },
    {
      value: "Daily Backup",
      type: "Pro",
    },
    {
      value: "Priority Assistance",
      type: "Expert",
    },
    {
      value: "One Click Setup",
      type: "Expert",
    },
  ];
  return (
    <Section value="pricing">
      <div className="background"> 
        <img src={pricing1} alt="Design"  className='bg1'/>
        <img src={pricing2} alt="Design"  className='bg2'/>
      </div>
      <div className="pricing__title">
        <p>Find your pricing plan</p>
        <h2>With pretty stories for which there is little good evedence</h2>
      </div>
      <div className="pricing">
        {plans.map(({name, price}, index) => {
            return(
              <div className="pricing__plan" key={index}>
                <div className="pricing__plan__name">
                  <h2>{name}</h2>
                  <div className="pricing__plan__name__price">
                    <span>$</span>
                    <p>{price}</p>
                  </div>
                </div>
                <div className="pricing__plan__content">
                  <ul className={`pricing__plan__content__feature ${name}`}>
                    {data.map(({value, type}, index2) =>{
                      return(
                        <Fragment key={index2}>
                        {name === "Basic" ? (
                          type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className="line">{value}</li>
                          )
                        ) : name === "Pro" ? (
                          type === "Basic" || type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className="line">{value}</li>
                          )
                        ) : (
                          name === "Expert" && <li>{value}</li>
                        )}  
                        </Fragment>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
        })}
      </div>
    </Section>
  )
};

const Section = styled.section`

`;

export default Pricing;
