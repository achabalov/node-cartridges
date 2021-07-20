import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DOCX,
  FINISH_REQUEST,
  REMOVE_ALL_CARTRIDGE,
} from "../../../redux/types";

import "./Cartridge.scss";

export default function Cartridge({note}) {
  const cartridge = useSelector((state) => state.equipment.cartridges);
  const dispatch = useDispatch();

  const totalCount = cartridge.reduce((prev, value) => prev+ +value.count, 0);

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
          <button className='btn btn-success'>Изменить</button>
          <button className='btn btn-danger'>Удалить</button>
          <button className='btn btn-warning'>Отложить</button>
        </div>
      </div>
      </> ) : null
    }

      {cartridge.length !== 0 ? (
        <div>
          <hr />
          <h3>Проверьте данные которые внесли, если всё верно сформируйте</h3>
          <br />
          <button
            className="btn btn-success"
            onClick={() => {
              dispatch({ type: FINISH_REQUEST, payload: cartridge });
              dispatch({ type: REMOVE_ALL_CARTRIDGE });
              dispatch({ type: DOCX, payload: cartridge });
            }}
          >
            Сформировать заявку и скачать реестр
          </button>
        </div>
      ) : null}
    </>
  );
}

// {cartridge.map((request, index) => {
//   return (
//     <div key={index} className="cartridge">
//       <div className="cartridge__branch">Филиал {request.branch}</div>
//       <div className="cartridge__model">картридж {request.model}</div>
//       <div className="cartridge__count">Колличество {request.count}</div>
//       <div className="cartridge__button">
//         <button
//           className="btn btn-success"
//           onClick={() => {
//             dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: true, typeModal: 'addCartridgeCount', id: request.id} })
//           }
//           }
//         >
//           Добавить
//         </button>
//         <button
//           className="btn btn-danger"
//           onClick={() =>
//             dispatch({ type: REMOVE_CARTRIDGE, payload: request.id })
//           }
//         >
//           Удалить
//         </button>
//       </div>
//     </div>
//   );
// })}
