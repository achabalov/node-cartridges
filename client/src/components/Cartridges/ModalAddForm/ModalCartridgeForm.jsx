import React from "react";
import SelectModel from "../formComponent/SelectModal";
import SelectCartridgeCount from "../formComponent/SelectCartridgeCount";
import "./ModalCartridgeForm.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_NEW_CARTRIDGE,
  DEVICE_FILTER_BRANCH,
  SHOW_MODAL_ADD_CARTRIDGE,
} from "../../../redux/types";

export default function ModalCartridgeForm({ note, setNote}) {
  const modal = useSelector((state) => state.equipment.modal);
  const typeModal = useSelector((state) => state.equipment.typeModal);
  const model = useSelector((state) => state.cartridge.model);
  const count = useSelector((state) => state.cartridge.count);
  const branch = useSelector((state) => state.equipment.branch);
  const cartridges = useSelector((state) => state.equipment.cartridges);
  const dispatch = useDispatch();


  
    return typeModal === "addCartridge" ? (
      <div
        className={modal ? "modal__select active" : "modal__select"}
        onClick={() =>
          dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: false} })
        }
      >
        <div
          className={
            modal
              ? "modal__select__container active"
              : "modal__select__container"
          }
          onClick={(e) => e.stopPropagation()}
        >
          <label htmlFor="">Выберите модель</label>
          <SelectModel note={note} setNote={setNote}/>
          {

            cartridges.length !== 0 ? (
              <button className='btn btn-success'>Подтвердить заявку</button>
            ) : null

          }
          {/* <label htmlFor="">Укажите количество</label> */}
          {/* <SelectCartridgeCount /> */}
          {model ? (
            <button
              className="btn btn-success"
              onClick={() => {
                const id = Date.now();
                dispatch({
                  type: ADD_NEW_CARTRIDGE,
                  payload: { id, branch, model, count },
                });
                dispatch({ type: DEVICE_FILTER_BRANCH, payload: branch });
                dispatch({ type: "RESET", payload: {count, model} });
              }}
            >
              Добавить
            </button>
          ) : (
            ""
          )}
          <button
            className="btn btn-danger"
            onClick={() =>
              dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: false} })
            }
          >
            Закрыть
          </button>
        </div>
      </div>
    ) : typeModal === 'addCartridgeCount' ? (
        <div
        className={modal ? "modal__select active" : "modal__select"}
        onClick={() =>
            dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: false} })
        }
      >
        <div
          className={
            modal
              ? "modal__select__container active"
              : "modal__select__container"
          }
          onClick={(e) => e.stopPropagation()}
        >
          <label htmlFor="">Выберите нужное количество количество</label>
          <SelectCartridgeCount />
 
            <button
              className="btn btn-success" 
              onClick={() => {
                dispatch({
                  type: 'CHANGE_CARTRIDGE_COUNT',
                  payload: { model, count },
                });
                dispatch({ type: "RESET", payload: count });
              }}
            >
              Изменить
            </button>
          
          <button
            className="btn btn-danger"
            onClick={() =>
              dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: false} })
            }
          >
            Закрыть
          </button>
        </div>
      </div>
    ) : null
}


