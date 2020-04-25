import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import {  makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, Button, Container } from '@material-ui/core';

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

const usesStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

export const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {
    const classes = usesStyles();
    return (
    <StyledNavbar position="static">
        <StyledToolbar>
            <Typography variant="h6">
            Madelyn Reyes
            </Typography>
 
            <Container>
           
                Things I <StyledHeart className="nes-icon is-small heart"/>

            
            <Button color="inherit">Recipes</Button>
            <Button color="inherit">Music</Button>
            <Button color="inherit">Research</Button>
            <Button color="inherit">Books</Button>
            <Button color="inherit">Movies</Button>
            </Container>
        </StyledToolbar>
    </StyledNavbar>
    );
}