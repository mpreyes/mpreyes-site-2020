const axios = require('axios');

export class CoreAPI {
    baseUrl: string;
    apiKey: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.apiKey = '---'; // TODO: how/where to store this?

    }
    get(path: string, params: Object) {
        path += '?' + this.apiKey;
        axios.get(path).then( (response: any) => {
            console.log(response);
        }).catch((error: any) => {
            console.log(error);
        }).finally(() => {
            console.log("got some stuff");
        })
    }
}