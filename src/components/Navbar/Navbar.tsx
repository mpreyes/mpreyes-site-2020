import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { styled, makeStyles } from '@material-ui/core/styles';
import { Toolbar, IconButton, Typography, Button, Container } from '@material-ui/core';


interface NavbarProps {

}

const StyledNavbar = styled(AppBar)({
    display: 'flex',
    background: 'black',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
});


const usesStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

export const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {
    const classes = usesStyles();
    return (
    <StyledNavbar position="static">
        <Toolbar>
            <Typography variant="h6">
            Madelyn Reyes
            </Typography>
 
            <Container>
            <Typography variant="h6">
                My hobbies
            </Typography>
            <Button color="inherit">Recipes</Button>
            <Button color="inherit">Music</Button>
            <Button color="inherit">Research</Button>
            <Button color="inherit">Books</Button>
            <Button color="inherit">Movies</Button>
            </Container>
        </Toolbar>
    </StyledNavbar>
    );
}