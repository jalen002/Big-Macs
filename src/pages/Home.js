import React, { Component } from 'react';
import axios from 'axios';
import {
    Typography,
    withStyles,
} from '@material-ui/core';
import UserInfo from '../components/user/UserInfo';


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
            userMoneyAmount: '',
            error: null
        }
    }

    componentDidMount() {
        this.retrieveBigMacList();
    }

    handleMoneyChange = (amount) => {
        this.setState({ userMoneyAmount: amount });
    }

    handleCountryLoad = (country) => {
        this.setState({ userCountry: country });
    }

    retrieveBigMacList() {
        let queryParams = {
            method: 'GET',
        };

        return axios.get('http://localhost:3001/bigmacs', queryParams)
            .then((res) => {
                console.log(res.data.bigMacList);
            }).catch((err) => {
                this.setState({ error: err });
            });
    }

    render() {
        let { classes } = this.props;
        let { userCountry, userMoneyAmount, error } = this.state;
    
        return (
            <div>
                <UserInfo onMoneyChange={this.handleMoneyChange} onUserCountryLoad={this.handleCountryLoad} />
            </div>
        );
    }
}

export default withStyles(useStyles)(Home);