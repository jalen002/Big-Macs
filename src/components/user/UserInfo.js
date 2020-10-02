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

class UserInfo extends Component {
    constructor(props) {
        super(props); 

        this.retrieveClientInfo = this.retrieveClientInfo.bind(this);

        this.state = {
            localCountry: null,
            inputMoney: '0',
            isLoading: false,
            error: null
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        this.retrieveClientInfo();
    }

    handleCountryLoad = (country) => {
        this.setState({localCountry: country, isLoading: false});
        this.props.onlocalCountryLoad(country);            
    }

    handleMoneyChange = (event) => {
        let inputValue = event.target.value;
        this.setState({ inputMoney: inputValue });
        this.props.onMoneyChange(inputValue);
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
                        let country = res.data.clientCountry.user_country;
                        this.handleCountryLoad(country);
                    });
            }).catch((err) => {
                this.setState({ error: err });
            });
    }

    render() {
        let { classes } = this.props;
        let { localCountry, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }
    
        if (isLoading) {
            return <p>Loading ...</p>;
        }
    
        return (
            <Typography variant='body2' color='textSecondary' component='p'>
                You are in: {localCountry}<br />
                
                Please enter an amount of money in your local currency: 
                <input type='number' value={this.state.inputMoney} onChange={this.handleMoneyChange} />
            </Typography>
        );
    }
}

export default withStyles(useStyles)(UserInfo);