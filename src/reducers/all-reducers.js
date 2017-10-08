import { combineReducers } from 'redux';

import ResponseReducer from './response-reducer';

const rootReducer = combineReducers({
    response: ResponseReducer
});

export default rootReducer;