import {API_ENV, API_URL_DEV, API_URL_PROD} from "@env"
import axios from 'axios';
let UPLOAD_URL;
switch (API_ENV) {
    case "DEV":
        UPLOAD_URL = API_URL_DEV;
    break;
    case "PROD":
        UPLOAD_URL = API_URL_PROD;
    break;
}

const doPostUpload = (payload, endpoint, setProgress) => {
    let config = {
        method: 'post',
        url: UPLOAD_URL+"/"+endpoint,
        responseType: "json",
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        transformRequest: (data, headers) => {
            return payload;
        },
        onUploadProgress: ({loaded, total}) => {
            let percentage = (loaded/total)*100;
            setProgress(percentage)
        },
        data: payload
    };
    return axios(config).then((res) => {
        return res;
    })
    .catch((err)=> {
        console.log(err, 'errA')
        throw err
    })  
};

export  {doPostUpload} 