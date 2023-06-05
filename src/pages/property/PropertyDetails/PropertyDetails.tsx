// import { useState } from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/general/Footer/Footer";
import PropertyNavbar from "../../../components/property/PropertyNavbar/PropertyNavbar";
import { usePropertyContext } from "../../../contexts/PropertyContext";
import formatCurrency from "../../../utilities/FormatCurrency";
import "./PropertyDetails.css";
import { Alert } from "react-bootstrap";

export default function PropertyDetails() {
  // const [activeTab, setActiveTab] = useState("description")

  // NAVIGATE TO PAGES
  const navigate = useNavigate();

  function navigateToContact() {
    navigate("/contact-us");
  }
  function navigateToPersonalDetails() {
    navigate("/personal-details");
  }

  // FROM CONTEXT API
  const { propertyItem } = usePropertyContext();

  if (propertyItem === null) return <Alert variant="danger"><p>Item not found</p></Alert>;

  // RESPONSIVE BREAKPOINTS FOR CAROUSEL
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1200, min: 576 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <main className="property-main" id="property-main-details">
        <PropertyNavbar activeLink="" />

        <div className="property-details">
          <div className="property-details-slider">
            {propertyItem.imagesList ? (
              <Carousel
                responsive={responsive}
                showDots
                infinite
                containerClass="carousel-container"
              >
                <img
                  src={propertyItem.imagesList[0]?.imageUrl}
                  alt={`apartment-1`}
                />
                <img
                  src={propertyItem.imagesList[1]?.imageUrl}
                  alt={`apartment-2`}
                />
                {propertyItem.multipartFile ? (
                  <video src={propertyItem.multipartFile} autoPlay muted loop />
                ) : (
                  <img
                    src={propertyItem.imagesList[2]?.imageUrl}
                    alt={`apartment-3`}
                  />
                )}
              </Carousel>
            ) : (
              <Carousel
                responsive={responsive}
                showDots
                infinite
                containerClass="carousel-container"
              >
                <img src={propertyItem.imageUrl} alt={propertyItem.description} />
              </Carousel>
            )}
          </div>

          <div className="property-details-desc">
            <div className="property-details-link">
              Home - {"apartment"} -{" "}
              <span>
                {propertyItem.description} in {propertyItem.location}
              </span>
            </div>

            <h2>{propertyItem.description}</h2>
            <p className="about-property">{propertyItem.productSize}</p>

            {/* <div className="property-details-desc-highlights">
                <h4>Highlights:</h4>

                <ul>
                  {propertyItem.listDesc.map((list, idx) => (
                    <li key={idx}>{list}</li>
                  ))}
                </ul>
              </div> */}

            <div className="property-details-price">
              {/* <span>
                  Rooms
                  <h6>{propertyItem.roomCount}</h6>
                </span>
                <div className="lineVertical" />
                <span>
                  Toilet
                  <h6>{propertyItem.toiletCount}</h6>
                </span> */}
              {/* <div className="lineVertical" /> */}
              <h1>{formatCurrency(propertyItem.amount)}</h1>
            </div>

            <div className="pay-btn-group">
              <button
                className="property-pay"
                onClick={navigateToPersonalDetails}
              >
                Pay
              </button>
              <button className="property-contact" onClick={navigateToContact}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>

      <section>
        {/* PROPERTY PAGE DESCRIPTION TAB */}
        {/* <div className="details-page-tab">
            <div className="details-page-tab-title">
              <div
                onClick={() => setActiveTab("description")}
                className={activeTab === "description" ? "activeItemsTab" : ""}
              >
                Description
              </div>
            </div>
            <div className="details-page-tab-title">
              <div
                onClick={() => setActiveTab("location")}
                className={activeTab === "location" ? "activeItemsTab" : ""}
              >
                Location
              </div>
            </div>
          </div>

          <div className="details-page-tab-description">
            <div
              style={{
                display: activeTab === "description" ? "block" : "none",
              }}
            >
              <div className="art-description-tab">
                <h1>Product</h1>
                <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.`}</span>

                <h1>Key Ingredients</h1>
                <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.`}</span>

                <h1>How To Apply</h1>
                <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.`}</span>
              </div>
            </div>
            <div
              style={{ display: activeTab === "location" ? "block" : "none" }}
            >
              <div className="art-description-tab">
                <h1>Location</h1>
                <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.`}</span>
              </div>
            </div>
          </div> */}

        {/* EXTRA PROPERTIES */}
        {/* <div className="property-group">
            <PropertyBox
              img="/assets/Property/apartment1.png"
              is3d={true}
              title="3 Bedroom flat Apartment"
              location="Ikeja Lagos"
            />
            <PropertyBox
              img="/assets/Property/apartment2.png"
              is3d={true}
              title="3 Bedroom flat Apartment"
              location="Ajah, Lagos"
            />
            <PropertyBox
              img="/assets/Property/apartment3.png"
              is3d={false}
              title="1 Bedroom flat Apartment"
              location="Samolu, Lagos"
            />
          </div> */}
      </section>

      <Footer />
    </div>
  );
}
