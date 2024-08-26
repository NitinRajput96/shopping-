import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "./component/header/Header";
import { Footer } from "./component/footer/Footer";
import { Home } from "./component/Home/Home";
import { View } from "./component/view-product/View";
import { Dashboard } from "./component/dashboard/Dashboard";
import { About } from "./component/about/About";
import UseContaxtProvider from "./context/createCont";
import { Cart } from "./component/cart/Cart";




function App(){
     
                   
return(
     <>
    
      <UseContaxtProvider>
      <BrowserRouter>
               <Header/>
               <Routes>
                  <Route path="home" element={<Home/>}  />
                  <Route path="about" element={<About/>} />
                  <Route path="cart" element={<Cart/>} />
                  <Route path='view/:subcetegory' element={<View/>} />
                  <Route path="/" element={<Dashboard/>} />
               </Routes>
            <Footer/>
      </BrowserRouter>
      </UseContaxtProvider>
    
     
    
     </>
  )
}
export default App;