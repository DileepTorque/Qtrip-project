import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Bangloremain from './Bengal/Bangloremain';
import Goamain from './Goa/Goamain';
import Kolkmain from './Kolkata/Kolkmain';
// import Coronav from './courosal/Coronav';
// import Middle from "./courosal/Middlecoro";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/banglo" element={<Bangloremain/>}/>
    <Route path="/northgoa" element={<Goamain/>}/>
    <Route path="/Kkr" element={<Kolkmain/>}/>
    <Route path="/banglore" element={<Bangloremain/>}/>
    <Route path="/goainfo" element={<Goamain/>}/>

   </Routes >
   </BrowserRouter>
  </React.StrictMode>,
{/* <>
<Coronav/>
  <Middle/>
 
</> */}
);

