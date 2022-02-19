import { useEffect } from "react";
import { SideBar } from "./SideBar";
import {Teacher} from './Teacher';
import styled from './Header.module.css';
import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Main=()=>{
    let [searchParams, setSearchParams] = useSearchParams();
    
    console.log('ans',setSearchParams);

    const [data,setData]=useState([]);
    const [pages,setPages]=useState(1);

    let arr=[];
    for(let i=0;i<pages;i++){
        arr.push(i+1);
    }
    const getData = ()=>{
        
        let page=searchParams.get('page');
        let size=searchParams.get('size');
        let gender=searchParams.get('gender');
        let sort=searchParams.get('sort');
        
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
        let page=searchParams.get('page')||1;
        let size=searchParams.get('size')||2;
        let gender=searchParams.get('gender')||"";
        let sort=searchParams.get('sort')||0;
        let params = {"page":page, "size":size, "gender":gender,"sort":sort};
        setSearchParams(params);
        getData()

    },[searchParams]);

    const paginate=(num)=>{
        let page=num;
        let size=searchParams.get('size');
        let gender=searchParams.get('gender');
        let sort=searchParams.get('sort');
        let params = {"page":page, "size":size, "gender":gender,"sort":sort};
        setSearchParams(params);
        getData()


    }

    return <div >
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
                <button onClick={()=>paginate(e)}>{e}</button>
                )
            }
        </div>
        </div>
    </div>
}