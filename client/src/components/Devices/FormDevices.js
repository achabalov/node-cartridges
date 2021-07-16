import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_BRANCH_CARTRIDGES,
  ADD_DEVICES,
  DEVICE_FILTER_BRANCH,
} from "../../redux/types";
import MyForm from "../DayPickerInput/DayPickerInput";
import SelectBranch from "../Cartridges/formComponent/SelectBranch";
import "./FormDevice.scss";

export default function FormDevices() {
  const dispatch = useDispatch("");
  const branch = useSelector((state) => state.equipment.branch);
  const [deviceName, setDeviceName] = useState("");
  const [typeDevices, setTypeDevices] = useState("");
  const [inventoryNumber, setInventoryNumbver] = useState("");
  const [dateImportOnSU, setTimeState] = useState({
    selectedDay: undefined,
    isEmpty: true,
    isDisabled: false,
  });

  function onAddInventoryNumber(event) {
    setInventoryNumbver(event.target.value.trim());
  }

  function onAddInventoryName(event) {
    setDeviceName(event.target.value);
  }

  function onChangeHandler(event) {
    event.preventDefault();
    const newDevices = {
      id: Date.now(),
      typeDevices,
      deviceName,
      inventoryNumber,
      branch,
      dateImportOnSU,
      dateExportOnRepair: "",
      dateImportOfRepair: "",
      dateExportToSU: "",
    };
    dispatch({ type: ADD_DEVICES, payload: newDevices });
    reset()
  }

  function reset() {
    setDeviceName('')
    setTypeDevices('')
    setInventoryNumbver('')
  }
  return (
    <>
      <h2>Техника в ремонт</h2>
      <form className='form' onSubmit={onChangeHandler}>
        <SelectBranch add={ADD_BRANCH_CARTRIDGES} filter={DEVICE_FILTER_BRANCH} />
        <br />
        <div className="device__form">
          <div className="device__form__label">
            <label className="deviasdce__form__labael">Тип техники</label>
          </div>
          <div className="device__form__input">
            <select
              className="devdsice__form__input"
              onChange={(event) => setTypeDevices(event.target.value)}
            >
              <option value={"MFU"}>МФУ</option>
              <option value={"printer"}>Принтер</option>
              <option value={"scaner"}>Сканер</option>
              <option value={"systemUnit"}>Системный блок</option>
              <option value={"monitor"}>Монитор</option>
            </select>
          </div>
        </div>
        <br />
        <div className={"device__form"}>
          <div className="device__form__label">
            <label className="device__form__label">
              Наименование техники
            </label>
          </div>
          <div className="device__form__input">
            <input
              className="device__form__input"
              value={deviceName}
              onChange={(event) => onAddInventoryName(event)}
            />
          </div>
        </div>
        <br />
        <div className="device__form">
          <div className="device__form__label">
            <label className="devicedasd__form__label">Инвентарный номер</label>
          </div>
          <div className="device__form__input">
            <input
              className="device__form__input"
              value={inventoryNumber}
              onChange={(event) => onAddInventoryNumber(event)}
            />
          </div>
        </div>
        <div className="device__form">
          <MyForm date={dateImportOnSU} setTimeState={setTimeState} />
        </div>
        {deviceName &&
        typeDevices &&
        inventoryNumber &&
        branch &&
        dateImportOnSU.selectedDay ? (
          <button type="submit" className="btn btn-success">
            Отправить
          </button>
        ) : (
          "Заполните все необходимые поля"
        )}
      </form>
    </>
  );
}
