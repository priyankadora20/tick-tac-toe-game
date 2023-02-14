import React, { useState } from 'react';
import Square from './Square';

const Board =()=>{

    const[state, setState] = useState(Array(9).fill(null))
   
    console.Console("State", state );

    const handleClick = (index)=>{
        
        
        
    }


    return (

        <div className="board-cont">
            <div className="board-row">
            <Square value={state[0]}/>
            <Square value={state[1]}/>
            <Square value={state[2]}/>
            </div>
            <div className="board-row">
            <Square value={state[3]}/>
            <Square value={state[4]}/>
            <Square value={state[5]}/>
            </div>
            <div className="board-row">
            <Square value={state[6]}/>
            <Square value={state[7]}/>
            <Square value={state[8]}/>
            </div>
        </div>
    )
}


export default Board