import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { styled } from '@material-ui/core/styles';
import { Toolbar, IconButton, Typography } from '@material-ui/core';


interface NavbarProps {

}

const StyledNavbar = styled(AppBar)({
    background: 'black',
});

export const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {

    return (
    <StyledNavbar position="static">
        <Toolbar>
            <Typography variant="h6">
            Madelyn Reyes
            </Typography>
        </Toolbar>
    </StyledNavbar>
    );
}