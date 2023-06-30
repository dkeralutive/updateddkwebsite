import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/general/Footer/Footer";
import UserCard from "../../../components/general/UserCard/UserCard";
import ArtCraftNavbar from "../../../components/shop/ArtCraftNavbar/ArtCraftNavbar";
import { useStoreContext } from "../../../contexts/StoreContext";
import mobileView from "../../../utilities/mobileView";

export default function UserProfile() {
  const { setUserToken, setUserName } = useStoreContext();
  const { id } = useParams();
  const navigate = useNavigate();

  //   Log out user handler
  const logOutUser = async () => {
    setUserToken("");
    setUserName("");
    navigate("/");
  };

  return (
    <div>
      <ArtCraftNavbar activeLink="" />

      <section>
        <div
          className="paymentCheckout-container"
          style={{ marginBottom: "3rem" }}
        >
          <div className="checkout-top">
            <i
              className={`bx bx-chevron-left bx-${mobileView() ? "sm" : "md"}`}
            />
            <h1>Account</h1>
            <span></span>
          </div>

          <p className="text-center fs-6 text-muted">Welcome back {id}</p>
        </div>

        <UserCard title={`Orders`} subtitle={`View your orders`} />

        <UserCard
          title={`Personal Details`}
          subtitle={`View and edit your personal details`}
        />

        <UserCard
          title={`Address`}
          subtitle={`View and edit your address details`}
        />

        <UserCard title={`Password`} subtitle={`Edit your password`} />

        <UserCard title={`Upload`} subtitle={`Upload new payment`} />

        <button className="userProfile-signout" onClick={logOutUser}>
          Sign out
        </button>
      </section>

      <Footer />
    </div>
  );
}
