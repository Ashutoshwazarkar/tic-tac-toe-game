import React,{useState} from 'react'
import Square from './Square'
import './Board.css';

const Board = () => {
   const [state , setState] = useState(Array(9).fill(null));
   const [isxTurn , setIsxTurn] = useState(true);

   const checkWinnerLogic = () => {
     const winnerLogic = [
        [0 , 1 , 2],
        [3 , 4 , 5],
        [6 , 7 , 8],
        [0 , 3 , 6],
        [1 , 4 , 7],
        [2 , 5 , 8],
        [0 , 4 , 8],
        [2 , 4 , 6],
     ]
     for (let logic of winnerLogic){
        const [a,b,c] = logic
        if(state[a]!== null && state[a] === state[b] && state[a] === state[c])
        {
            return state[a];
        }

    }
    return false;
   };

   const iswinner = checkWinnerLogic();

   const handleClick = (index) => {
    if (state[index] !== null){
        return;
    }
     const copystate = {...state};
     copystate[index] = isxTurn ? 'X' : 'O';
     setState(copystate);
     setIsxTurn(!isxTurn);
   }

   const handlereset = ()=>{
    setState(Array(9).fill(null));
   }
  return (
    <div className='BoardContainer'>
        {iswinner ? ( <>{iswinner } won the game <button onClick={handlereset}>Play Again</button> </>) :
        (
        <>
        <h2 style={{textAlign: 'center'}}>Player {isxTurn ? "X": "O"} Please move</h2>
        <div className='Board-Row'>
        <Square onClick={()=> handleClick(0)} value ={state[0]}/>
        <Square onClick={()=> handleClick(1)} value ={state[1]}/>
        <Square onClick={()=> handleClick(2)} value ={state[2]} />
        </div>
        <div className='Board-Row'>
        <Square onClick={()=> handleClick(3)} value ={state[3]}/>
        <Square onClick={()=> handleClick(4)} value ={state[4]}/>
        <Square onClick={()=> handleClick(5)} value ={state[5]}/>
        </div>
        <div className='Board-Row'>
        <Square onClick={()=> handleClick(6)}  value ={state[6]}/>
        <Square onClick={()=> handleClick(7)}  value ={state[7]}/>
        <Square onClick={()=> handleClick(8)}  value ={state[8]}/>    
        </div>     
        </>
        )
        }
    </div>
  )
}

export default Board
