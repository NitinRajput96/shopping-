import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/header/Header";
import { Footer } from "./component/footer/Footer";
import { Home } from "./component/Home/Home";
import { View } from "./component/view-product/View";
import { Dashboard } from "./component/dashboard/Dashboard";
import { About } from "./component/about/About";

function App(){
       
   

    
           
  return(
     <>
      
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
     
     </>
  )
}
export default App;