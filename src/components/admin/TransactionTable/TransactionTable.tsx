import { ReceiptTransaction } from "../../../types/admin";

interface ReceiptTableProp {
  receipt: ReceiptTransaction;
}

function ReceiptTable({ receipt }: ReceiptTableProp) {
  const {
    amount,
    currency,
    descriptionCode,
    id,
    imageUrl,
    multipartFile,
    reference,
    transactionStatus,
    userName,
  } = receipt;

  const stausColor = (status: string) => {
    if (status.toLowerCase() === "pending") {
      return "#f59e0b";
    } else if (
      status.toLowerCase() === "success" ||
      status.toLowerCase() === "approved"
    ) {
      return "#065f46";
    } else if (status.toLowerCase() === "failed") {
      return "#b91c1c";
    }
  };

  const stausBg = (status: string) => {
    if (status.toLowerCase() === "pending") {
      return "#fef3c7";
    } else if (
      status.toLowerCase() === "success" ||
      status.toLowerCase() === "approved"
    ) {
      return "#bbf7d0";
    } else if (status.toLowerCase() === "failed") {
      return "#fecaca";
    }
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{currency}</td>
      <td>{userName}</td>
      <td>{descriptionCode}</td>
      <td>{reference}</td>
      <td>{amount}</td>
      <td>{multipartFile}</td>
      <td title={imageUrl}>
        <img
          src={imageUrl}
          width={45}
          height={30}
          style={{ objectFit: "cover" }}
        />
      </td>
      <td
        style={{
          padding: "7px 10px",
          backgroundColor: stausBg(transactionStatus),
          color: stausColor(transactionStatus),
        }}
      >
        {transactionStatus}
      </td>
    </tr>
  );
}

export default ReceiptTable;
