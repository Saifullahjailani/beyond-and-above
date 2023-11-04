import * as React from "react"
import styled from 'styled-components'
import { Button } from './Button'
import { graphql, useStaticQuery } from "gatsby"

const Hero = () => {
    const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "videos" }, name: { regex: "/^hero-video/i" } }
      ) {
        nodes {
          publicURL
        }
      }
    }
  `)
  const url = data?.allFile?.nodes[0]?.publicURL;
  
  return (
    <HeroContainer id="home">
        <HeroBg>
            <Overlay />
            <VideoBg src={url} autoPlay loop muted playsInline></VideoBg>
        </HeroBg>
        <HeroContent>
            <HeroItems>
                <HeroH1>Above & Beyond</HeroH1>
                <HeroP>Where Language Knows No Bounds</HeroP>
                <Button to='curriculums' primary="true" big="true" round="true">Curriculums</Button>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero



const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    color: #fff;
    position: relative;
`;

const HeroBg = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;

`

const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    font-width: bold;
    padding: 0 1rem;
`
const HeroP = styled.p`
font-size: clamp(1rem, 3vw, 3rem);
margin-bottom: 2rem;
font-weight: 400;
`

const HeroContent = styled.div`
z-index: 10;
height: calc(100vh - 80px);
max-height: 100%;
padding: 0rem calc((100vw - 1300px)/2);
`
const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-width: bold;

`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Adjust the background color and opacity as needed */
    z-index: 1;
`;