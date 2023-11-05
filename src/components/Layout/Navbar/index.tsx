
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {FaBars} from "react-icons/fa";
import { Button } from '../../Button';
import "./nav.css"
import { Link } from 'gatsby';
import NavLink from './NavLink';


const Navbar = ({isMain}:{isMain: boolean}) => {
  const [color, setColor] = useState(false);
  const [mobileMode, setMobileMode] = useState(false);
  const toggle = () => {
    console.log("clicked");
    setMobileMode(!mobileMode);
  }
  const handleColor = () => {
    if(window.scrollY > 80){
      setColor(true);
    } else{
      setColor(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleColor);
    return () => {
      window.removeEventListener('scroll', handleColor);
    }

  }, [])
  

  return (
    <FixedDiv>
      
    <Nav backgroundcolor={(color || isMain) ? "#282d32" : "transparent"}>
    
      <NavLink to="/" >Above&Beyond</NavLink>
      <Bars onClick={()=>{setMobileMode(!mobileMode)}}></Bars>
      <NavMenu>
        {menuData.map((item : MenuItem) => (
          <NavLink to={item.link} key={item.link}>{item.title}</NavLink>
        ))}
      </NavMenu>
          <NavBtn>
            <Button to="/contacts/#contact_form" primary="true" round="true">Contact Us</Button>
          </NavBtn>
    </Nav>
    <BurgerMenu activate={mobileMode} dispatch={toggle} />
    </FixedDiv>
  )
}

export default Navbar;


function BurgerMenu({activate, dispatch}: {activate?: boolean, dispatch?: ()=> void}) {

  return <MenuPhone style={{left: activate ? "0" : "-150vw"}}>
    {menuData.map((item : MenuItem, index) => (
          
            <NavLink handler={dispatch} to={item.link} key={item.link}>{item.title}</NavLink>
          
          
        ))}
        <Button onClick={(e) => {if(dispatch){dispatch()}}} to="/contacts/#contact_form" primary="true" round="true">Contact Us</Button>
  </MenuPhone>
}

const MenuPhone = styled.div`
  background-color: #282d32;
  height: 100vh;
  width: 100vw;
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  row-gap: 20px;
  transition: transform 0.5s ease;
`

const FixedDiv = styled.div`
  position: sticky;
  height: 80px;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 100;
`
interface NavProps {
  backgroundcolor?: string;
}
const Nav = styled.nav<NavProps>`
background: ${props => props.backgroundcolor || "transparent"};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100w-1300px)/2);
  z-index: 100;
  position: relative;
`


const Bars = styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width: 768px){
  display: block;
  display: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
}
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display: none;

  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export interface MenuItem {
  title: string
  link: string
}

export const menuData: MenuItem[] = [
  {title: "Home", link: "/"},
  {title: "About", link: "/about/"},
  {title: "Curriculums", link: "/curriculums/"},
  {title: "Contact", link: "/contacts/"},
] 