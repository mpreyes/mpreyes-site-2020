import * as React from 'react';
import styled from 'styled-components';
import { Box, Button, IconButton } from '@material-ui/core';
import BannerImg from '../../images/banner.jpg';

interface BannerProps {

}

const DeskBanner = styled(Box)`
  height: 45%;
  background-color: #68bd7b;
  background-image: url(${BannerImg}) no-repeat; 
`;

const Star = styled.i`
`;

const toggleBanner: any = () => {
    console.log("toggling banner"); // TODO: on hover toggle between interactive desk & bg picture
};

export const Banner: React.FunctionComponent<BannerProps> = ({}) => {

    return (
    <DeskBanner>
        <p> Banner Image/ Clickable desk</p>
        <IconButton color="inherit" onClick={toggleBanner} aria-label="toggle banner">
        <Star className="nes-icon is-small star"/>
        </IconButton>

    </DeskBanner>
    );

}
export default Banner;