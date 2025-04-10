import { useState } from 'react'

import './App.css'



function App() {
const [xIsNext,setxIsNext]=useState(true);
const [squares,setSquare]=useState(Array(9).fill(null));


 function handleClick(i){
     if(squares[i] || calculateWinner(squares))
     { 
        
        return;
     }
     const nextSquare=squares.slice(); 
     

     (xIsNext)?nextSquare[i]='X':nextSquare[i]='O'; 
     setSquare(nextSquare);
     setxIsNext(!xIsNext);
     
 }
 let status; 
const winner = calculateWinner(squares); 
if(winner)status ="Winner: "+winner;
else status = "Next player: "+(xIsNext?"X":"O");
  return (
    <>
      <div className="tic-tac-board">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square onSquareClick={()=>handleClick(0)} value ={squares[0]}></Square>
        <Square onSquareClick={()=>handleClick(1)} value ={squares[1] } ></Square>
        <Square onSquareClick={()=>handleClick(2)} value ={squares[2] }></Square>
      </div>
      <div className="board-row">
      <Square onSquareClick={()=>handleClick(3)} value ={squares[3] }></Square>
        <Square onSquareClick={()=>handleClick(4)} value ={squares[4] }></Square>
        <Square onSquareClick={()=>handleClick(5)} value ={squares[5] } ></Square>
      </div>
      <div className="board-row">
      <Square onSquareClick={()=>handleClick(6)} value ={squares[6] } ></Square>
        <Square onSquareClick={()=>handleClick(7)} value ={squares[7] } ></Square>
        <Square onSquareClick={()=>handleClick(8)} value ={squares[8]} ></Square>
      </div>
      </div>
      
      
    </>
  )
} 
function Square({value, onSquareClick}){ 

  return <button className='Square' onClick={onSquareClick}>{value}</button>
}
function calculateWinner(squares){
  const lines =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [6,7,8],
    [2,5,8],
    [2,4,6],
    [0,4,8],
    [1,4,7]
  ];
  for(let i =0; i<lines.length; i++){
       const[a,b,c]=lines[i];
       if(squares[a]&&squares[a]=== squares[b]&&squares[a]===squares[c]) 
          return squares[a];
    }  
  return null;
}

export default App;
