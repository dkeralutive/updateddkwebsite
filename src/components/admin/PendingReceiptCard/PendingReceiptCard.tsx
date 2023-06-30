import { useState } from "react";
import { useAdminContext } from "../../../contexts/AdminContext";
import { ReceiptTransaction } from "../../../types/admin";
import formatCurrency from "../../../utilities/FormatCurrency";
import AcceptedPaymentsCard from "../AcceptedPaymentsCard/AcceptedPaymentsCard";
import "./PendingReceiptCard.css";

export default function PendingReceiptCard({
  receipt,
}: {
  receipt: ReceiptTransaction;
}) {
  const [prodImage, setProdImage] = useState("");
  const [prodTitle, setProdTitle] = useState("");
  const { imageUrl, descriptionCode, reference } = receipt;

  // Context
  const { productDescription } = useAdminContext();
  const prod = productDescription.find((desc) => desc.code == descriptionCode);
  if (prod) { 
    setProdImage(prod.imageUrl)
    setProdTitle(prod.description)
  }

  return (
    <article className="pending_receipt_wrapper mt-4">
      <div className="pending_receipt_property_details">
        <div className="receipt_up">
          <img className="pending_receit_img" src={prodImage} alt={prodTitle} />

          <div className="property_details">
            <div>
              <p
                className="receipt_property_title"
                style={{ fontSize: "10px" }}
              >
                Property Name
              </p>
              <h3
                className="receipt_property_name"
                style={{ fontSize: "13px" }}
              >
                {prodTitle}
              </h3>
            </div>
          </div>
        </div>

        <div className="d-flex w-100 align-items-baseline justify-content-between gap-1 mt-3">
          <div>
            <p className="receipt_property_title" style={{ fontSize: "8px" }}>
              Total Amount
            </p>
            <h3 className="receipt_property_name" style={{ fontSize: "10px" }}>
              {formatCurrency(12000000)}
            </h3>
          </div>

          <div>
            <p className="receipt_property_title" style={{ fontSize: "8px" }}>
              Total Paid
            </p>
            <h3 className="receipt_property_name" style={{ fontSize: "10px" }}>
              {formatCurrency(7000000)}
            </h3>
          </div>
        </div>
      </div>

      <div className="pending_receipt_current_payment">
        <h1 className="pending_receit_title">Receipts</h1>
        <div className="pending_receipt_card mt-3">
          <div className="d-flex w-100 align-items-center justify-content-between gap-2">
            <img
              width={40}
              height={42}
              style={{ objectFit: "cover", borderRadius: "7px" }}
              src={imageUrl}
              alt="apartment1"
            />

            <div className="property_details">
              <div>
                <p
                  className="receipt_property_title"
                  style={{ fontSize: "9px" }}
                >
                  Receipt Reference
                </p>
                <h3
                  className="receipt_property_name"
                  style={{ fontSize: "11px" }}
                >
                  {reference}
                </h3>
              </div>
            </div>
          </div>

          <div className="d-flex w-100 align-items-center justify-content-between gap-2 mt-3">
            <button className="accept_receipt">Accept</button>
            <button className="reject_receipt accept_receipt">Reject</button>
          </div>
        </div>
      </div>
      <div className="pending_receipt_confirmed_payments">
        <AcceptedPaymentsCard price={4000000} apartment="3 Bedroom Apartment" />
        <AcceptedPaymentsCard price={3000000} apartment="3 Bedroom Apartment" />
      </div>
    </article>
  );
}
