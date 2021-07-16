// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { DATA_EXPORT_IN_REPAIR, DATA_EXPORT_TO_SU, DATA_IMPORT_OF_REPAIR } from '../../redux/types';
// import MyForm from '../DayPickerInput/DayPickerInput';
// import './device.scss';

// export default function Devices({device}) {
//     const dispatch = useDispatch();

//     // повторяющийся код отслеживания элементов
//     const [dateExportToRepair, setdataExportToRepair] = useState({
//         selectedDay: undefined,
//         isEmpty: true,
//         isDisabled: false,
//       })
//       useEffect(()=> {
//         dateExportToRepair.selectedDay && dispatch({type: DATA_EXPORT_IN_REPAIR, payload: dateExportToRepair, id: device.id})
//       }, [dateExportToRepair])

//       const [dateImportOfRepair, setDateImportOfRepair] = useState({
//         selectedDay: undefined,
//         isEmpty: true,
//         isDisabled: false,
//       })
//       useEffect(()=> {
//         dateImportOfRepair.selectedDay && dispatch({type: DATA_IMPORT_OF_REPAIR, payload: dateImportOfRepair, id: device.id})
//       }, [dateImportOfRepair])

//       const [dateExportToSU, setDateExportToSU] = useState({
//         selectedDay: undefined,
//         isEmpty: true,
//         isDisabled: false,
//       })
//       useEffect(()=> {
//         dateExportToSU.selectedDay && dispatch({type: DATA_EXPORT_TO_SU, payload: dateExportToSU, id: device.id})
//       }, [dateExportToSU])

//       // форму надо разбить на мелкие компоненты
//     return (
//         <li>
//             <div className='device'>
//                 <div className='device__list'>
//                     <span>Тип устройства</span>
//                     <span>{device.typeDevices}</span>
//                 </div>
//                 <div className='device__list'>
//                     <span>Название устройства</span>
//                     <span>{device.deviceName}</span>
//                 </div>
//                 <div className='device__list'>
//                     <span>Инвентарный номер</span>
//                     <span>{device.inventoryNumber}</span>
//                 </div>
//                 <div className='device__list'>
//                     <span>Дата прибытия в комитет</span>
//                     <span className='device__list__date'>{device.dateImportOnSU.selectedDay.toLocaleDateString()}</span>
//                     <button className='btn btn-success'>Изменить</button>
//                 </div>
//                 <div className='device__list'>
//                     <span>Дата отправки отправки в ремонт</span>
//                     <span className='device__list__date'>{device.dateExportOnRepair.selectedDay !== undefined ? device.dateExportOnRepair.selectedDay.toLocaleDateString(): '-'}</span>
//                     <MyForm date={dateExportToRepair} setTimeState={setdataExportToRepair}/>
//                 </div>
//                 <div className='device__list'>
//                     <span>Дата возвращения с ремонта</span>
//                     <span className='device__list__date'>{device.dateImportOfRepair.selectedDay !== undefined ? device.dateImportOfRepair.selectedDay.toLocaleDateString(): '-'}</span>
//                     <MyForm date={dateImportOfRepair} setTimeState={setDateImportOfRepair} />
//                 </div>
//                 <div className='device__list'>
//                     <span>Дата отправки на СУ</span>
//                     <span className='device__list__date'>{device.dateExportToSU.selectedDay !== undefined ? device.dateExportToSU.selectedDay.toLocaleDateString(): '-'}</span>
//                     <MyForm className='asdqwe' date={dateExportToSU} setTimeState={setDateExportToSU} />
//                 </div>

//             </div>
//         </li>
//     )
// }

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  DATA_EXPORT_IN_REPAIR,
  DATA_EXPORT_ON_SU,
  DATA_EXPORT_TO_SU,
  DATA_IMPORT_OF_REPAIR,
} from "../../redux/types";
import MyForm from "../DayPickerInput/DayPickerInput";
import "./device.scss";

export default function Devices({ device }) {
  const dispatch = useDispatch();

  // повторяющийся код отслеживания элементов
  const [dateExportToRepair, setdataExportToRepair] = useState({
    selectedDay: undefined,
    isEmpty: true,
    isDisabled: false,
  });

  const [dateImportOfRepair, setDateImportOfRepair] = useState({
    selectedDay: undefined,
    isEmpty: true,
    isDisabled: false,
  });

  const [dateExportToSU, setDateExportToSU] = useState({
    selectedDay: undefined,
    isEmpty: true,
    isDisabled: false,
  });

  const [dateImportOnSU, setDateImportOnSU] = useState({
    selectedDay: undefined,
    isEmpty: true,
    isDisabled: false,
  });

  useEffect(() => {
    dateImportOnSU.selectedDay &&
      dispatch({
        type: DATA_EXPORT_ON_SU,
        payload: dateImportOnSU,
        id: device.id,
      });
    dateExportToSU.selectedDay &&
      dispatch({
        type: DATA_EXPORT_TO_SU,
        payload: dateExportToSU,
        id: device.id,
      });
    dateImportOfRepair.selectedDay &&
      dispatch({
        type: DATA_IMPORT_OF_REPAIR,
        payload: dateImportOfRepair,
        id: device.id,
      });
    dateExportToRepair.selectedDay &&
      dispatch({
        type: DATA_EXPORT_IN_REPAIR,
        payload: dateExportToRepair,
        id: device.id,
      });
  }, [dateImportOnSU, dateExportToSU, dateImportOfRepair, dateExportToRepair]);

  const buttonHandler = () => {
    return;
  };
  return (
    <li>
      <div className="device">
        <div className="device__list">
          <span>Район</span>
          <span>{device.branch}</span>
        </div>
        <div className="device__list">
          <span>Тип устройства</span>
          <span>{device.typeDevices}</span>
        </div>
        <div className="device__list">
          <span>Название устройства</span>
          <span>{device.deviceName}</span>
        </div>
        <div className="device__list">
          <span>Инвентарный номер</span>
          <span>{device.inventoryNumber}</span>
        </div>
        <div className="device__list">
          <span>Дата прибытия в комитет</span>
          <span className="device__list__date">
            {device.dateImportOnSU.selectedDay !== undefined
              ? device.dateImportOnSU.selectedDay.toLocaleDateString()
              : "-"}
          </span>

          <MyForm date={dateImportOnSU} setTimeState={setDateImportOnSU} />
        </div>
        <div className="device__list">
          <span>Дата отправки отправки в ремонт</span>
          <span className="device__list__date">
            {device.dateExportOnRepair.selectedDay !== undefined
              ? device.dateExportOnRepair.selectedDay.toLocaleDateString()
              : "-"}
          </span>
          <MyForm
            date={dateExportToRepair}
            setTimeState={setdataExportToRepair}
          />
        </div>
        <div className="device__list">
          <span>Дата возвращения с ремонта</span>
          <span className="device__list__date">
            {device.dateImportOfRepair.selectedDay !== undefined
              ? device.dateImportOfRepair.selectedDay.toLocaleDateString()
              : "-"}
          </span>
          <MyForm
            date={dateImportOfRepair}
            setTimeState={setDateImportOfRepair}
          />
        </div>
        <div className="device__list">
          <span>Дата отправки на судебные участки</span>
          <span className="device__list__date">
            {device.dateExportToSU.selectedDay !== undefined
              ? device.dateExportToSU.selectedDay.toLocaleDateString()
              : "-"}
          </span>
          <MyForm
            className="asdqwe"
            date={dateExportToSU ? dateExportToSU : device.dateExportToSU}
            setTimeState={setDateExportToSU}
          />
        </div>
      </div>
    </li>
  );
}
