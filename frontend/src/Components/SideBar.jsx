import styled from './Header.module.css' 
import {useNavigate} from 'react-router';
import { useSearchParams } from "react-router-dom";



export const SideBar=({func})=>{
    let [searchParams, setSearchParams] = useSearchParams();
    
    const gender=(d)=>{

        let page=searchParams.get('page');
        let size=searchParams.get('size');
        let gender=d;
        let sort=searchParams.get('sort');
        let params = {"page":page, "size":size, "gender":gender,"sort":sort};
        setSearchParams(params);

       func()
       
    }

    const sort=(d)=>{
        let page=searchParams.get('page');
        let size=searchParams.get('size');
        let gender=searchParams.get('gender');
        let sort=d;
        let params = {"page":page, "size":size, "gender":gender,"sort":sort};
        setSearchParams(params);

       func()
    }

    return <div className={styled.sidebar}>
        <div>
            <div>Gender</div>
            <button onClick={()=>gender("Male")}>Male</button>
            <button onClick={()=>gender("Female")}>Female</button>
        </div>
        <div>
            <div>Sort By age</div>
            <button onClick={()=>sort(1)}>Increasing</button>
            <button onClick={()=>sort(-1)}>Decreasing</button>

        </div>
    </div>
}