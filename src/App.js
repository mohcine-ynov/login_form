import React from "react";
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Profile from "./components/users/profile";
import { useState } from "react";
import { hasAuthenticated } from "./services/AuthApi";
import Auth from "./contexts/Auth";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <AppContainer>
        <Router>
          <Routes>
            <Route path="/login" element={<AccountBox/>}/>
            <Route path="/profil" element={<AuthenticatedRoute><Profile /></AuthenticatedRoute>} />
          </Routes>
        </Router>
      </AppContainer>
    </Auth.Provider>


  );
}

export default App;