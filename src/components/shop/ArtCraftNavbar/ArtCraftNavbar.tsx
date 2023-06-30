import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Data from "../../../Data.json";
import mobileView from "../../../utilities/mobileView";
import "../FashionNavbar/FashionNavbar.css";
import { useStoreContext } from "../../../contexts/StoreContext";
import { FaUserSecret } from "react-icons/fa";

export default function ArtCraftNavbar({ activeLink }: { activeLink: string }) {
  const [active, setActive] = useState(activeLink);

  const { cartQty, userName } = useStoreContext();

  const navigate = useNavigate();

  return (
    <Navbar
      bg="light"
      expand="sm"
      className={`homeNav navStyle shadow-sm ${mobileView() ? "px-2" : "px-5"}`}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src="/images/logo.png" alt="logo" width={50} />
        </Navbar.Brand>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
          className="w-75"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Fashion Page Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {Data.artCraftPage.artCraftNavbar.map(
                ({ innerHtml, link }, idx) => (
                  <Nav.Link
                    key={idx}
                    as={Link}
                    to={link}
                    className={
                      active === innerHtml.toLowerCase()
                        ? "menuLink activeNav"
                        : "menuLink"
                    }
                    onClick={() => setActive(innerHtml.toLowerCase())}
                  >
                    {innerHtml}
                  </Nav.Link>
                )
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Text className="nav-icons-container">
          {!userName && (
            <img
              src="/images/user.png"
              alt="user"
              onClick={() => navigate("/create-account")}
            />
          )}

          {userName && (
            <FaUserSecret
              className="user-icon"
              onClick={() => navigate("/user-profile/" + userName)}
            />
          )}
          <img
            src="/images/lock.png"
            alt="lock"
            onClick={() => navigate("/order")}
          />
          <span className="cart-notification-count">{cartQty}</span>
        </Navbar.Text>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
      </Container>
    </Navbar>
  );
}
