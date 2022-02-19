import { ADD_DATA,PAGES } from "./actionTypes";
import axios from 'axios'

export const addData = (payload)=>({
    type:ADD_DATA,
    payload:payload
})

export const pages=(payload)=>({
    type:PAGES,
    payload:payload
})



export const getData = (page,size,gender,sort)=>(dispatch)=>{
     page=page || 1;
     size=size || 2;
     gender=gender || "";
     sort = sort || 0;
     console.log(page,size,gender,sort);
     const requst={
        method: 'get',
        url:`http://localhost:2345/teacher?page=${page}&size=${size}&gender=${gender}&sort=${sort}`,
        headers:{
            "Content-Type": "application/json"
        },
        
    }
    axios(requst).then((res)=>{
        console.log(page,size,gender,sort);

        dispatch(addData(res.data.data));
        dispatch(pages(res.data.totalPages));

    }).catch((err)=>{
        console.error(err)
    })
}