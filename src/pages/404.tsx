import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../components/Layout/DefaultLayout"
import styled  from "styled-components"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Container>
      <DefaultLayout isMain>
    <ErrorCode>
      404
    </ErrorCode>
    <ErrorText>
      Page Not Found
    </ErrorText>
    <ErrorInst to="/">Proceed to website</ErrorInst>

    </DefaultLayout>

    
    </Container>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>


const Container = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

`

const ErrorCode = styled.p`
  font-size: 15vw;
  text-align: center;
`

const ErrorText = styled.p`
font-size: 7vw;
text-align: center;
`

const ErrorInst = styled(Link)`
  font-size: 7vw;
  text-align: center;
`