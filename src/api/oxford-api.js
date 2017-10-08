export const BASE_URL = 'https://od-api.oxforddictionaries.com/api/v1';
export const APP_ID = 'c383587a';
export const APP_KEY = '95368b10bc2e607c6b68855ffb202afa';

export const EXISTS = '/inflections';
export const LANGUAGE = '/en/';
export const DICTIONARY = '/entries';
export const THESAURUS = '/synonyms';

export const ACTION_CHECK_EXISTS = 'ACTION_CHECK_EXISTS';
export const ACTION_GET_DEFINITION = 'ACTION_GET_DEFINITION';
export const ACTION_GET_SYNONYMS = 'ACTION_GET_SYNONYMS';

import axios from 'axios';

//================================================================================
//
// https://developer.oxforddictionaries.com/documentation#/
//
//================================================================================

/**
 * Construct the relevant URL, based on word and action type
 * @param word
 * @param action
 * @returns {string}
 */
export function getUrl(searchTerm, action){
    //escape foreign characters
    //TODO: escape foreign characters

    //convert to lowercase
    let word = searchTerm.toLowerCase();

    switch (action){
        case ACTION_CHECK_EXISTS:
            return BASE_URL + EXISTS + LANGUAGE + word;
            break;
        case ACTION_GET_DEFINITION:
            return BASE_URL + DICTIONARY + LANGUAGE + word;
            break;
        case ACTION_GET_SYNONYMS:
            return BASE_URL + DICTIONARY + LANGUAGE + word + THESAURUS;
            break;
        default:
            break;
    }
}

// axios get (encounters CORS issues)
export function performGetRequest(url){
    axios.get(url,{
        headers:{
            'Access-Control-Allow-Headers': 'Content-Type, app_id, app_key, Authorization, x-id, Content-Length, X-Requested-With',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'app_id': "c383587a",
            'app_key': "95368b10bc2e607c6b68855ffb202afa",

        },
    })
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        })
}

//Alternative, simple xhr, (still encounters CORS issues...)
export function performXhr(){
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "https://od-api.oxforddictionaries.com/api/v1/entries/en/hello");
    xhr.setRequestHeader('Access-Control-Allow-Origin','http://localhost:8080');
    xhr.setRequestHeader("app_id", "c383587a");
    xhr.setRequestHeader("app_key", "95368b10bc2e607c6b68855ffb202afa");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "57f227be-beff-2122-13c7-d2ec742fdd5e");

    xhr.send(data);
}


/*

 'Access-Control-Allow-Credentials': 'true',
 'Access-Control-Max-Age': '3600',

 */