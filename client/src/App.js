import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from "react";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// Pages
import createAccountPage from "./pages/CreateAccount";
import loginPage from "./pages/Login";
import Login from "./pages/Login";

function App() {

        return (
            <Login />
            // <Router>
            //     <Routes>
            //         <Route path="/create_account" component={createAccountPage}/>
            //         <Route path="/login" component={loginPage}/>
            //     </Routes>
            // </Router>
        );
}

export default App;
