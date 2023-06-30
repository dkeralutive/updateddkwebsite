/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArtCraftNavbar from "../../../components/shop/ArtCraftNavbar/ArtCraftNavbar";
import { useStoreContext } from "../../../contexts/StoreContext";
import ErrorModal from "../../../modals/Error";
import Spinner from "../../../utilities/Spinner";
import isString from "../../../utilities/isString";
import "../CreateAccount/CreateAccount.css";

export default function UploadPayment() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { userName, userToken } = useStoreContext();
  // ** FIle input states
  const [fileInput, setFileInput] = useState<File[] | undefined>([]);
  const [productImgs, setProductImgs] = useState<string[]>([]);

  const uploadPaymentFormRef = useRef<null | HTMLFormElement>(null);
  const currencyRef = useRef<null | HTMLInputElement>(null);
  const amountRef = useRef<null | HTMLInputElement>(null);
  const descriptionRef = useRef<null | HTMLInputElement>(null);
  const userNameRef = useRef<null | HTMLInputElement>(null);

  const navigate = useNavigate();

  function preloadForm() {
    if (userNameRef.current) userNameRef.current.value = userName;
  }

  // Handle onchange to upload image
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const selectedFiles: string[] = [];
    const targetFiles = e.target?.files;

    // Convert `FileList` into a `File[]`
    const targetFilesObject = targetFiles ? [...targetFiles] : null;
    setFileInput((prev) => {
      if (prev && targetFilesObject) {
        return targetFilesObject;
      }
    });

    if (targetFilesObject) {
      targetFilesObject.map((file) => {
        return selectedFiles.push(URL.createObjectURL(file));
      });
    }

    setProductImgs(selectedFiles);
  }

  async function handleUploadPayment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("apiKey", userToken);

    const formdata = new FormData();

    if (fileInput) {
      fileInput.forEach((img, idx) =>
        formdata.append("files", img, fileInput[idx].name)
      );
    }
    formdata.append("userName", isString(userName.toUpperCase()));
    formdata.append("currency", isString(currencyRef.current?.value.toUpperCase()));
    formdata.append("amount", isString(amountRef.current?.value.toUpperCase()));
    formdata.append("description", isString(descriptionRef.current?.value.toUpperCase()));

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    await fetch(
      `${import.meta.env.VITE_BASEURL}/api/v1/transaction/upload`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.responseDto.code == "dkss") {
          setIsLoading(false);
          uploadPaymentFormRef.current?.reset();
          setProductImgs([]);
          navigate(`/user-profile/${userName}`);
        } else {
          setIsLoading(false);
          setError(result.responseDto.message);
        }
      })
      .catch(() => {
        setIsLoading(false);
        setError("Cannot connect to server");
      });
  }

  useEffect(() => {
    preloadForm();
  }, []);

  return (
    <div>
      <ArtCraftNavbar activeLink="" />

      <section
        className="create-account-container"
        style={{ marginTop: "8rem" }}
      >
        <form
          className="create-account-form"
          ref={uploadPaymentFormRef}
          onSubmit={handleUploadPayment}
        >
          <input
            type="file"
            name=""
            id=""
            onChange={handleFileChange}
            accept="image/*, application/*, .doc, .docx"
          />

          <input
            type="text"
            placeholder="Description"
            className="username-field"
            ref={descriptionRef}
          />

          <input
            type="text"
            placeholder="Amount"
            className="username-field"
            ref={amountRef}
          />

          <input
            type="text"
            placeholder="Currency"
            className="username-field"
            ref={currencyRef}
          />

          <input
            type="text"
            placeholder="UserName"
            className="username-field"
            ref={userNameRef}
          />

          <button type="submit" className="ca-btn">
            Upload
          </button>
        </form>

        <div className="create-account-container mt-2">
          {productImgs.length === 1 ? (
            productImgs.map((img, idx) => (
              <img
                className="w-100 d-flex align-items-center justify-content-center"
                style={{ height: "140px", objectFit: "cover" }}
                key={idx}
                src={img}
                alt={`img-${productImgs[idx]}`}
              />
            ))
          ) : (
            <img
              className="w-100 d-flex align-items-center justify-content-center"
              style={{ height: "140px", objectFit: "cover" }}
              src="/images/Admin/product-img.png"
              alt="product-img"
            />
          )}
        </div>
      </section>

      {error && <ErrorModal errorMsg={error} callbackFunction={setError} />}
      {isLoading && <Spinner animationType="grow" />}
    </div>
  );
}
