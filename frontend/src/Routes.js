import {Routes,Route} from "react-router-dom";
import {Main} from './Components/Mainpage'
import {Details} from './Components/Details';

export const Routers=()=>{
    <Routes>
            <Route path="/details" element={<Details/>}></Route>
            <Route path="/home" element={<Main/>}></Route>
    </Routes>
}