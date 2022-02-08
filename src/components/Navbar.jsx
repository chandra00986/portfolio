import React, { useState } from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png';
import {GiHambergerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 12rem;
  padding-top: 2rem;
  .brand__container {
    marign: 0 2rem;
    .toggle{
      display: none;
    }
  }
  .links{
    ul{      
      list-style-type: none;
      display: flex;
      gap: 3rem;
      
      .active{
        a{
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }

      li{
        a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
`;

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return(
    <Nav>
      <div className="brand__container">
        <a href="#" className='brand'>
          <img src={logo} alt="logo" />
        </a>
        <div className="toggle"></div>
      </div>
      <div className="links">
        <ul>
          <li className='active'>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#porfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  )
};

export default Navbar;
