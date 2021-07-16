import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_CARTRIDGE } from "../../../redux/types";
import "./Cartridge.scss";

export default function Cartridge() {
  
  const cartridge = useSelector((state) => state.equipment.cartridges);
  const dispatch = useDispatch();
  
  return (
    <div className='cartridge__container'>
      {cartridge.map((request, index) => {
        return (
          <div key={index} className="cartridge">
            <div className="cartridge__branch">Филиал {request.branch}</div>
            <div className="cartridge__model">картридж {request.model}</div>
            <div className="cartridge__count">Колличество {request.count}</div>
            <div className="cartridge__button">
              <button
                className="btn btn-success"
                onClick={() =>
                  dispatch({ type: "ADDED_FINISH", payload: request })
                }
              >
                Добавить
              </button>
              <button
                className="btn btn-danger"
                onClick={() =>
                  dispatch({ type: REMOVE_CARTRIDGE, payload: request.id })
                }
              >
                Удалить
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
