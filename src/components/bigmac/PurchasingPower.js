import React, { Component } from 'react';
import axios from 'axios';
import {
    Typography,
    withStyles,
} from '@material-ui/core';


let currencyInfoUrlBase = 'http://localhost:3001/bigmacs/';
const useStyles = theme => ({
    main: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2),
        },
    },
});

class PurchasingPower extends Component {
    constructor(props) {
        super(props); 

        this.retrieveCurrencyInfoForCountry = this.retrieveCurrencyInfoForCountry.bind(this);

        this.state = {
            currentCountryData: {},
            isLoading: false,
            error: null
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.userCountry && prevProps.userCountry !== this.props.userCountry){
            this.setState({ isLoading: true });
            this.retrieveCurrencyInfoForCountry(this.props.userCountry)
                .then((res) => {
                    let bmData = res.data.bigMacData;
                    this.setState({ currentCountryData: bmData, isLoading: false });
                    this.props.handleUserCountryDetailLoad(bmData['Local price'], bmData['Dollar ex']);
                }).catch((err) => {
                    this.setState({ error: err, isLoading: false });
                })
        }
    }

    retrieveCurrencyInfoForCountry(country) {
        let queryParams = {
            method: 'GET',
            params: {
                country: country
            }
        };

        return axios.get(currencyInfoUrlBase, queryParams)
            .then((res) => {
                return res;
            }).catch((err) => {
                return err;
            });
    }

    calculateBigMacs() {
        let userMoneyAmount = this.props.userMoneyAmount;
        let countryLocalPrice = this.state.currentCountryData['Local price'];
        return userMoneyAmount && countryLocalPrice ? (parseInt(parseFloat(userMoneyAmount) / parseFloat(countryLocalPrice))) : 0
    }

    render() {
        let { classes, userMoneyAmount } = this.props;
        let { currentCountryData, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }
    
        if (isLoading) {
            return <p>Loading ...</p>;
        }
    
        return (
            <Typography variant='body2' color='textSecondary' component='p'>
                You could buy {this.calculateBigMacs()} Big Macs in your country.<br />

                Your Dollar Purchasing Parity (PPP) is {currentCountryData['Dollar PPP']}
            </Typography>
        );
    }
}

export default withStyles(useStyles)(PurchasingPower);