import React from "react";

const DeliveryBoy = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-around service">
        <div>
          <h2>Fruits is available for Android <br /> and IOS</h2>
        <img 
          className="imgs"
          src="https://parathastore.vercel.app/assets/play_store-25MAnoNl.png"
          alt=""
          />

        <img
          className="imgs"
          src="https://parathastore.vercel.app/assets/app_store-aoAyJ2T_.png"
          alt=""
          />
          </div>
        <div>
          <img
          className="d-img"
            src="https://parathastore.vercel.app/assets/mobile_bike-mOS0gbAl.gif"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default DeliveryBoy;
