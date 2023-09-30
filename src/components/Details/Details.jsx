import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import { HiArrowRight } from "react-icons/hi";
import Buttons from "../Buttons/Buttons";
import kgImg from "../../images/kg.png";
import "./Details.css";

export default function Details() {
  const navigate = useNavigate();
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  const params = useParams();
  const datas = state.allProducts.find((product) => product.id == params.id);
  const checkBasket = state.basket.some((product) => product.id == params.id);

  return (
    <div className="details_container">
      <div className="details_linkBar">
        <span onClick={() => navigate(-1)} className="details_backLink">
          <HiArrowRight />
          Back
        </span>
      </div>
      <div className="datails_card">
        <div className="image_box">
          <img className="card_image" src={datas.image} alt="card_image" />
          <img src={kgImg} alt="" className="kg_image" />
        </div>
        <div className="main_content_box">
          <span className="card_category">{datas.category}</span>
          <div className="card_content">
            <span className="card_title">{datas.title}</span>
            <span style={{ color: "#8fc700" }}>|</span>
            <span className="card_price">
              {datas.price.toLocaleString()} USD
            </span>
          </div>
          <div className="card_information">
            <ul>
              <li>Organic: Yes</li>
              <li>Packaging weight: one kilogram</li>
            </ul>
          </div>
          {checkBasket && <Buttons {...datas} />}
          <button
            onClick={() =>
              dispath({ type: "ADD_TO_BASKET", payload: datas.id })
            }
            className="card_buy"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
