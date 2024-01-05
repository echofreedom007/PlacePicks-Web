import React from "react";
import PropTypes from "prop-types";

import Card from "../../shared/components/UIElements/Card";

import "./PlaceItem.css";

const PlaceItem = ({ image, title, address, description }) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={image} alt={title} />
        </div>
        <div className="place-item__info">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="place-item__actions">
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

PlaceItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
};

export default PlaceItem;
