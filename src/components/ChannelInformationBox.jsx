import React from 'react'
import { Box } from '@mui/material';

const ChannelInformationBox = (props) => {
    return (
        <Box sx={{borderLeft: "5px solid grey", padding: "10px 15px"}}>{props.title}{props.value}</Box>
    )
}

export default ChannelInformationBox;