import styled from './Details.module.css';
import {useLocation} from 'react-router-dom';
export const Details=()=>{
    const location=useLocation();
    const data=location.state.details;
    console.log(data);
    return <div className={styled.container}>
        <div className={styled.imagebox}>
            <img src={data.profilepic} alt="" />
        </div>
        <h3>{data.name}</h3>
        <div>Age : {data.age}</div>
        <div>Gender : {data.gender}</div>
        <div>Classes :&nbsp;
            {
                data.classes.map((e)=><span>Class {e}  </span>)
            }
        </div>

    </div>
}