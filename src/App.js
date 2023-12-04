import React from 'react';
import {Routes, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./page/home";

function App() {
  return (
    <div className="App ">
        <Routes>
            <Route path={"/"} element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
