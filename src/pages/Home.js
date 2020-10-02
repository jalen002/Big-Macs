import React, { Component } from 'react';
import {
    withStyles,
} from '@material-ui/core';
import UserInfo from '../components/user/UserInfo';
import PurchasingPower from '../components/bigmac/PurchasingPower';
import RandomCountryStats from '../components/bigmac/RandomCountryStats';


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

        this.state = {
            userCountry: null,
            userMoneyAmount: '0',
            localPrice: '',
            localDollarPrice: ''
        }
    }

    handleMoneyChange = (amount) => {
        this.setState({userMoneyAmount: amount});
    }

    handleCountryLoad = (country) => {
        this.setState({userCountry: country});
    }

    handleUserCountryDetailLoad = (localPrice, localDollarPrice) => {
        this.setState({localPrice: localPrice, localDollarPrice: localDollarPrice});
    }

    render() {
        let { classes } = this.props;
        let { userCountry, userMoneyAmount, localPrice, localDollarPrice } = this.state;
    
        return (
            <div>
                <UserInfo onMoneyChange={this.handleMoneyChange} onUserCountryLoad={this.handleCountryLoad} /><br />
                <PurchasingPower userCountry={userCountry} userMoneyAmount={userMoneyAmount} handleUserCountryDetailLoad={this.handleUserCountryDetailLoad} /><br />
                <RandomCountryStats userCountry={userCountry} userMoneyAmount={userMoneyAmount} localPrice={localPrice} localDollarPrice={localDollarPrice} />
            </div>
        );
    }
}

export default withStyles(useStyles)(Home);