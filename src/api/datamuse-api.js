export const BASE_URL = 'https://api.datamuse.com';
export const API_WORDS = '/words';
export const API_AUTO = '/sug';


import axios from 'axios';
import { prepareSearchTerm } from './api-utils';

export function performGetRequest(url, actionType ){

    return dispatch => axios.get(url,{})
        .then(function (response){
            console.log(response);
            dispatch({ type: actionType, payload: response});
            //return response;
        })
        .catch(function (error){
            console.log(error);
            dispatch({ type: 'ERROR', payload: error});
            //return error;
        })
}

export function getUrl(searchTerm, action, letter, pattern){
    let word = prepareSearchTerm(searchTerm);
    switch (action){
        case 'similar meaning':
            return BASE_URL + API_WORDS + '?ml=' + word;
            break;
        case 'sounds like':
            return BASE_URL + API_WORDS + '?sl=' + word;
            break;
        case 'starts with':
            return BASE_URL + API_WORDS + '?ml=' + word + '&sp=' + letter + '*';
            break;
        case 'ends with':
            return BASE_URL + API_WORDS + '?ml=' + word + '&sp=*' + letter;
            break;
        case 'pattern':
            return BASE_URL + API_WORDS + '?sp=' + pattern;
            break;
        default:
            break;
    }

}