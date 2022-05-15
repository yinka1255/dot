import {API_ENV, API_URL_DEV, API_URL_PROD} from "@env"
import axios from 'axios';
let url;
switch (API_ENV) {
    case "DEV":
        url = API_URL_DEV;
    break;
    case "PROD":
        url = API_URL_PROD;
    break;
}

const doGet = (endpoint) => {
    console.log(url, 'url')
    let config = {
        method: 'get',
        url: url+"/"+endpoint,
        responseType: "json",
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    return axios(config).then((res) => {
        return res;
    })
    .catch((err)=> {
        throw err
    })  
};

export  {doGet} 