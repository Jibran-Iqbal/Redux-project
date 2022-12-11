import React from 'react'
import './App.css'
import {useSelector,useDispatch} from 'react-redux';
import {incNumber , decNumber} from './actions/index'

const App = () => {
  const dispatch = useDispatch();
  const mystate = useSelector((state)=>state.changeTheNumber);
  return (
    <>
      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick = {()=>dispatch(decNumber())} ><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={mystate}/>
        <a className="quantity__plus" title="Increment" onClick = {()=>dispatch(incNumber(5))}><span>+</span></a>
      </div>
  
          </div>
    </>
  )
}

export default App
