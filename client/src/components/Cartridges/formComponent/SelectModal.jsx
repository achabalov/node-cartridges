import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartridges_types } from '../../../redux/defaultValues';

export default function SelectModel({id, flag, note, setNote}) {

    const branch = useSelector(state=> state.equipment.branch);
    const dispatch = useDispatch();


    return (
            <div className='modal__add'>
                {cartridges_types.map((el, index)=> { 
                    return (
                        <div key={index}>
                        <div className='modal__add__column'>
                            <div className='modal__add__column__model'>
                                <div>Модель</div>
                                <div>{el.model}</div>
                            </div>
                            <div className='modal__add__column__count'>
                                <div>Количество</div>
                                <div>{el.count || 0}</div>
                            </div>
                            <select 
                            className='form-select' 
                            onChange={event => 
                                    flag === 'transferFromWarehouse' ?
                                    dispatch({type: 'ADD_TRANSFER_WAREHOUSE',
                                     payload: {id, branch, model: el.model, count: event.target.value}})
                                    : flag === 'actualReturn' ?
                                    dispatch({type: 'actualReturn',
                                    payload: {id, branch, model: el.model, count: event.target.value}})
                                    :
                                    dispatch({type: 'ADD_MODEL_COUNT',
                                    payload: {id: Date.now(), branch, model: el.model, count: event.target.value}})}
                            defaultValue={'0'}>
                                <option value="0">0</option>
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
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                            </select>
                            
                    </div>
                    <hr style={{width: '400px', margin: 0}}/>
                    </div>
                        )
                })}
                            <div> 
                                <label>Примечание</label>
                                <input className='modal__add__input' type="text" value={note} onChange={e=> setNote(e.target.value)} />
                            </div>
            </div>
    )
}




        // <select className='form-select' onChange={event => dispatch({type: 'ADD_MODEL', payload: event.target.value})} defaultValue={model}>
        //     <option value={model}>Выберите модель</option>
        //     {cartridges_types.map((objCartridge, index)=> {
        //         return <option 
        //         disabled={!objCartridge.active} 
        //         key={index} 
        //         value={objCartridge.model}
        //         >
        //             {objCartridge.model}
        //         </option>
        //     })}
        // </select>