import { useNavigate } from "react-router-dom";
import "./Modals.css";

export default function PaymentSuccessful() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/fashion");
  }

  // function closeModal(e: React.MouseEvent<HTMLDivElement>) {
  //     const target = e.target as HTMLDivElement;
  //   if (
  //     !target.classList.contains("modal-card") &&
  //     !target.classList.contains("modal-card-header") &&
  //     !target.classList.contains("modal-card-icon") &&
  //     !target.classList.contains("modal-card-subtitle")
  //   ) {
  //     return setIsPaymentSuccess(false);
  //   } else {
  //     return setIsPaymentSuccess(true);
  //   }
  // }

  return (
    <div className="modal-page-container">
      <div className="modal-card shadow-sm">
        <h2 className="modal-card-header">Payment Successful</h2>
        <i className="bx bx-check-circle modal-card-icon" />
        <p className="modal-card-subtitle">
          Congratulations!!!!! Your payment for the items{" "}
          <span>3Bedroom Flat</span> was succesful. Our Legal team will get back
          to you shortly
        </p>
        <button onClick={handleClick}>Done</button>
      </div>
    </div>
  );
}
