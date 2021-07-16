import React from 'react';

export default function Se2({req}) {
    return (
        <>
        { req.map((request, index) => {
            return (
            <div key={index} className='finish__request__cartridge'>
                <div key={index}>
                <div className='finish__request__cartridge__model'>{request.model}</div>
                <div className='finish__request__cartdige__count'>{request.count}</div>
                </div>
            </div>
            )
            })
        }
        </>
    )
}
