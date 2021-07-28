import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SHOW_MODAL_ADD_CARTRIDGE } from "../../../redux/types";
import ModalCartridgeForm from "../ModalAddForm/ModalCartridgeForm";
import "./MainApplications.scss";

export default function SelectBranchRequest() {
  const finishReques = useSelector((state) => state.finish.finishRequestCartridges);

  console.log(finishReques);
  const [anyState, setAnyState] = useState('')

  const [showCartridge, setShowCartridge] = useState(false);
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  return (
    <>
    {finishReques.map((finishRequest, index) =>  {
      return (

      <div key={index} className="main__apllication">
        <div className="main__apllication__preview__row">
          <div className="main__apllication__preview__row__list">
            <h4>Филиал</h4>
            <hr />
            <div>{finishRequest.descriptionField.branch}</div>
          </div>
          <div className="main__apllication__preview__row__list">
            <h4>Всего картриджей в заявке</h4>
            <hr />
            <div>{finishRequest.descriptionField.totalCount}</div>
          </div>

          <div className="main__apllication__preview__row__list">
            <h4>Примечание к заявке</h4>
            <hr />
            <div>{finishRequest.descriptionField.note || "отсутствуют"}</div>
          </div>
        </div>
        <div className="main__apllication__preview__row">
          <div className="main__apllication__preview__row__list">
            <h5>Дата создания заявки</h5>
            <hr />
            <div>{finishRequest.descriptionField.dateToRequest}</div>
          </div>
          <div className="main__apllication__preview__row__list">
            <h5>Несоответствие отправленных</h5>
            <hr />
            <div>{finishRequest.countTransferFromWarehouse}</div>
          </div>
          <div className="main__apllication__preview__row__list">
            <h5>Несоответствие полученных</h5>
            <hr />
            <div>{finishRequest.countActualReturn}</div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-info"
            onClick={() => setShowCartridge((prev) => !prev)}
          >
            Подробнее
          </button>
        </div>
        {showCartridge ? (
        <div className='about__cartridge'>
          <div className='about__cartridge__model'>

              <div className="">
                Модель
              </div>
              <div className="">
                Количество
            </div>
            {finishRequest.transferFromWarehouse.length !== 0 ?
            <>
            <div>Отправленные</div>
            <div>со склада</div>
            </>
            : null}
            
            {finishRequest.actualReturn.length !== 0 ?
            <>
            <div>Фактический</div>
            <div>Возврат</div>
            </>
            : null}
          </div>
          
            <div className='about__cartridge__count'>
              <div className='about__cartridge__count__block'>
            {finishRequest.cartridges.map((el, index) => {
              return (
                <div key={index} className="">
                  <div className="">
                    {el.model}
                  </div>
                  <div className="">
                  Кол-во {el.count}
                  </div>
                </div>
              );
            })}
            </div>

            <div className='about__cartridge__count__block'>
            {finishRequest.transferFromWarehouse.map((el, index) => {
              return (
                <div key={index} className="">
                  <div className="">
                    {el.model}
                  </div>
                  <div className="">
                    Кол-во {el.count}
                  </div>
                </div>
              );
            })}
            </div>
            <div className='about__cartridge__count__block'>
            {finishRequest.actualReturn.map((el, index) => {
              return (
                <div key={index} className="">
                  <div className="">
                    {el.model}
                  </div>
                  <div className="">
                    Кол-во {el.count}
                  </div>
                </div>
              );
            })}
            </div>
            </div>

            <div className='about__cartridge__btn'>
                <button 
                className='btn btn-info'
                onClick={()=> dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: true, typeModal: "transferFromWarehouse"} })}
            >
                  Отправили со склада
                </button>
                <button 
                className='btn btn-info'
                onClick={()=> dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: true, typeModal: "actualReturn"} })}
                >
                  Фактический возврат
                </button>
            <ModalCartridgeForm id={finishRequest.descriptionField.id} note={note} setNote={setNote} anyState={anyState} setAnyState={setAnyState}/>
            </div>
          </div>
        ) : null}
      </div>
      )
    })}
    </>
  );
}