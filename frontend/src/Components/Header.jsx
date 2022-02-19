import styled from './Header.module.css';
import {Link,Routes,Route} from "react-router-dom";
import {Main} from './Mainpage'
import {Details} from './Details';

export const Header=()=>{
    return <div className={styled.header}>
        <Link to="/">Home</Link>
        <div>
        <input type="text" placeholder="Search..." />
        <button>Done</button>
        </div>
        <Link to="/logout">Logout</Link>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/details" element={<Details/>}></Route>
        </Routes>                      
    </div>
}