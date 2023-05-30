import { useRef, useState } from "react"
import "../../../pages/General/CreateAccount/CreateAccount.css"
import { useNavigate } from "react-router-dom"

export default function LoginForm() {
    const [PasswordType, setPasswordType] = useState("password")

    const navigate = useNavigate()

    const createAccountForm = useRef()
    const passwordReferCreateAcc = useRef()

    function changePasswordType() {
        if (PasswordType === "password" && passwordReferCreateAcc.current?.value) {
            setPasswordType("text")
        } else {
            setPasswordType("password")
        }
    }

    function handleRegister() {
        navigate("/art-craft")
    }

  return (
      <form ref={createAccountForm} className="register-account-form create-account-form" onSubmit={handleRegister}>
          <input type="text" placeholder="First Name" name="First Name" className="registerInputs" />
          <input type="text" placeholder="Last Name" name="Last Name" className="registerInputs" />
          <input type="email" placeholder="Email" name="email" className="registerInputs" />
          <div className='w-100 d-flex align-items-baseline justify-content-between'>
              <input ref={passwordReferCreateAcc} type={PasswordType} placeholder="Password" />
              <p onClick={changePasswordType}>{PasswordType === "password" ? "show" : "hide"}</p>
          </div>
          <button className='ca-btn'>CREATE ACCOUNT</button>
      </form>
  )
}
