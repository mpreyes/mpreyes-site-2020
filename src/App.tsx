import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { CoreAPI } from './core/CoreApi';
import { ThemeProvider, styled } from '@material-ui/core/styles';
import { Container, Paper, Box, Button } from '@material-ui/core';

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};


const DeskBanner = styled(Box)({
  
  height: '600px', // for now, fixed height
  width: '100%',
  backgroundColor: '#68bd7b'
});

const LinksContainer = styled(Box)({

  backgroundColor: '#7b68bd',
  height: '300px'
});
const InnerContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
});

const MysteryContainer = styled(Box)({
  height: '200px',
  backgroundColor: '#bd6880',
});

const FooterContainer = styled(Box)({
  height: '50px',
  backgroundColor: '#bd68aa'
})
function App() { 
  let coreApi = new CoreAPI("boot");
  console.log("whats here", coreApi.get('/search', {}));
  return (
   // <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar/>
      <div>
        <DeskBanner>
          <p> Banner Image/ Clickable desk</p>
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
   // </ThemeProvider>
  );
}

export default App;
