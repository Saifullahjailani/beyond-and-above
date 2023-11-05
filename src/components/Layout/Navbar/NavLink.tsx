import { Link } from 'gatsby'
import React, { ReactNode, useEffect, useState } from 'react'
import "./nav.css";
import { useLocation } from '@reach/router';

type MyFunctionType = () => void;
const NavLink = ({to, children, handler}:{to:string, children:ReactNode, handler?: MyFunctionType}) => {    
    const [isActive, setActive] = useState(false);
    const location = useLocation();

    const handleScrollActive = () => {
        // Todo: use redux for this part to create a centralized state where you turn other to not active
    }
      useEffect(() => {
        if(to == location.pathname){
            setActive(true);
        } else {
            setActive(false);
        }
        addEventListener('scroll', handleScrollActive);
        return(()=> removeEventListener('scroll', handleScrollActive));
    }, [location.pathname]);
    
    return (
    <Link onClick={(e) => {
      if(handler){
        handler();
      }
    }
      
    
    } className={isActive ? "nav-link active-link" : "nav-link"}  to={to}>{children}</Link>
  )
}

export default NavLink


