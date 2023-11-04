import React from 'react'
import styled from 'styled-components'
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const ContactForm = () => {
  return (
    <main>
<Container className='container md'>
        <ContainerElemLeft>
            <FormTitle>Contact Us!</FormTitle>
        </ContainerElemLeft>
        <ContainerElemRight>
            h
        </ContainerElemRight>
    </Container>
    </main>
    
  )
}

export default ContactForm


const Container = styled.div`
  min-height: calc(100vh - 80px);
  padding: 5rem calc((100vw - 1300px) / 2);
  background: transparent;
  color: #fff;
  margin-bottom: 5vh;
  position: relative;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 868px) {
    flex-direction: column-reverse;;
    min-height: auto;
  }
`;

const ContainerElemLeft = styled.div`
    background: #272a34;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 4% 5%;
`
const ContainerElemRight = styled(ContainerElemLeft)`
    background-color: #1c1e25;
`

const InputFields = styled.input`

`

const FormTitle = styled.p`

`