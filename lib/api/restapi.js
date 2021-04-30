

const axios = require('axios');

export const ExecuteFacebookAPI = async (url) => {
    try {
        return await axios.get(url)
    } catch (error) {
        console.error(error);
    }
};

export const ExecuteSMSAPI = async (url, body, options) => {
    try {
        //console.log(url);
        //console.log(options);
        //console.log(body);
        return await axios.post(url, body, options)
    } catch (error) {
        console.error(error);
    }
};

export const ExecuteBackendAPI = async (url, params, request) => {
    try {
        if (request === "GET") {
            //console.log(url)
            //console.log(params)
            return await axios.get(url)
        } else if (request === "POST"){
            return await axios.post(url, params)
        } else if (request === "PUT"){
            console.log(url)
            console.log(params)
            return await axios.put(url, params)
        }
    } catch (error) {
        console.error(error);
    }
};
