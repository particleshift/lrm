import React from "react";

const Map = ({ width, height }) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.735424152035!2d-91.65892128442397!3d41.98448996672841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e4f74a7fbb8d6b%3A0x86e16b6625c1a6cf!2sLiving%20Room%20Ministries%20Women&#39;s%20Center!5e0!3m2!1sen!2sus!4v1605249946328!5m2!1sen!2sus"
      width={width}
      height={height}
      frameBorder="0"
      //   style="border:0;"
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  );
};

export default Map;
