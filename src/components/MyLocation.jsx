// import { Form, Button } from ‘react-bootstrap’;

export default function MyLocation() {
  return (
    <section id="my-location-map contact-flex-container">
      <div className="map-addrees-contact">
        <iframe
          title="My Location"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: "1px solid #bcbaba", borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJg2W4dxDqNIgRfbdZ1L5nS1U&key=AIzaSyCnEDNv5YuTX4502s-7GTLZ2l_1uPafvcQ"
        ></iframe>
        <div className="map-address-card">
          <div className="inner-map-card-left">
            <h2 className="map-address fontStyles">
              ADDRESS
            </h2>
            <p className="mt-1">Monroeville, PA 15146</p>
          </div>
          <div className="inner-map-card-right">
            <h2 className="map-email fontStyles">
              EMAIL
            </h2>
            <a className="myEmail" href="mailto: tailordivya888@gmail.com">tailordivya888@gmail.com</a>
            <h2 className="map-phone fontStyles">
              PHONE
            </h2>
            <p className="myPhone">4126098389</p>
          </div>
        </div>
      </div>
    </section>
  );
}
