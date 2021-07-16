import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Se2 from './Se2';
import { PostDocxGenerator } from '../../../async/docxGenerator';
import './SelectBranchRequest.scss';

export default function SelectBranchRequest() {
    const branch = useSelector(state=> state.equipment.branch)
    const finishRequest = useSelector(state=> state.equipment.finishRequestCartridges)
    const filterToBranch = finishRequest.filter(el=> {
        return Object.keys(el).toString() === branch
    })

    const finishRequest2 = filterToBranch.map(el => {
        return Object.values(el)
    })
    console.log(finishRequest2);
    const docx = useSelector(state=> state.equipment.docxGenerator);
    useEffect(()=> {
        if(docx !== []) {
            console.log('Start async');
            console.log(docx);
            const d = JSON.stringify(...docx);
            console.log(d);
            PostDocxGenerator(d)
        }
        
    }, [docx])
    return (
        <>
        {finishRequest2.length !== 0 ? finishRequest2.map((el, index)=> {
            console.log(el);

            return (
            <div key={index} className='finish__request'>
            <div className='finish__request__branch'>
                <h5>Филиал</h5>
                <div>{branch}</div>
            </div> 

            {el.map((request, index) => {
                return <Se2 req={request} key={index}/>
            })}
                    <div className='finish__request__cartridge__button'>
                        <button className='btn btn-white' onClick={()=> {
                            
                        }}>Исполнить заявку</button>
                        <button className='btn btn-light'>Отправить заявку в архив</button>
                    </div>
            </div>
            )
        })
 : <div>Ничего нету</div>
        }
                          
    </>
    )
}

