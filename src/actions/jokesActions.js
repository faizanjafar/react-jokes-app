import axios from "axios"
import { USER_TYPE } from "./types";

export const allJokes = (user) => async dispatch => {
    axios.get(`https://api.api-ninjas.com/v1/jokes?limit=${user}`,
    {
        headers: { 'X-Api-Key': 'kC7JT1PxiNF4Gy7OWJjiOw==UK8RlHgMRVodym7y' }
    })
    .then(response => {
        dispatch({
            type: USER_TYPE,
            payload : response.data 
        })
    })
    .catch(err => {

    });
}
