import {ADD_DATA,PAGES} from './actionTypes';

const initial={
    data:[],
    pages:1,
};

export const reducer=(state=initial,{type,payload}) =>{
    switch(type){
        case ADD_DATA:{
            return {
                ...state,data:payload
            }
        }

        case PAGES:{
            return {
                ...state,pages:payload
            }
        }

        default:
            return state
    }
}