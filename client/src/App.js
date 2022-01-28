import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import LogInForm from "./components/LogIn/LogInForm";
import { useState } from "react";

function App() {
  const [user] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? null : <LogIn />} />
          <Route path="/login" element={<LogInForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
