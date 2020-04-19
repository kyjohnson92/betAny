import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbarLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 60px;
  background-color: #ccc;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #aaa;
  }

  &:active {
    box-shadow: inset 4px 4px 5px #a0a0a0;
    font-size: 0.95em;
  }
`;

export const NavbarLink = ({ to, title }) => {
  return <StyledNavbarLink to={to}>{title}</StyledNavbarLink>;
};
