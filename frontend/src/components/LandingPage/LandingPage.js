import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Layout from '../Layout/Layout';
import GridButton from '../shared/GridButton';

// TODO:
// - Choose fonts
// - finalize theme colors
// - make font sizes fluid and responsive
// - implement themed buttons with more padding?

const Content = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 22vh 35vh 28vh 15vh;
  grid-template-columns: 9vw 82vw 9vw;

  @media only screen and (orientation: landscape) {
    grid-template-rows: 17vh 3vh 47vh 33vh;
    grid-template-columns: 9vw 42vw 40vw 9vw;
  }
`;

const Logo = styled(Grid)`
  position: relative;
  grid-row: 2/3;
  grid-column: 2/3;

  @media only screen and (orientation: landscape) {
    grid-row: 3/4;
    grid-column: 2/3;
  }
`;

const Circle = styled.div`
  position: relative;
  background-color: #927450;
  border-radius: 50%;
  height: 35vh;
  width: 35vh;

  @media only screen and (orientation: landscape) {
    height: 42vw;
    width: 42vw;

    ${'' /* Eventually 42vw becomes taller than the row, so cap the circle at 
    the height of the row to prevent overflow */}
    max-height: 47vh;
    max-width: 47vh;
  }
`;

const Title = styled.h1`
  position: relative;
  display: inline-block;
  top: 22.8%;
  left: 25%;
  font-size: 36px;
  font-weight: bolder;
  color: #f1f2eb;

  @media only screen and (orientation: landscape) {
    display: block;
  }
`;

const Slogan = styled.p`
  position: relative;
  display: inline-block;
  top: 22.8%;
  left: 25%;
  font-size: 16px;
  color: #f1f2eb;
  @media only screen and (orientation: landscape) {
    display: block;
  }
`;

const LoginFormAndSignupButton = styled(Grid)`
  display: none;

  ${'' /* Only display the login form on tablet sized devices and upwards */}
  @media only screen and (orientation: landscape) and (min-height: 768px) {
    grid-row: 2/4;
    grid-column: 3/4;
    display: flex;
  }
`;

const LoginAndSignupButtons = styled(Grid)`
  grid-row: 3/4;
  grid-column: 2/3;

  ${'' /* the login and signup buttons should be displayed on all devices in 
  portrait orientation and devices smaller than tablets in landscape orientation */}

  @media only screen and (orientation: landscape) {
    grid-row: 3/4;
    grid-column: 3/4;
  }

  @media only screen and (orientation: landscape) and (min-height: 768px) {
    display: none;
  }
`;

const Triangle = styled.div`
  background-color: #0b2027;
  clip-path: polygon(100% 100%, 100% 0%, 0% 100%);
  grid-row: 4/5;
  grid-column: 2/4;

  @media only screen and (orientation: landscape) {
    grid-row: 4/5;
    grid-column: 2/7;
  }
`;

function LandingPage() {
  return (
    <Layout>
      <Content>
        <Logo item md={12} sm={12} xs={12}>
          <Circle>
            <Title>BetAny</Title>
            <Slogan>Peer to peer bets starting at $0.01</Slogan>
          </Circle>
        </Logo>

        <LoginFormAndSignupButton
          container
          justify={'center'}
          alignItems={'flex-start'}
        >
          <Grid
            container
            item
            direction={'column'}
            spacing={3}
            xl={6}
            lg={8}
            md={10}
          >
            {/* Replace with Login Form */}

            <GridButton text={'Sign Up'} />
          </Grid>
        </LoginFormAndSignupButton>

        <LoginAndSignupButtons
          container
          justify={'center'}
          alignItems={'center'}
        >
          <Grid
            container
            item
            direction={'column'}
            spacing={3}
            xs={10}
            sm={8}
            md={6}
          >
            <GridButton text={'Log in'} />
            <GridButton text={'Sign Up'} />
          </Grid>
        </LoginAndSignupButtons>
        <Triangle />
      </Content>
    </Layout>
  );
}

export default LandingPage;
