import React from 'react';
import { useHistory } from "react-router-dom";

// material-ui components
import {
    Grid,
    IconButton,
    Typography,
    Paper,
} from '@material-ui/core';

// material-ui icons
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Home = () => {
    const history = useHistory();
    return (
    <Grid item xs={12} sm={12}>
        <Typography align="center" variant = "h2">HomePage:</Typography>
        <Paper style={{ paddingLeft: 16, paddingRight: 16 }}>
            <IconButton aria-label="Link" onClick={() => {
                history.push('/todo');
            }}>
                TodoApp link
                <ArrowForwardIcon/>
            </IconButton>
        </Paper>
    </Grid >
    )
};

export default Home;
