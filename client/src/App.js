import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import LogInForm from "./components/LogIn/LogInForm";
import { useState } from "react";
import Register from "./components/Register/Register";
import Homepage from "./components/Homepage/Homepage";
import Profile from "./components/Profile/Profile";

function App() {
  const [user] = useState(true);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <Homepage /> : <LogIn />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
