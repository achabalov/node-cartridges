import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FINISH_REQUEST, REMOVE_ALL_CARTRIDGE } from '../../../redux/types';

export default function FormApplication() {
    const finishRequest = useSelector(state=> state.equipment.cartridges)
    const dispatch = useDispatch();

        return (
        <div>
            <span>Проверьте правильность</span>
            <br />
            <button className='btn btn-success' onClick={()=> {
                dispatch({type: FINISH_REQUEST, payload: finishRequest })
                dispatch({type: REMOVE_ALL_CARTRIDGE})
                dispatch({type: "DOCX", payload: finishRequest})
            }}>Сформировать заявку</button>
        </div>
    )
}
