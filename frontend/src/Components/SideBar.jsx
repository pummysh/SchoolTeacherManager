import styled from './Header.module.css' 
import {useNavigate} from 'react-router';


export const SideBar=({func})=>{
    const Navigate=useNavigate();
    
    const gender=(gender)=>{
       func(1,2,gender,0)
       
    }

    const sort=(sort)=>{
        func(1,2,"",sort)
        Navigate(`?gender=Male&sort=${sort}&page=1&size=3`)
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