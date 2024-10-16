import React, { useContext } from "react";
import { sendPrice } from "../../Offer";
import { ProductContext } from "../Context/ContextProvider";
import freeImg from "../../images/free.svg";
export default function SendProducts() {
  const { state } = useContext(ProductContext);

  return (
    <div className="send_products">
      <div className="send_info_price">
        <span>Total Shipping</span>
        <span>
          {state.totalPrice - state.offerPrice <= 100_000
            ? `${sendPrice.toLocaleString()} USD`
            : "Free"}
        </span>
      </div>
      {state.totalPrice - state.offerPrice > 100_000 && (
        <div className="send_free_img">
          <img src={freeImg} alt="free" />
        </div>
      )}
    </div>
  );
}
