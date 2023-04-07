import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from '../components/globalStyles/Global.styles';
import PrivateRouter from "./PrivateRouter";
import Navbar from '../components/nav/Navbar';
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from '../pages/login/Login';
import Items from '../pages/items/Items';
import Detail from '../pages/detail/Detail';
import Funzone from '../pages/funzone/Funzone';

const AppRouter = () => {
  return (

    <BrowserRouter>
       <GlobalStyles />
       <Navbar />  
       
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />           
            <Route path="funzone" element={<Funzone />} />

            <Route path="items" element={<PrivateRouter />}> 
            <Route path="" element={<Items />} />
            </Route>  

            <Route path="about" element={<PrivateRouter />}>
               <Route path="" element={<About />} />              
            </Route>

            <Route path="detail" element={<PrivateRouter />}>
                <Route path="" element={<Detail />} />
            </Route>        
       </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;