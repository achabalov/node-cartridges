import React, {useCallback} from "react";
import SelectModel from "../formComponent/SelectModal";
import "./ModalCartridgeForm.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  ACTUAL_RETURN,
  ADD_TRANSFER_WAREHOUSE,
  SHOW_MODAL_ADD_CARTRIDGE,
} from "../../../redux/types";
import {cartridges_types} from "../../../redux/defaultValues";

export default function ModalCartridgeForm({ id }) {
  const modal = useSelector((state) => state.equipment.modal);
  const typeModal = useSelector((state) => state.equipment.typeModal);
  const cartridges = useSelector((state) => state.equipment.cartridges);
  const dispatch = useDispatch();

  const fromWarehouseHandler = (el, branch, value) => {
    dispatch({type: ADD_TRANSFER_WAREHOUSE,
      payload: {id, branch, model: el.model, count: +value}})
    cartridges_types.forEach((elem) => {
      if (elem.model === el.model) {
        elem.count = value;
      }
    })
  }

  const actualReturnHandler = (el, branch, value) => {
    dispatch({type: ACTUAL_RETURN,
      payload: {id, branch, model: el.model, count: +value}})
    cartridges_types.forEach((elem) => {
      if (elem.model === el.model) {
        elem.count = value;
      }
    })
  }

  const addModalHandler = (el, branch, value) => {
    console.log(el)
    dispatch({type: 'ADD_MODEL_COUNT',
      payload: {id: Date.now(), branch, model: el.model, count: +value}})
    cartridges_types.forEach((elem) => {
      if (elem.model === el.model) {
        elem.count = value;
      }
    })
  }

  const modalOnChangeHandler = useCallback(() => {
    switch (typeModal) {
      case 'transferFromWarehouse':
        return fromWarehouseHandler
      case 'actualReturn':
        return actualReturnHandler
      default: return addModalHandler
    }
  }, [typeModal])

    return (
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
         <SelectModel onChange={modalOnChangeHandler()} />
        }
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
    ) 
  }
