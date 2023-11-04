import { GatsbyLinkProps, Link } from "gatsby";
import styled from "styled-components";
import { ReactNode } from "react";
import React from "react";


interface ButtonProps {
  primary?: boolean;
  big?: boolean;
  round?: boolean;
  to: string;
}

export interface CustomLinkProps {
  children: ReactNode;
  to: string;
  primary?: string;
  big?: string;
  round?: string;
  css?: any
}

const CustomLink = ({ children, to, ...props } : CustomLinkProps) => {
  return <Link to={to} {...props}>{children}</Link>;
};
export const Button = styled(CustomLink)<CustomLinkProps>`
  background: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};
  z-index: 10;
  &:hover {
    background: ${({ primary }) => (primary ? "#077BF1" : "#F26A2E")};
    transform: translateY(-2px);
  }
`;
