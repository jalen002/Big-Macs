import React, { Component } from 'react';
import axios from 'axios';
import {
    Typography,
    withStyles,
} from '@material-ui/core';


let currencyInfoUrlBase = 'http://localhost:3001/bigmacs/random';
const useStyles = theme => ({
    main: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2),
        },
    },
});

class RandomCountryStats extends Component {
    constructor(props) {
        super(props); 

        this.retrieveRandomCountryStats = this.retrieveRandomCountryStats.bind(this);

        this.state = {
            randomCountryData: {},
            isLoading: false,
            error: null
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.userCountry && this.props.userCountry !== prevProps.userCountry){
            this.setState({ isLoading: true });
            this.retrieveRandomCountryStats(this.props.userCountry)
                .then((res) => {
                    let bmData = res.data.randomStats;
                    this.setState({ randomCountryData: bmData, isLoading: false });
                }).catch((err) => {
                    this.setState({ error: err, isLoading: false });
                })
        }
    }

    retrieveRandomCountryStats(notCountry) {
        let queryParams = {
            method: 'GET',
            params: {
                notCountry: notCountry
            }
        };

        return axios.get(currencyInfoUrlBase, queryParams)
            .then((res) => {
                return res;
            }).catch((err) => {
                return err;
            });
    }

    calculateBigMacsForCountry() {
        //(INPUT / local price) * (local dollar price / RAND COUNTRY dollar price)
        let localPrice = parseFloat(this.props.localPrice);
        let localDollarPrice = parseFloat(this.props.localDollarPrice);
        let userMoneyAmount = parseFloat(this.props.userMoneyAmount);
        let result = (userMoneyAmount / localPrice) * (localDollarPrice / this.state.randomCountryData['Dollar ex']);

        return parseInt(result) || 0;
    }

    calculateCurrencyWorth() {
        //[INPUT] * (local dollar price / RANDCOUNTRY dollar price)
        let localDollarPrice = parseFloat(this.props.localDollarPrice);
        let userMoneyAmount = parseFloat(this.props.userMoneyAmount);
        let result = userMoneyAmount * (localDollarPrice / this.state.randomCountryData['Dollar ex']);

        return parseInt(result) || 0;
    }

    render() {
        let { classes, userMoneyAmount, localPrice, localDollarPrice } = this.props;
        let { randomCountryData, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }
    
        if (isLoading) {
            return <p>Loading ...</p>;
        }
    
        return (
            <Typography variant='body2' color='textSecondary' component='p'>
                Random Country: {randomCountryData.Country}<br />

                You could buy {this.calculateBigMacsForCountry()} of Big Macs in {randomCountryData.Country} with {userMoneyAmount}!<br />

                Your {userMoneyAmount} is worth about {this.calculateCurrencyWorth()} in {randomCountryData.Country}
            </Typography>
        );
    }
}

export default withStyles(useStyles)(RandomCountryStats);