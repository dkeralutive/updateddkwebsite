import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import FashionMen from "./pages/store/Fashion(Men)/FashionMen";
import Spinner from "./utilities/Spinner";
import useContext from "./hooks/useContext";
import { AdminContext } from "./contexts/AdminContext";

const Settings = lazy(() => import("./pages/admin/Settings/Settings"));
const Receipts = lazy(() => import("./pages/admin/Receipts/Receipts"));
const AdminStock = lazy(() => import("./pages/admin/Stock/Stock"));
const AdminCustomers = lazy(() => import("./pages/admin/Customers/Customers"));
const ProductCategory = lazy(() => import("./pages/admin/Products/ProductCategory"));
const ProductDescription = lazy(() => import("./pages/admin/Products/ProductDescription"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard/dashboard"));
const Login = lazy(() => import("./pages/admin/Login/login"));
const Home = lazy(() => import("./pages/general/Home/Home"));


export default function App() {
  const {loginStates} = useContext(AdminContext)

  const user = loginStates.user;
  return (
    <Routes>
      {/* ============= GENERAL ROUTES ============== */}
      <Route
        path="/"
        element={
          <Suspense fallback={Spinner({ animationType: "border" })}>
            <Home />
          </Suspense>
        }
      />

      {/* ================ ADMIN ROUTES ================ */}
      <Route
        path="/admin-login"
        element={
          <Suspense fallback={Spinner({ animationType: "border" })}>
            <Login />
          </Suspense>
        }
      />

      <Route
        path="/admin-dashboard"
        element={
          user ? (
            <Suspense fallback={Spinner({ animationType: "border" })}>
              <Dashboard />
            </Suspense>
          ) : (
            <Navigate to="/admin-login" />
          )
        }
      />

     <Route
        path="/prod-description"
        element={
          user ? (
            <Suspense fallback={Spinner({ animationType: "border" })}>
              <ProductDescription />
            </Suspense>
          ) : (
            <Navigate to="/admin-login" />
          )
        }
      />
      
      <Route
        path="/prod-category"
        element={
          user ? (
            <Suspense fallback={Spinner({ animationType: "border" })}>
              <ProductCategory />
            </Suspense>
          ) : (
            <Navigate to="/admin-login" />
          )
        }
      />
      
      <Route
        path="/admin-customers"
        element={
          user ? (
            <Suspense fallback={Spinner({ animationType: "border" })}>
              <AdminCustomers />
            </Suspense>
          ) : (
            <Navigate to="/admin-login" />
          )
        }
      />
 
      <Route
        path="/admin-stock"
        element={
          user ? (
            <Suspense fallback={Spinner({ animationType: "border" })}>
              <AdminStock />
            </Suspense>
          ) : (
            <Navigate to="/admin-login" />
          )
        }
      />

      <Route
        path="/admin-receipts"
        element={
          user ? (
            <Suspense fallback={Spinner({ animationType: "border" })}>
              <Receipts />
            </Suspense>
          ) : (
            <Navigate to="/admin-login" />
          )
        }
      />

      <Route
        path="/admin-settings"
        element={
          user ? (
            <Suspense fallback={Spinner({ animationType: "border" })}>
              <Settings />
            </Suspense>
          ) : (
            <Navigate to="/admin-login" />
          )
        }
      />

    </Routes>
  );
}
