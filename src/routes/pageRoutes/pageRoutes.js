import { Route } from 'react-router-dom';

// Pages 
import StockPage from "../../pages/StockPage";
import VehiclePage from "../../pages/VehiclesPage";
import UsersPage from "../../pages/UsersPage";

// Initilalized and exported following page routes
// Users: pageRoutes/privateRoutes.js
const authRoutes =
    <Route>
        <Route path="users" element={<UsersPage />} />
    </Route>

const userRoutes =
    <Route>
        <Route path="stock" element={<StockPage />} />
    </Route>

const adminRoutes =
    <Route>
        {userRoutes}
        <Route path="vehicles" element={<VehiclePage />} />
    </Route>

export { authRoutes, adminRoutes, userRoutes } 