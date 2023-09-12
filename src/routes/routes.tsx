import Dashboard from "../pages/dashboard";
import { Route, Routes as RouterRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Dashboard />} />
    </RouterRoutes>
  );
};

export default Routes;
