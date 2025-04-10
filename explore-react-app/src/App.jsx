import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo';
import Actor from './Actor';


function App() {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];  
  const singers =[
    {name: 'Jenifa Lorence', age: 32},
    {name: 'Atif Aslam', age: 34},
    {name: 'Arijit Singh', age: 42}
  ]
  const ListItems = products.map(product=><li key={product.id} style={{ color:product.isFruit?'magenta':'darkgreen'}}>{product.title}</li>)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> 
      <h2>Welcome to my App</h2> 
      {
        singers.map(singer=><Actor singer={singer}></Actor>)
      }
      <MyButton></MyButton> 
      <ul>{ListItems}</ul> 
      <Todo isDone={true} task='Learn React'></Todo>
      <Todo isDone={false} task='Core concepts'></Todo>
      
      
    </>
  )
}

export default App 

function MyButton(){
  const [count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return<><button onClick={handleClick}> Clicked {count} times!</button></>
}
