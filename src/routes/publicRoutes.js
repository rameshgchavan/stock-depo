import { Outlet, Route } from 'react-router-dom';

// Pages
import HomePage from '../pages/HomePage';
import Signup from "../components/security/Signup";
import ForgotPassword from "../components/security/ForgotPassword";
import Login from '../components/security/Login';

// Initialized public page routes and exported
// Users: pageRoutes/index.js
const publicRoutes =
    <Route path="/" element={<Outlet />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgotpass" element={<ForgotPassword />} />
    </Route>

export default publicRoutes;