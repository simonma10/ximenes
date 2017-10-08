import * as types from './response-action-types';


export function requestData (searchTerm) {
    //console.log('request data');
    return {
        type: types.REQUEST_DATA,
        payload: searchTerm
    }
}

export function receiveData (payload) {
    //console.log('receive data');
    return {
        type: types.RECEIVE_DATA,
        payload: payload
    }
}

export function error(payload){
    //console.log('error');
    return {
        type: types.ERROR,
        payload: payload
    }
}