import React from "react";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, graphql, useStaticQuery } from "gatsby";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import "./footerStyle.css";
import { BiPhone } from "react-icons/bi";
import {FaSquareXTwitter} from "react-icons/fa6";

const Footer = () => {
  const { cList, brand }: QueryResult = useStaticQuery(graphql`
    query {
      cList: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "curriculum" } } }
        sort: { fields: [frontmatter___name], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              name
              slug
            }
          }
        }
      }
      brand: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "about" } } }
      ) {
        edges {
          node {
            frontmatter {
              brand
              about
            }
          }
        }
      }
    }
  `);
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Curriculums</h3>
              <CurriculumsList data={cList}></CurriculumsList>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/executives">Executives</Link>
                </li>
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <BrandList data={brand}></BrandList>
            </div>
            <div className="col item social">
              <a href="#">
                <i className="icon ion-social-facebook">
                  <MdEmail></MdEmail>
                </i>
              </a>
              <a href="#">
                <i className="icon ion-social-twitter">
                  <AiFillInstagram />
                </i>
              </a>
              <a href="#">
                <i className="icon ion-social-snapchat">
                  <BiPhone></BiPhone>
                </i>
              </a>
              <a href="#">
                <i className="icon ion-social-instagram">
                  <FaSquareXTwitter></FaSquareXTwitter>
                </i>
              </a>
            </div>
          </div>
          <p className="copyright">Above & Beyond © {new Date().getFullYear()}</p>
          <p className="copyright">Designed and Developed by <a className="author" href="https://saifullahjailani.com/">Saifullah Jailani</a></p>
          </div>
      </footer>
    </div>
  );
};
export default Footer;

function CurriculumsList({ data }: any) {
  return (
    <ul>
      {data?.edges?.map(({ node }) => (
        <li key={node.frontmatter.slug}>
          <Link to={"/curriculum/" + node.frontmatter.slug}>
            {node.frontmatter.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function BrandList({ data }: any) {
  return (
    <>
      {data.edges?.map(({ node }) => (
        <div key={node.frontmatter.brand}>
          <h3 >{node?.frontmatter?.brand ?? "not found"}</h3>
          <p>{node?.frontmatter?.about ?? "not found"}</p>
        </div>
      ))}
    </>
  );
}

interface FrontMatter {
  name?: string;
  slug?: string;
  brnad?: string;
  about?: string;
}

interface Node {
  frontmatter: FrontMatter;
}

interface Edges {
  node: Node[];
}

interface AllMArks {
  allMarkdownRemark: Edges;
}

interface QueryResult {
  cList?: AllMArks;
  brand?: AllMArks;
}
