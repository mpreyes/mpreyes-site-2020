import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Container, Paper, Box, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Navbar } from './components/Navbar';
import { CoreAPI } from './core/CoreApi';
import { theme } from './theme/theme';
import { Banner } from './components/Banner';


const LinksContainer = styled(Box)`
  background: #7b68bd;
  min-height: 30%;
`;
const InnerContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const MysteryContainer = styled(Box)`
  min-height: 20%;
  background-color: #bd6880;

`;

const FooterContainer = styled(Box)`
  min-height: 5%;
  background-color: #bd68aa;
`;

function App() { 
  let coreApi = new CoreAPI("boot");
  console.log("whats here", coreApi.get('/search', {}));
  return (
   <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar/>
          <Banner/>
        <LinksContainer>
          <p> button links</p>
          <InnerContainer>
          <Paper elevation={2}>
          <Button color="inherit">Resume</Button>
            </Paper>
            <Paper elevation={1}>
            <Button color="inherit">Projects</Button>
            </Paper>
            <Paper elevation={1}>
            <Button color="inherit">Skillz & Links</Button>
            </Paper>
            </InnerContainer>
        </LinksContainer>
        <MysteryContainer>
          <p> What will go here? No one knows :)</p>
        </MysteryContainer>
        <FooterContainer>
          <p> The footer! &copy; Madelyn Reyes 2020</p>
        </FooterContainer>
    </div>
    </ThemeProvider>
  );
}

export default App;
