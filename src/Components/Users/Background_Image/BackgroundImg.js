import React from "react";
import { MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";
import { IoIosRestaurant } from "react-icons/io";

const ProjectsPage = () => {
  return (
    <section className="text-center my-5">


      <MDBCol md="12" className="mb-4">
        <MDBCard className="card-image" style={{
          backgroundImage:
            "url(http://assets.simpleviewinc.com/simpleview/image/upload/crm/beaumont/FudruckersBurger0-ff5b9ab95056b36_ff5b9b98-5056-b365-ab001fa74adbfb29.jpg)"
        }}>

          <div>

            <h6 style={{ color: "#d70f64", fontWeight: "bold" }} >
              <IoIosRestaurant />
              <strong> Restaurant</strong>
            </h6>
            <h3 style={{ color: "#d70f64" }} className="py-3 font-weight-bold">
              <strong >Food Network</strong>
            </h3>
            <h5 style={{ borderRadius: "5px", border: "2px  solid white", width: "60%", textAlign: "center", margin: "0 auto", color: "#d70f64", fontWeight: "bold" }}>Delivery 50 min 👇</h5>
          </div>
        </MDBCard>
      </MDBCol>



    </section>
  );
}

export default ProjectsPage;