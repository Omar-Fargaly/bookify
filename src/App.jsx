import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Account from "./components/Account";
import { UserProvider } from "./context/UserContext";

const App = () => (
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/account" replace />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  </UserProvider>
);

export default App;
