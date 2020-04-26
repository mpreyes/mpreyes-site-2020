import * as React from 'react';
import styled from 'styled-components';
import { Box, Button, IconButton, makeStyles, Theme, Grid } from '@material-ui/core';
import BannerImg from '../../images/banner.jpg';
import DeskVer1 from '../../images/desk-ver-1.svg';
import { Bit8Icon } from '../Navbar/icon';

interface BannerProps {

}

const DeskBanner = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 45%;
  width: auto;
  background-color: #68bd7b;
  background-image: url(${BannerImg}) no-repeat; 
  
`;

const Star = styled.i`

`;

const toggleBanner: any = () => {
    console.log("toggling banner"); // TODO: on hover toggle between interactive desk & bg picture
};


const usesStyles = makeStyles((theme: Theme) => ({
    parent: {
        padding: '2em 0 0 2em',
    },
    coffeCup: {
        display: 'flex',
        justify: 'flex-start',
    },
    middleRow: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    star: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end'
    },
}));

export const Banner: React.FunctionComponent<BannerProps> = ({}) => {
    const classes = usesStyles();
    return (
    <DeskBanner>
       <Grid className={classes.parent} xs={12}>
            <Grid> 
                <IconButton color="inherit" className={classes.coffeCup} onClick={() => {}}>coffee</IconButton>
                <IconButton color="inherit" onClick={() => {}}>headphones</IconButton>
                <IconButton color="inherit" onClick={() => {}}>laptop</IconButton>
              
            </Grid>
            <Grid className={classes.middleRow}>
                <IconButton color="inherit" onClick={() => {}}>book</IconButton>
                <IconButton color="inherit" onClick={() => {}}>cookie</IconButton>
                <IconButton color="inherit" onClick={() => {}}>papers</IconButton>
                <IconButton color="inherit" onClick={() => {}}>other stuff</IconButton>
            </Grid>

            <Grid className={classes.star}>
                <IconButton color="inherit" onClick={toggleBanner} aria-label="toggle banner">
                <Star className="nes-icon is-small star"/>
                </IconButton>
            </Grid>
       </Grid>
    </DeskBanner>
    );

}
export default Banner;