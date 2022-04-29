import axios from 'axios';

export const workerService = {
    run: () => {
        return axios.post("https://localhost:7079/api/worker/run", {});
    },

    getState: () => {
        return  axios.get("https://localhost:7079/api/worker/state");
    }

}