import { Outlet, Route } from "react-router-dom";

import { authRoutes, adminRoutes, userRoutes } from "./pageRoutes";

// This function returns private page routes
// Users: pageRoutes/index.js
const privateRoutes = (user) => {
    return (
        // Returning private routes according to user type
        <Route path="/private" element={<Outlet />}>
            {
                user === "auth"
                    ? authRoutes
                    : user === "admin"
                        ? adminRoutes
                        : userRoutes
            }
        </Route>
    )
}

export default privateRoutes;