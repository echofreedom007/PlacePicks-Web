import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./Map.css";

const Map = ({ className, style, center, zoom }) => {
  const mapRef = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, []);

  return <div ref={mapRef} className={`map ${className}`} style={style}></div>;
};

Map.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  center: PropTypes.object,
  zoom: PropTypes.number,
};

export default Map;
