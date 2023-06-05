import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import FashionMen from "./pages/store/Fashion(Men)/FashionMen";
import { useAdminContext } from "./contexts/AdminContext";
import Spinner from "./utilities/Spinner";

const PropertyDetails = lazy(() => import("./pages/property/PropertyDetails/PropertyDetails"));
const Shortlets = lazy(() => import("./pages/property/Shortlets/Shortlets"));
const Apartments = lazy(() => import("./pages/property/Apaprtments/Apartments"));
const Lands = lazy(() => import("./pages/property/PropertyLands/Lands"));
const PropertyHome = lazy(() => import("./pages/property/PropertyHome/Home"));
const Software = lazy(() => import("./pages/store/Software/Software"));
const AboutUs = lazy(() => import("./pages/general/AboutUs/AboutUs"));
const ArtCraft = lazy(() => import("./pages/store/ArtCraft/ArtCraft"));
const ContactUs = lazy(() => import("./pages/general/ContactUs/ContactUs"));
const Signup = lazy(() => import("./pages/general/SignUp/Signup"));
const Checkout = lazy(() => import("./pages/general/Checkout/Checkout"));
const Settings = lazy(() => import("./pages/admin/Settings/Settings"));
const Receipts = lazy(() => import("./pages/admin/Receipts/Receipts"));
const AdminStock = lazy(() => import("./pages/admin/Stock/Stock"));
const AdminCustomers = lazy(() => import("./pages/admin/Customers/Customers"));
const ProductCategory = lazy(
  () => import("./pages/admin/Products/ProductCategory")
);
const ProductDescription = lazy(
  () => import("./pages/admin/Products/ProductDescription")
);
const Dashboard = lazy(() => import("./pages/admin/Dashboard/dashboard"));
const Login = lazy(() => import("./pages/admin/Login/login"));
const Home = lazy(() => import("./pages/general/Home/Home"));

export default function App() {
  const { loginStates } = useAdminContext();

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

      <Route
        path="/checkout"
        element={
          <Suspense fallback={Spinner({ animationType: "border" })}>
            <Checkout />
          </Suspense>
        }
      />

      <Route
        path="/signup"
        element={
          <Suspense fallback={Spinner({ animationType: "border" })}>
            <Signup />
          </Suspense>
        }
      />

      <Route
        path="/contact-us"
        element={
          <Suspense fallback={Spinner({ animationType: "border" })}>
            <ContactUs />
          </Suspense>
        }
      />

      <Route
        path="/about-us"
        element={
          <Suspense fallback={Spinner({ animationType: "border" })}>
            <AboutUs />
          </Suspense>
        }
      />

      {/* ================ STORE ROUTES ================ */}
      <Route
        path="/art-craft"
        element={
          <Suspense fallback={Spinner({ animationType: "border" })}>
            <ArtCraft />
          </Suspense>
        }
      />

      <Route
        path="/software"
        element={
          <Suspense fallback={Spinner({ animationType: "border" })}>
            <Software />
          </Suspense>
        }
      />

      {/* ================ PROPERTY ROUTES ================ */}
      <Route
        path="/property-home"
        element={
          <Suspense fallback={Spinner({ animationType: "border" })}>
            <PropertyHome />
          </Suspense>
        }
      />

      <Route
        path="/property-lands"
        element={
          <Suspense fallback={Spinner({ animationType: "border" })}>
            <Lands />
          </Suspense>
        }
      />

      <Route
        path="/property-apartments"
        element={
          <Suspense fallback={Spinner({ animationType: "border" })}>
            <Apartments />
          </Suspense>
        }
      />

      <Route
        path="/property-shortlets"
        element={
          <Suspense fallback={Spinner({ animationType: "border" })}>
            <Shortlets />
          </Suspense>
        }
      />

      <Route
        path="/property-details"
        element={
          <Suspense fallback={Spinner({ animationType: "border" })}>
            <PropertyDetails />
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
