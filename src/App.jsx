import "./App.scss";
import Email from "./pages/Email/Email";
import Home from "./pages/Home/Home";
import Payment from "./pages/Payment/Payment";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Watch from "./pages/Watch/Watch";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
function App() {
  const user = useSelector((state) => state.user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={!user.currentUser ? <Email /> : <Home />} />
        <Route
          path="/register"
          element={!user.currentUser ? <Register /> : <Home />}
        />
        <Route
          path="/login"
          element={!user.currentUser ? <Login /> : <Home />}
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/categories/:type" element={<CategoriesPage />} />
        <Route
          path="/api/auth/resetPassword/:id/:token"
          element={<ResetPassword />}
        />
      </Routes>
    </Router>
  );
}

export default App;
