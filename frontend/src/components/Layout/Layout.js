import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  background-color: #3d5a6c;
`;

const Main = styled.main`
  width: 100%;
  background-color: #3d5a6c;
`;

const Layout = ({ children }) => (
  <Background>
    <Main>{children}</Main>
  </Background>
);

export default Layout;
