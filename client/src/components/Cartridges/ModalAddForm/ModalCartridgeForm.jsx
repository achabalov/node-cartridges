import React from "react";
import SelectModel from "../formComponent/SelectModal";
import SelectCartridgeCount from "../formComponent/SelectCartridgeCount";
import "./ModalCartridgeForm.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  SHOW_MODAL_ADD_CARTRIDGE,
} from "../../../redux/types";

export default function ModalCartridgeForm({ id, note, setNote, anyState, setAnyState}) {
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
              <button className='btn btn-success' onClick={() => 
                dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: false} })
              }>Подтвердить заявку</button>
            ) : null
          }
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: false} })
              dispatch({type: "CARTRIDGE_RESET"})
            }
            }
          >
            Отменить
          </button>
        </div>
      </div>
    ) : typeModal === 'transferFromWarehouse' ? (
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
        <SelectModel id={id} flag={'transferFromWarehouse'} note={note} setNote={setNote} anyState={anyState} setAnyState={setAnyState}/>
        {

          cartridges.length !== 0 ? (
            <button className='btn btn-success' onClick={() => 
              dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: false} })
            }>Подтвердить заявку</button>
          ) : null
        }
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: false} })
            dispatch({type: "CARTRIDGE_RESET"})
          }
          }
        >
          Отменить
        </button>
      </div>
    </div>
    ) : typeModal === 'actualReturn' ? (
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
        <SelectModel id={id} flag={'actualReturn'} note={note} setNote={setNote} anyState={anyState} setAnyState={setAnyState}/>
        {

          cartridges.length !== 0 ? (
            <button className='btn btn-success' onClick={() => 
              dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: false} })
            }>Подтвердить заявку</button>
          ) : null
        }
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: false} })
            dispatch({type: "CARTRIDGE_RESET"})
          }
          }
        >
          Отменить
        </button>
      </div>
    </div>
    ) : null
}
