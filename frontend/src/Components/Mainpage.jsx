import { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux"
import { getData } from "../Store/action";
import {Header} from './Header';
import { SideBar } from "./SideBar";
import {Teacher} from './Teacher';
import styled from './Header.module.css';
import axios from "axios";
import { useState } from "react";
import {useParams} from "react-router-dom"
export const Main=()=>{
    
    const [data,setData]=useState([]);
    const [pages,setPages]=useState(1);

    let arr=[];
    for(let i=0;i<pages;i++){
        arr.push(i+1);
    }

    const {gender}=useParams();
    console.log(gender);

    const getData = (page,size,gender,sort)=>{
        
        page=page || 1;
        size=size || 2;
        gender=gender || "";
        sort = sort || 0;
        
        const requst={
           method: 'get',
           url:`http://localhost:2345/teacher?page=${page}&size=${size}&gender=${gender}&sort=${sort}`,
           headers:{
               "Content-Type": "application/json"
           },
       }
       axios(requst).then((res)=>{
           console.log(res.data);
           setData(res.data.data);
           setPages(+res.data.totalPages);
       }).catch((err)=>{
           console.error(err)
       })
   }

    console.log("pages",pages,data);
    useEffect(()=>{
        getData()
    },[])

    const dataget=()=>{
        getData()
    }

    return <div >
        <Header/>
        <SideBar func={getData} />

        <div className={styled.container}>
        <div className={styled.col}>
            <div>Profilepic</div>
            <div>Teacher</div>
            <div>Class</div>
            <div>Details</div>
        </div>

        <div>
           { data.map((e)=>
                <div>
                    <Teacher data={e}/>
                </div>
            )}
        </div>
        <div>
            {
                arr.map((e)=>
                <button onClick={()=>getData(e,2,"",0)}>{e}</button>
                )
            }
        </div>
        </div>
    </div>
}