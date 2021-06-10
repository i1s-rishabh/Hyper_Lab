import React from "react";
import web from "../src/Images/s1.svg";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <div className="img_body">
            <img src={props.imgsrc} className="card-img-top img-fluid" alt="image loading..." style={{width: "300px"}, {height: "300px"}} />
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/" className="btn btn-primary">
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
