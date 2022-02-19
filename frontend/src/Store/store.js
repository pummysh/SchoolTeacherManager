import {createStore,combineReducers,applyMiddleware} from 'redux';
import {reducer as dataReducer} from './reducer';
import thunk from 'redux-thunk';

const rootReducer=combineReducers({
    dataReducer:dataReducer,
})

export const store=createStore(rootReducer,applyMiddleware(thunk));