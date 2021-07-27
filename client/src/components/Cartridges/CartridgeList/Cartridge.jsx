import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DOCX,
  REMOVE_ALL_CARTRIDGE,
  SHOW_MODAL_ADD_CARTRIDGE,
} from "../../../redux/types";

import "./Cartridge.scss";

export default function Cartridge({note}) {
  const cartridge = useSelector((state) => state.equipment.cartridges);
  const branch = useSelector((state) => state.equipment.branch);
  const dispatch = useDispatch();

  const totalCount = cartridge.reduce((prev, value) => prev+ +value.count, 0);
  const [dateImport, setDateImport] = useState('');
  const description = {
    branch,
    id: Date.now(),
    dateToRequest: dateImport,
    totalCount,
    note
  }

  useEffect(()=> {
    const date = new Date();
    const year = date.getFullYear();
    console.log(date.getMonth()< 10);
    const month = date.getMonth()+1 < 10 ? '0' +(date.getMonth()+1): date.getMonth()+1;
    const day = date.getDate();
    setDateImport(day+':'+month+':'+year)
  }, [])
  
  return (
    <>
    {cartridge.length !== 0 ? (
      <>
      <div className='preview__apllication'>
        <div className='preview__apllication__cartridge'>
        <h3>Картриджи</h3>
        <hr />
        {cartridge.map((el, index) => {
          return (
            <div key={index}>
            <div>{el.model} в количестве {el.count}</div>
          </div>
          )
        })}
        <div>Примечания {note || 'отсутствуют'}</div>
        <div>Итого картриджей в заявке {totalCount}</div>
      </div>
        <div className='preview__apllication__option'>
          <button 
          className='btn btn-success'
          onClick={()=> {
            dispatch({type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: true, typeModal: 'addCartridge'}})
          }}
          >Изменить</button>
          <button 
          className='btn btn-danger'
          onClick={()=> {
            dispatch({type: 'CARTRIDGE_RESET'})
          }}
          >Удалить</button>
        </div>
      </div>
      <div>
          <hr />
          <h3>Проверьте данные которые внесли, если всё верно сформируйте</h3>
          <br />
          <button
            className="btn btn-success"
            onClick={() => {
              dispatch({ type: "FINISH_ADDED", payload: cartridge, description });
              dispatch({ type: REMOVE_ALL_CARTRIDGE });
              dispatch({ type: DOCX, payload: cartridge });
            }}
          >
            Сформировать заявку и скачать реестр
          </button>
        </div>
      </> ) : null
    }
    </>
  );
}
