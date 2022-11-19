import React from 'react'

const Board = ({ handeClick, squares }) => {
    return (
        <div className='grid grid-cols-3 gap-4 w-96 h-96 mt-3'>
            {squares.map((square, index) => {
                return (
                    <div
                    className='text-5xl w-24 h-24 select-none p-5 flex item-center justify-center bg-gray-100 border-4 border-sky-300 hover:border-dashed cursor-pointer '
                     key={index} onClick={() => handeClick(index)}>
                        {square}
                    </div>
                )
            })}
        </div>
    )
}

export default Board