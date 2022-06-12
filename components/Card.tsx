import React from 'react'
type E= {
    information:string;
}
const Card = ({information}:E) => {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/5 py-5 rounded-3xl targeta">
            <div className='mx-1 bg-azul-light overflow-hidden'>
                <div className="px-1 py-1">
                    <div className="font-bold text-sm my-2 mx-1">{information}</div>
                    <p className="text-gray-700 text-sm">
                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card