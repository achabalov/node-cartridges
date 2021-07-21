import React from 'react';
import { useSelector } from 'react-redux';
import Se2 from './Se2';
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

    return (
        <>
        {/* <div className='finish__request__branch'>
                <h5>Филиал</h5>
                <div>{branch}</div>
            </div>  */}
        {finishRequest2.length !== 0 ? finishRequest2.map((el, index)=> {
            return (
            <div key={index} className='finish__request'>
            

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


// import React from 'react';
// import { useSelector } from 'react-redux';
// import Se2 from './Se2';
// import './SelectBranchRequest.scss'; 

// export default function SelectBranchRequest() {
//     const branch = useSelector(state=> state.equipment.branch)
//     const finishRequest = useSelector(state=> state.equipment.finishRequestCartridges)
//     const filterToBranch = finishRequest.filter(el=> {
//         return Object.keys(el).toString() === branch
//     })

//     const finishRequest2 = filterToBranch.map(el => {
//         return Object.values(el)
//     })

//     return (
//         <>
//         {finishRequest2.length !== 0 ? (
//       <>
//       <div className='preview__apllication'>
//         <div className='preview__apllication__cartridge'>
//         <h3>Картриджи</h3>
//         <hr />
//         {cartridge.map((el, index) => {
//           return (
//             <div key={index}>
//             <div>{el.model} в количестве {el.count}</div>
//           </div>
//           )
//         })}
//         <div>Примечания {note || 'отсутствуют'}</div>
//         <div>Итого картриджей в заявке {totalCount}</div>
//       </div>
//         <div className='preview__apllication__option'>
//           <button 
//           className='btn btn-success'
//           onClick={()=> {
//             dispatch({type: SHOW_MODAL_ADD_CARTRIDGE, payload: {modal: true, typeModal: 'addCartridge'}})
//           }}
//           >Изменить</button>
//           <button 
//           className='btn btn-danger'
//           onClick={()=> {
//             dispatch({type: 'CARTRIDGE_RESET'})
//           }}
//           >Удалить</button>
//         </div>
//       </div>
//       </> ) : null
//     }                          
//     </>
//     )
// }

