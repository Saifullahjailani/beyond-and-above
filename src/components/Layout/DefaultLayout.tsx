import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { GlobalStyle } from '../styles/GlobalStyles'

type Prop = {
  children?: ReactNode;
  isMain?: boolean;
}

const DefaultLayout = ({children, isMain} : Prop) => {
  return (
    <>  
    <GlobalStyle />
      <Navbar isMain={isMain ?? false}/>
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout;