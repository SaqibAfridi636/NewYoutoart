import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// ✅ Correct relative paths from routes/ to components/pages
import Landingpage from "../components/pages/Landingpage/Landing";
import Signup from "../components/pages/CreateAccount/CreateAccount";
import Login from "../components/pages/Login/Login";
import OTP from "../components/pages/OTP/OTP"
import Home from "../components/pages/Home/Home";
import Talent from "../components/pages/Talent/Talent";
import Network from "../components/pages/Network/Network";
import Casting from "../components/pages/Casting/Casting";
import Chat from "../components/pages/Chat/Chat";
import Profile from "../components/pages/Profile/Profile";
import TransactionHistory from "../components/pages/TransactionHistory/TransactionHistory";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/landingpage" />} />
            <Route path="/landingpage" element={<Landingpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="home" element={<Home />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/network" element={<Network />} />
            <Route path="/casting" element={<Casting />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/transactions" element={<TransactionHistory/>}/>
        </Routes>
    );
};

export default AppRoutes;

