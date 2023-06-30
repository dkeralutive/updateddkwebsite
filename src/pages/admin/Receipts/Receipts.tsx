/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import CompleteReceiptCard from "../../../components/admin/CompleteReceiptCard/CompleteReceiptCard";
import PendingReceiptCard from "../../../components/admin/PendingReceiptCard/PendingReceiptCard";
import Sidebar from "../../../components/admin/Sidebar/Sidebar";
import AdminTitleBar from "../../../components/admin/Titlebar/TitleBar";
import ReceiptTable from "../../../components/admin/TransactionTable/TransactionTable";
import { useAdminContext } from "../../../contexts/AdminContext";
import ErrorModal from "../../../modals/Error";
import { ReceiptResponseProp, ReceiptTransaction } from "../../../types/admin";
import "../Products/Product.css";
import "./Receipts.css";

export default function Receipts() {
  const [activeTab, setActiveTab] = useState("all");
  const [error, setError] = useState("");
  const [data, setData] = useState<ReceiptTransaction[]>([]);

  // Context
  const { token } = useAdminContext();

  // Get all Transactions
  async function getAllTransactions() {
    const myHeaders = new Headers();
    myHeaders.append("apiKey", token);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      pageSize: 10,
      pageNo: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    const res = await fetch(
      `${import.meta.env.VITE_BASEURL}/api/v1/transaction/all/page`,
      requestOptions
    );

    if (!res.ok) return setError("Cannot connect to server");

    const data: ReceiptResponseProp = await res.json();
    if (data.responseDto.code === "dkss") {
      setData(data.transactionList);
    }
  }

  // Pending transactions
  const pendingReceipts = data.filter(
    (el) => el.transactionStatus.toLowerCase() === "pending"
  );

  useEffect(() => {
    getAllTransactions();
  }, [data]);

  return (
    <main className="admin-main">
      <Sidebar active="receipts" />

      <div className="admin-detail">
        <AdminTitleBar />

        <h2 className="receipt-title">Receipt</h2>

        <div className="receipt-tabs">
          <button
            className={activeTab === "all" ? "tab_btn active_tab" : "tab_btn"}
            onClick={() => setActiveTab("all")}
          >
            All Reciept
          </button>

          <button
            className={
              activeTab === "pending" ? "tab_btn active_tab" : "tab_btn"
            }
            onClick={() => setActiveTab("pending")}
          >
            Pending Reciept
          </button>

          <button
            className={
              activeTab === "completed" ? "tab_btn active_tab" : "tab_btn"
            }
            onClick={() => setActiveTab("completed")}
          >
            Completed Receipt
          </button>

          <button
            className={
              activeTab === "rejected" ? "tab_btn active_tab" : "tab_btn"
            }
            onClick={() => setActiveTab("rejected")}
          >
            Rejected Reciept
          </button>
        </div>

        <div className="display_tabs">
          <div
            style={{ display: activeTab === "all" ? "block" : "none" }}
            className="display_tab w-100"
          >
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Currency</th>
                  <th>Username</th>
                  <th>Description Code</th>
                  <th>Reference</th>
                  <th>Amount</th>
                  <th>Multipart File</th>
                  <th>Image</th>
                  <th>Transaction Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((el) => (
                  <ReceiptTable key={el.id} receipt={el} />
                ))}
              </tbody>
            </Table>
          </div>

          <div
            style={{ display: activeTab === "pending" ? "block" : "none" }}
            className="display_tab"
          >
            <Row xs={1} md={2} lg={4}>
              {pendingReceipts.map((el) => (
                <Col key={el.id}>
                  <PendingReceiptCard receipt={el} />
                </Col>
              ))}
            </Row>
          </div>

          <div
            style={{ display: activeTab === "completed" ? "block" : "none" }}
            className="display_tab"
          >
            <CompleteReceiptCard isRejected={false} reason="" />
          </div>

          <div
            style={{ display: activeTab === "rejected" ? "block" : "none" }}
            className="display_tab"
          >
            <CompleteReceiptCard isRejected reason="Money not confirmed" />
          </div>
        </div>
      </div>

      {error && <ErrorModal errorMsg={error} callbackFunction={setError} />}
    </main>
  );
}
