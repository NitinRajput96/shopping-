import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "./component/header/Header";
import { Footer } from "./component/footer/Footer";
import { Home } from "./component/Home/Home";
import { View } from "./component/view-product/View";
import { Dashboard } from "./component/dashboard/Dashboard";
import { About } from "./component/about/About";
import { StateProvider } from "./context/StateContext";
import { useEffect, useState } from "react";

function App(){
       

           const [cate,setCate]=useState("");
           


          
            
                   
  return(
     <>
      
      <StateProvider value={{cate,setCate}}>
      <BrowserRouter>
         <Header/>
         <Routes>
             <Route path="/home" element={<Home/>} />
             <Route path="/about" element={<About/>} />
             <Route path='/view/:subcetegory' element={<View/>} />
             <Route path="/" element={<Dashboard/>} />
         </Routes>
        <Footer/>
        </BrowserRouter>
      </StateProvider>
     
     </>
  )
}
export default App;