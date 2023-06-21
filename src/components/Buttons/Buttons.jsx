import React, { useContext } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import "./Buttons.css";

export default function Buttons(props) {
  const { dispath } = useContext(ProductDispath);
  const { state } = useContext(ProductContext);
  const { id } = props;
  const countItem = state.basket.find((product) => product.id === id);
  return (
    <div className="basket_buttons">
      <span
        tabIndex={0}
        role='button'
        onClick={() => dispath({ type: "INCREASE", payload: id })}
        onKeyDown={(e)=> {
          if (e.keyCode === 13) {
            dispath({ type: "INCREASE", payload: id })
          }
        }}
        className="basket_plus"
      >
        <AiOutlinePlus />
      </span>
      <span className="counter_number">{props.count}</span>
      {countItem.count === 1 ? (
        <button
          onClick={() => dispath({ type: "REMOVE_FROM_BASKET", payload: id })}
          className="basket_minus"
        >
          <RiDeleteBinLine />
        </button>
      ) : (
        <button
          onClick={() => dispath({ type: "DECREASE", payload: id })}
          className="basket_minus"
        >
          <AiOutlineMinus />
        </button>
      )}
    </div>
  );
}
