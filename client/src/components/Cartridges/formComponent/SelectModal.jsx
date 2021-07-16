import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartridges_types } from '../../../redux/defaultValues';

export default function SelectModel() {

    const model = useSelector(state=> state.cartridge.model);
    const dispatch = useDispatch();

    return (
        <select className='form-select' onChange={event => dispatch({type: 'ADD_MODEL', payload: event.target.value})} defaultValue={model}>
            <option value={model}>Выберите количество</option>
            {cartridges_types.map((model, index)=> {
                return <option key={index} value={model}>{model}</option>
            })}
        </select>
    )
}