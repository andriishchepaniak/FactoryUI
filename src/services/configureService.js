import axios from 'axios';

export const configureService = {

    getConfiguration: () => {
        return axios.get("https://localhost:7079/api/configure/Configuration");
    },

    configureInputData: (configuration) => {
        console.log("configure post method");
        console.log(configuration);
        return axios.post("https://localhost:7079/api/configure/Configuration", configuration);
    },

    configureEnginesCreateTime: (id, time) => {
        return axios.post("https://localhost:7079/api/configure/EnginesCreateTime", {
            id: id,
            creationTime: time * 1000
        });
    },

    configureAccessoriesCreateTime: (id, time) => {
        return axios.post("https://localhost:7079/api/configure/AccessoriesCreateTime", {
            id: id,
            creationTime: time * 1000
        });
    },

    configureBodiesCreateTime: (id, time) => {
        return axios.post("https://localhost:7079/api/configure/EnginesCreateTime", {
            id: id,
            creationTime: time * 1000
        });
    },

    configureCarFactoriesCreateTime: (id, time) => {
        return axios.post("https://localhost:7079/api/configure/CarFactoriesCreateTime", {
            id: id,
            creationTime: time * 1000
        });
    },

    configureDealersRequestTime: (id, time) => {
        return axios.post("https://localhost:7079/api/configure/DealersRequestTime", {
            id: id,
            creationTime: time * 1000
        });
    }
}