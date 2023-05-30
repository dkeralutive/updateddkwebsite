import "./Modals.css"
import { useNavigate } from 'react-router-dom'
import { useStoreContext } from "../contexts/StoreContext";



export default function PaymentSuccessful() {
    const { setIsPaymentSuccess } = useStoreContext()
    const navigate = useNavigate()

    function handleClick() {
        setIsPaymentSuccess(false)
        navigate("/property-details")
    }

    function closeModal(e) {
        if (
            !e.target.classList.contains("modal-card") &&
            !e.target.classList.contains("modal-card-header") &&
            !e.target.classList.contains("modal-card-icon") &&
            !e.target.classList.contains("modal-card-subtitle")
        ) {
            return setIsPaymentSuccess(false);
        } else {
            return setIsPaymentSuccess(true);
        }
    }
    
    return (
        <div className="modal-container" onClick={closeModal}>
            <div className="modal-card">
                <h2 className="modal-card-header">Payment Successful</h2>
                <i className="bx bx-check-circle modal-card-icon" />
                <p className="modal-card-subtitle">
                    Congratulations!!!!! Your deposit for the proper{" "}
                    <span>3Bedroom Flat</span> was succesful. Our Legal team will get back
                    to you shortly
                </p>
                <button onClick={handleClick}>Done</button>
            </div>
        </div>
    );
}
