import React from 'react';
import { useDispatch } from 'react-redux';

export default function SelectCartridgeCount() {
    const dispatch = useDispatch();
    return (
        <select className='form-select' onChange={event => dispatch({type: 'ADD_COUNT', payload: event.target.value})} defaultValue={1}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    )
}