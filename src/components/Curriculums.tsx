import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import {BiTime} from "react-icons/bi";
import { Button } from "./Button";

const Curriculums = () => {
  const data: RetType = GetCurriculums();
  return (
    <ProductsContainer>
      <ProductsHeading>Curriculums</ProductsHeading>
      <ProductWrapper>{GetCurriculumsImage(data)}</ProductWrapper>
    </ProductsContainer>
  );
};

export default Curriculums;

function GetCurriculumsImage(data: RetType){
  const _curriculums: JSX.Element[] = []
  data.allMarkdownRemark.nodes.forEach((item, index:number) => (
    _curriculums.push(
      <ProductCard key={item.frontmatter.slug}>
        <ProductImage image={item.frontmatter.imgName.childImageSharp.gatsbyImageData} alt={item.frontmatter.alt}></ProductImage>
        <ProductInfo>
          <TextWrap>
            <ProductTitle>{item.frontmatter.name}</ProductTitle>
            <DurationContainer>
            <TimeIcon/>
            <ProductDuration>{item.frontmatter.Duration} {item.frontmatter.Specifier}</ProductDuration>
            </DurationContainer>
            </TextWrap>
          <Button primary="true" round="true" css={`position: absolute; bottom: 8%; left:10%; font-size: 18px`} to={`/curriculum/${item.frontmatter.slug}`}>{item.frontmatter.button}</Button>
        </ProductInfo>
      </ProductCard>
    )
  ))
  return _curriculums;
}
 
const TimeIcon = styled(BiTime)`
  font-size: 1.5rem;
`

const DurationContainer = styled.div`
display: flex;
align-items: center;
flex: start;
`
 

const ProductCard = styled.div`
line-height: 2;
width: 100%;
position: relative;
border-radius: 10px;
transition: 0.2s ease;

`
const ProductImage = styled(GatsbyImage)`
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: relative;
  &:hover{
    filter: brightness(100%);
  }
  
`
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem

  @media screen and (max-width: 280px){
    padding: 0 1rem
  }
`
const TextWrap = styled.div`
display: flex;
flex-direction:column;
align-items: center;
position: absolute;
top: 60%;
padding-left: 3%;
padding-right: 4%;
`
const ProductDuration = styled.div`
font-weight: 400;
font-size: 1.5rem;
margin-left: 0.5rem;
`

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: transparent;
  color: #fff;
`;
const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`;


const ProductWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
justify-items: center;
padding: 0 2rem;

@media screen and (max-width: 1200px) {
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 868px) {
  grid-template-columns: 1fr;
}
`;
const ProductTitle = styled.h2`
max-width: 100%;
top: 0;
align-items: flex-start;
`
const GetCurriculums = () =>
  useStaticQuery(graphql`
query {
  allMarkdownRemark(
    filter: {frontmatter: {category: {eq: "curriculum"}}}
    sort: {frontmatter: {tag: ASC}}
  ) {
    nodes {
      frontmatter {
        Duration
        Specifier
        alt
        button
        name
        slug
        imgName {
          childImageSharp {
            gatsbyImageData(blurredOptions: {toFormat: JPG})
          }
        }
      }
    }
  }
}
  `);

type FrontMatterType = {
  Duration: number;
  Specifier: string;
  alt: string;
  button: string;
  name: string
  slug: string
  imgName: {
    childImageSharp: {
      gatsbyImageData: any;
    };
  };
};

interface RetType {
  allMarkdownRemark: {
    nodes: {
      frontmatter: FrontMatterType;
    }[]
  };
}
