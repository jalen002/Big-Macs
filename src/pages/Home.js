import React from 'react';
import {
    Typography,
    withStyles,
} from '@material-ui/core';


const styles = theme => ({
    main: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2),
        },
    },
});

const Home = ({ classes }) => (
    <Typography variant="h4">Big Macs!</Typography>
);

export default withStyles(styles)(Home);
