import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Container, Paper, Box, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Navbar } from './components/Navbar';
import { CoreAPI } from './core/CoreApi';
import { theme } from './theme';
import BannerImg from './images/banner.jpg';


const DeskBanner = styled(Box)`
  height: 300px;
  width: 100%;
  background-color: #68bd7b;
  background-image: url(${BannerImg}) no-repeat; 
`;

const LinksContainer = styled(Box)`
  background: #7b68bd;
  height: 300px;
`;
const InnerContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const MysteryContainer = styled(Box)`
  height: 200px;
  background-color: #bd6880;
`;

const FooterContainer = styled(Box)`
  height: 50px;
  background-color: #bd68aa;
`
function App() { 
  let coreApi = new CoreAPI("boot");
  console.log("whats here", coreApi.get('/search', {}));
  return (
   <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar/>
      <div>
        <DeskBanner>
          <p> Banner Image/ Clickable desk</p>
          <Button color="inherit" onClick={()=> {}}>Toggle imgß</Button>
        </DeskBanner>
        
        <LinksContainer>
          <p> button links</p>
          <InnerContainer>
          <Paper elevation={1}>
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
    </div>
    </ThemeProvider>
  );
}

export default App;
