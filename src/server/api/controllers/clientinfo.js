const axios = require('axios')

let ipApi = 'https://ipvigilante.com/json/';

module.exports = { 
    getClientCountry: async (ip) => {
        let queryParams = {
            method: 'GET'
        };

        return axios.get(ipApi + ip, queryParams)
            .then((res) => {
                return {
                    user_country: res.data.data.country_name
                };
            }).catch((err) => {
                return {
                    error: 'There was an error calling IP_Vigilante, defaulting to United States. ' + err,
                    user_country: 'United States'                
                };
            });
    },
}