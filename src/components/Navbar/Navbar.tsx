import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import {  makeStyles, Theme } from '@material-ui/core/styles';
import { Toolbar, Typography, Button, Container, IconButton } from '@material-ui/core';
import { Bit8Icon } from './icon';

interface NavbarProps {

}

const StyledNavbar = styled(AppBar)`
    display: flex;
    background: black;
`;

const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;

const StyledHeart = styled.i`
  
`;

const usesStyles = makeStyles((theme: Theme) => ({
    menuButton: {
        // marginRight: theme.spacing(2),
    }
}));

export const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {
    const classes = usesStyles();
    return (
    <StyledNavbar position="static">
        <StyledToolbar>
            {/* <Typography variant="h6">
            Madelyn Reyes
            </Typography> */}
            
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                M<Bit8Icon/> 
            </IconButton>
            
           
 
            <Container>
           
                Things I <StyledHeart className="nes-icon is-small heart"/> |
            <Button color="inherit">Recipes</Button>
            <Button color="inherit">Music</Button>
            <Button color="inherit">Research</Button>
            <Button color="inherit">Books</Button>
            <Button color="inherit">Movies</Button>
            |
            <Button color="inherit">Blog</Button>
            </Container>
        </StyledToolbar>
    </StyledNavbar>
    );
}