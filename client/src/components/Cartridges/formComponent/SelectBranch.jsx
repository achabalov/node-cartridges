import React from 'react';
import { useDispatch } from 'react-redux';
// import { ADD_BRANCH, FILTER_BRANCH } from '../../../redux/types';
import { branchs } from '../../../redux/defaultValues';
import './SelectBranch.scss';

export default function SelectBranch({add, filter}) {
    const dispatch = useDispatch();
    return (
        <select className='form-select select__branch' onChange={event => {
            dispatch({type: add, payload: event.target.value})
            dispatch({type: filter, payload: event.target.value})
        }
        } defaultValue={'initialCount'}>
            <option className={'dev_val'} disabled value={'initialCount'}>Выберите филиал</option>
            {branchs.map((option, index)=> {
                return <option key={index} value={option}>{option}</option>
            })}
        </select>
    )
}