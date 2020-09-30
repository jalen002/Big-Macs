import React, { Component } from 'react';
import axios from 'axios';
import {
    Typography,
    withStyles,
} from '@material-ui/core';


let clientIpUrl = 'https://api.ipify.org';
let clientInfoUrl = 'http://localhost:3001/clientinfo/';
const useStyles = theme => ({
    main: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2),
        },
    },
});

class Home extends Component {
    constructor(props) {
        super(props); 

        this.retrieveClientInfo = this.retrieveClientInfo.bind(this);

        this.state = {
            user_country: null,
            error: null
        }
    }

    componentDidMount() {
        this.retrieveClientInfo();
    }

    retrieveClientInfo() {
        let clientIpApi = clientIpUrl;
        let clientInfoApi = clientInfoUrl;
        let queryParams = {
            method: 'GET',
        };

        return axios.get(clientIpApi, queryParams)
            .then((res) => {
                return axios.get(clientInfoApi + res.data, queryParams)
                    .then((res) => {
                        this.setState({ user_country: res.data.clientCountry.user_country });
                    })
            }).catch((err) => {
                this.setState({ error: err });
            });
    }

    render() {
        let { classes } = this.props;
        let { user_country, error } = this.state;
    
        return (
            <Typography variant='body2' color='textSecondary' component='p'>
                You are in: {user_country}<br />
            </Typography>
        );
    }
}

export default withStyles(useStyles)(Home);