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
    oneThird: {
        height: '33%'
    }
});

class Home extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            localCountry: null,
            inputMoney: '0',
            localPrice: '',
            localDollarPrice: ''
        }
    }

    handleMoneyChange = (amount) => {
        this.setState({inputMoney: amount});
    }

    handleLocalCountryLoad = (country) => {
        this.setState({localCountry: country});
    }

    handlelocalCountryDetailLoad = (localPrice, localDollarPrice) => {
        this.setState({localPrice: localPrice, localDollarPrice: localDollarPrice});
    }

    render() {
        let { classes } = this.props;
        let { localCountry, inputMoney, localPrice, localDollarPrice } = this.state;
    
        return (
            <div>
                <UserInfo className={classes.oneThird} onMoneyChange={this.handleMoneyChange} onlocalCountryLoad={this.handleLocalCountryLoad} /><br />
                <PurchasingPower className={classes.oneThird} localCountry={localCountry} inputMoney={inputMoney} handlelocalCountryDetailLoad={this.handlelocalCountryDetailLoad} /><br />
                <RandomCountryStats className={classes.oneThird} localCountry={localCountry} inputMoney={inputMoney} localPrice={localPrice} localDollarPrice={localDollarPrice} />
            </div>
        );
    }
}

export default withStyles(useStyles)(Home);