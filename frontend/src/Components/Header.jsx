import styled from './Header.module.css';
import {Link,Routes,Route} from "react-router-dom";
import {Main} from './Mainpage'
import {Details} from './Details'


export const Header=()=>{
    return <div className={styled.header}>
        <div className={styled.firstBox}>
        <Link to="/home">Home</Link>
        <div>
        <input type="text" placeholder="Search..." />
        <button>Done</button>
        </div>
        <Link to="/logout">Logout</Link>
        </div>

        <div>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/details" element={<Details/>}></Route>
        </Routes>
        </div>
    </div>
}