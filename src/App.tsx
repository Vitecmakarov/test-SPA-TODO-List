import React from 'react';

import { useHistory } from "react-router-dom";

// material-ui components
import {
    Grid,
    Box,
    Tabs,
    Tab,
    Paper,
} from '@material-ui/core';

// interfaces
interface IProps {
  children?: JSX.Element;
}

const App = ({ children }: IProps) =>{
    const history = useHistory();

    return  (
        <>
            <Paper square>
                <Tabs indicatorColor="primary" textColor="primary">
                    <Tab label="Home" onClick={() => { history.push('/') }}/>
                    <Tab label="Todo list" onClick={() => { history.push('/todo') }}/>
                </Tabs>
            </Paper>

            <Grid item xs={12} sm={12}>
                <Box>{children}</Box>
            </Grid>
        </>
    );
}

export default App;
