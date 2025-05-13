import "./App.css";
import React, {Fragment} from "react";
import Home from "./components/Home/home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
