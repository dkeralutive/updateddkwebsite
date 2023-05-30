import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorModal from '../../../modals/Error';
import NewsletterSuccess from "../../../modals/NewsletterSuccess";
import Spinner from '../../../utilities/Spinner';
import "./Footer.css";


export default function Footer() {

    const [isLoading, setIsLoading] = useState("")
    const [error, setError] = useState("")

    // Ref for newsletter input
    const newsLetterRef = useRef(null);
    const userEmailRef = useRef(null);

    // ** Welcome admin values
    const { isNewsLetterSuccess, setIsNewsLetterSuccess } = useContext();

    // ** Handle submit newsletter
    async function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true)

        const myHeaders = new Headers();
        myHeaders.append("apiKey", apiKey);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "emailAddress": userEmailRef.current?.value
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        if (userEmailRef.current.value) {
            await fetch(`${baseUrl}/api/v1/subscription/subcribe`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.responseDto.code === "dkss") {
                        setIsLoading(false)
                        newsLetterRef.current?.reset()
                        setIsNewsLetterSuccess(true);
                    } else {
                        setIsLoading(false)
                        setError(result.responseDto.message)
                    }
                })
                .catch(error => {
                    setIsLoading(false)
                    setError('Cannot connect to server')
                });
        }


    }


    return (
        <div>
            <footer>
                <div className="footer-top">
                    <div className="footer-col-1">
                        <img src="/images/logo.png" alt="logo" />
                        <span>
                            Clarity gives you the blocks and components you <br />
                            need to create a truly professional website.
                        </span>
                    </div>

                    <div className="footer-col-2">
                        <h4>Company</h4>
                        <Link to="/about">About</Link>
                        <Link to="/features">Features</Link>
                        <Link to="/work">Work</Link>
                        <Link to="/career">Career</Link>
                    </div>

                    <div className="footer-col-2">
                        <h4>HELP</h4>
                        <Link to="/customer-support">Customer Support</Link>
                        <Link to="/delivery-detail" className="red">
                            Delivery Details
                        </Link>
                        <Link to="/terms-and-conditions">Terms & Conditions</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>

                    <div className="footer-col-2 footer-col-3">
                        <h4>NEWSLETTER</h4>
                        <form ref={newsLetterRef} id="footer-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="User Email"
                                placeholder="Enter your email address"
                                ref={userEmailRef}
                                required
                            />
                            <button>Subscribe Now</button>
                        </form>
                    </div>
                </div>

                <div className="copyright">
                    © Copyright {new Date().getFullYear()}, All Rights Reserved by
                    ClarityUI
                </div>
            </footer>
            {isNewsLetterSuccess && <NewsletterSuccess />}
            {isLoading && <Spinner />}
            {error && <ErrorModal Error={error} callback={setError} />}
        </div>
    )
}
