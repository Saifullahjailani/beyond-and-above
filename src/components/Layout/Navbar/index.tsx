import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {FaBars} from "react-icons/fa";
import { Button } from '../../Button';

const Navbar = ({isMain}:{isMain: boolean}) => {
  const [color, setColor] = useState(false);
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
      <Bars></Bars>
      <NavMenu>
        {menuData.map((item : MenuItem, index) => (
          <NavLink to={item.link} key={index}>{item.title}</NavLink>
        ))}
      </NavMenu>
          <NavBtn>
            <Button to="/#curriculums" primary="true" round="true">Explore Curriculums</Button>
          </NavBtn>
    </Nav>
    </FixedDiv>
  )
}

export default Navbar;

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

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height 100%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    transform: scale(1.1) translate(0, 2px);
  }
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
  align-item: center;
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
  {title: "About", link: "/about"},
  {title: "Curriculums", link: "/curriculums"},
  {title: "Contact", link: "/contacts"},
] 