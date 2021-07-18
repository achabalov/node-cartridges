import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectBranch from "../formComponent/SelectBranch";
import ModalCartridgeForm from "../ModalAddForm/ModalCartridgeForm";
import Cartridge from "../CartridgeList/Cartridge";
import FormAplication from "../FormApplication/FormApplication";
import "./FormCartridge.scss";
import {
  SHOW_MODAL_ADD_CARTRIDGE,
  ADD_BRANCH_CARTRIDGES,
  DEVICE_FILTER_BRANCH,
} from "../../../redux/types";
import { GetDocxGenerator, PostDocxGenerator } from "../../../async/docxGenerator";

export function FormCartridge() {
  const dispatch = useDispatch();
  const branch = useSelector(state => state.equipment.branch);
  useEffect(() => {
    branch && dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: true });
  }, [branch]);

  const formFilter = useSelector((state) => state.equipment.cartridges); 
  function submitHandler(event) {
    event.preventDefault();
  }
  const docx = useSelector(state=> state.equipment.docxGenerator)
    if(docx.length !== 0) {
        (async function() {
                try {
                    if(docx.length !== 0 ) {
                        await PostDocxGenerator(docx);
                        await GetDocxGenerator(branch);
                    }
                } catch(err) {
                    console.log(err);
                }
        })()
        dispatch({type: "NULLDOCX"})
    }

  return (
    <>
      <h2>Картриджи в заправку</h2>
      <form className={"form__container"} onSubmit={submitHandler}>
        <div className="form__container__contols">
          <SelectBranch
            add={ADD_BRANCH_CARTRIDGES}
            filter={DEVICE_FILTER_BRANCH}
          />
          {branch ? 
          <button 
          className='btn btn-success' 
          onClick={()=> dispatch({ type: SHOW_MODAL_ADD_CARTRIDGE, payload: true })}
          >
            Добавить
            </button>: ''}
          <ModalCartridgeForm />
        </div>
      </form>
      <Cartridge />
      <hr />
      {formFilter.length !== 0 ? <FormAplication /> : ""}
    </>
  );
}
