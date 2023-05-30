import { useNavigate } from "react-router-dom";
import "./Modals.css";
import { useStoreContext } from "../contexts/StoreContext";

export default function OrderSuccessful() {
    const { setIsOrderSuccess } = useStoreContext();
    const navigate = useNavigate()

    function handleClick() {
        setIsOrderSuccess(false);
        navigate("/art-craft");
    }

    function closeModal(e) {
        if (
            !e.target.classList.contains("modal-card") &&
            !e.target.classList.contains("modal-card-header") &&
            !e.target.classList.contains("modal-card-icon") &&
            !e.target.classList.contains("modal-card-subtitle")
        ) {
            return setIsOrderSuccess(false);
        } else {
            return setIsOrderSuccess(true);
        }
    }

    return (
        <div className="modal-container" onClick={closeModal}>
            <div className="modal-card">
                <h2 className="modal-card-header">Order Successful</h2>
                <i className="bx bxs-envelope modal-card-icon" />
                <p className="modal-card-subtitle">Thank you for your purchase !</p>
                <h6 className="modal-card-subtitle h6">Your order ID is: 242225454</h6>
                <p className="modal-card-subtitle">
                    You wil receive confirmation email with order details
                </p>
                <button onClick={handleClick}>CONTINUE SHOPPING</button>
            </div>
        </div>
    );
}
