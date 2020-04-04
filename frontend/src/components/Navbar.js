import React from 'react';
import { NavbarLink } from './NavbarLink';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #eee;
`;

export const Navbar = () => {
  const routes = [
    { to: '/my-bets', title: 'My Bets' },
    { to: '/all-bets', title: 'All Bets' },
    { to: '/test', title: 'Test' },
  ]
  return (
    <NavbarWrapper>
      {routes.map(route => <NavbarLink to={route.to} title={route.title} />)}
    </ NavbarWrapper>

  )
}
