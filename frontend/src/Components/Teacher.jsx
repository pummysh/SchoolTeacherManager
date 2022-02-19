import styled from './Header.module.css';
import {Link} from 'react-router-dom';

export const Teacher=({data})=>{
    return <div className={styled.box}>
        <div className={styled.imageBox}>
            <img src={data.profilepic} alt="" />
        </div>
        <div>{data.name}</div>
        <div>
            {data.classes.map((e)=>
                <span>{e},</span>
            )}
        </div>
        <Link to="/details" >See Details</Link>
    </div>
}