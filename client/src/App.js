import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import LogInForm from "./components/LogIn/LogInForm";
import { useEffect } from "react";
import Register from "./components/Register/Register";
import Homepage from "./components/Homepage/Homepage";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import FriendRequests from "./components/FriendRequests/FriendRequests";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        {isAuthenticated && <Nav />}
        {isAuthenticated && <div style={{ marginTop: "56px" }}></div>}
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LogInForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/friends" element={<FriendRequests />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/login" element={<LogInForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/*" element={<LogIn />} />
            <Route path="/friends" element={<LogIn />} />
          </Routes>
        )}{" "}
        {/* spaces content below fixed header */}
      </div>
    </BrowserRouter>
  );
}

export default App;
