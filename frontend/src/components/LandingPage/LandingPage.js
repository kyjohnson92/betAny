import React from 'react';
import { Grid, Button } from '@material-ui/core';
import styled from 'styled-components';

const PageContent = styled(Grid)`
  background-color: #3d5a6c;
  padding: 22.18vh 9.2vw 0 9.2vw;
  height: 100vh;
`;

const Branding = styled(Grid)`
  ${'' /* @media only screen and (min-width: 1200px) {
    padding: 215px 200px 0 200px;
  } */}
`;

const Logo = styled.div`
  position: relative;
`;

const Circle = styled.div`
  position: relative;
  width: 28vw;
  height: 28vw;

  background-color: #927450;
  border-radius: 50%;

  @media only screen and (orientation: portrait) {
    width: 50vw;
    height: 50vw;
  }

  @media only screen and (min-width: 1200px) {
    width: 26.25vw;
    height: 26.25vw;
  }
`;

const Title = styled.h1`
  position: relative;
  top: 22.8%;
  left: 50%;
  font-size: 36px;
  font-weight: bolder;
  color: #f1f2eb;
`;

const Slogan = styled.p`
  position: relative;
  top: 22.8%;
  left: 50%;
  font-size: 16px;
  color: #f1f2eb;
`;

const DummyLogin = styled(Grid)`
  height: 348px;
  background-color: #f1f2eb;
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const LoginButton = styled(Grid)`
  @media only screen and (max-width: 960px) {
    display: flex;
  }
`;

const SVG = styled.svg`
  position: absolute;
  bottom: 0;
`;

const Polygon = styled.polygon`
  fill: #0b2027;
`;

function LandingPage() {
  return (
    <PageContent container justify={'space-between'}>
      <Branding item xl={10} lg={9} md={8} sm={8}>
        <Logo>
          <Circle>
            <Title>BetAny</Title>
            <Slogan>Peer to peer bets starting at $0.01</Slogan>
          </Circle>
        </Logo>
      </Branding>
      <Grid
        container
        direction={'column'}
        wrap={'nowrap'}
        spacing={4}
        xl={2}
        lg={3}
        md={4}
        sm={4}
        xs={6}
      >
        <DummyLogin item>
          <Grid container direction={'column'}>
            <Grid item>
              <Button variant="contained" color="primary" fullWidth>
                Log in
              </Button>
            </Grid>
          </Grid>
        </DummyLogin>
        <LoginButton item>
          <Button variant="contained" color="primary" fullWidth>
            Log in
          </Button>
        </LoginButton>
        <Grid item>
          <Button variant="contained" color="primary" fullWidth>
            Sign up
          </Button>
        </Grid>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <SVG viewBox="0 0 1920 360">
          <Polygon points="200,360 1920,360 1920,0" />
        </SVG>
      </Grid>
    </PageContent>
  );
}

export default LandingPage;
