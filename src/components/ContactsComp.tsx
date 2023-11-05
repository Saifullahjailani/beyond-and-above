import React, { ReactNode, useState } from "react";
import styled, { IStyledComponent } from "styled-components";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { TextField, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";
import { graphql, useStaticQuery } from "gatsby";
import "./styles/contacts.css";
import ContactForm from "./ContactForm";
interface Address {
  street_address_1: string;
  street_address_2: string;
  city: string;
  zip: number;
  country: string;
  state: string;
}

interface FrontMatter {
  brand: string;
  emails: string[];
  instagrams: string[];
  twitters: string[];
  webs: string[];
  phones: string[];
  address: Address;
}

const ContactsComp = () => {

  const { markdownRemark } = useStaticQuery(graphql`
    query GetContactInfo {
      markdownRemark(frontmatter: { category: { eq: "contacts" } }) {
        frontmatter {
          address {
            city
            country
            street_address_1
            street_address_2
            zip
            state
          }
          brand
          emails
          instagrams
          twitters
          webs
          phones
        }
      }
    }
  `);
  const {
    brand,
    emails,
    instagrams,
    twitters,
    webs,
    phones,
    address,
  }: FrontMatter = markdownRemark.frontmatter;

  return (
      <Container className="container md">
        <ContactForm />
        <ContainerElemRight>
          <InfoBox>
            <FormTitle>Contact Us</FormTitle>
            <Disclaimer>
              We value your feedback, questions, and thoughts. At{" "}
              {brand ?? "No Brand"}, we're committed to providing exceptional
              service and support. If you have any inquiries, require
              assistance, or simply want to get in touch, please don't hesitate
              to reach out to us. Our dedicated team is here to assist you
            </Disclaimer>
          </InfoBox>
          {address && (
            <LogoInfoContainer>
              <ImLocation className="simpleLogo" />
              <SubField>
                {brand && <FieldsBox>{brand}</FieldsBox>}
                <FieldsBox>{address.street_address_1}</FieldsBox>
                <FieldsBox>{address.street_address_2}</FieldsBox>
                <FieldsBox>
                  {address.city}, {address.zip} {address.state}
                </FieldsBox>
                <FieldsBox>{address.country}</FieldsBox>
              </SubField>
            </LogoInfoContainer>
          )}
          
          <SubFieldsContact fields={emails}>
          <MdEmail className="simpleLogo" />  
          </SubFieldsContact>

          <SubFieldsContact fields={instagrams}>
          <AiFillInstagram className="simpleLogo"/>  
          </SubFieldsContact>

          
          <SubFieldsContact fields={phones}>
          <BsFillTelephoneFill className="simpleLogo"/>  
          </SubFieldsContact>
          
          <SubFieldsContact fields={twitters}>
          <FaSquareXTwitter className="simpleLogo"/>  
          </SubFieldsContact>
            
          <SubFieldsContact fields={webs}>
          <BsGlobe2 className="simpleLogo"/>  
          </SubFieldsContact>

        </ContainerElemRight>
      </Container>
  );
};

export default ContactsComp;



function SubFieldsContact({children, fields} : Readonly<{fields: string[], children: ReactNode}>){
  return(
    <>
    {fields && (
            <LogoInfoContainer>
              {children}
              <SubField>
                {fields.map((email) => (
                  <FieldsBox key={email}>{email}</FieldsBox>
                ))}
              </SubField>
            </LogoInfoContainer>
          )}
          
    </>
  )
}


const SubField = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
`;

const LogoInfoContainer = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  gap: 20px;
`;

const InfoBox = styled.div``;

const FieldsBox = styled.p`
  color: black;
  margin: 0;
`;

const Disclaimer = styled.p`
  color: black;
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;



const Container = styled.main`
  min-height: calc(100vh - 80px);
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  margin-bottom: 5vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 868px) {
    display: flex;
    flex-direction: column-reverse;
    min-height: auto;
  }

  @media screen and (min-width: 868px) {
    column-gap: 10rem;
  }
`;

const ContainerElemRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4% 5%;
  row-gap: 1rem;
  border-radius: 10px;
`;


const FormTitle = styled.h2`
  color: black;
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
