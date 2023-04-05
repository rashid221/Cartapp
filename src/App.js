import {react,useState} from 'react';
import ReactDom from 'react-dom';
// import './App.css';
// import ComA from './ComA';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// import ComZ from './ComZ';
// import Contentgrid from './Contentgrid';
// import Positions from './Positions';
// import Test from './Test';
// import Other from './Other';
// import Parent from './components/Parent';
import Modals from './components/Modals';
import Portal from './components/Portal';
import PortalDemo from './components/PortalDemo';
import User from './components/User';
import ErrorBound from './components/ErrorBound';

function App() {
  // const initialState = 0;
  // const reducer=(state,action)=>{
  // if(action.type==='add'){
  //  return state + 1;
  // }
  // else if(action.type==='subtract'){
  //   return state - 1;
  // }
  // else if(action.type==='multiply'){
  //   return state*state; 
  // }
  // else if(action.type==='reset'){
  // return initialState;
  // } 
  // return state;
  // }
  // const [state,dispatch]=useReducer(reducer,initialState);
  const [open,setOpenModal] = useState(false);
  return (
    <div className="App">
      <button onClick={()=>setOpenModal(!open)}>{open ? "Hide" : "Show"}</button>
      {open && <OpenModal/>}
{/*       
           <h2>{state}</h2>
           <button onClick={()=>dispatch({type:'add'})}>Add</button>
           <button onClick={()=>dispatch({type:'subtract'})}>Subtract</button>
           <button onClick={()=>dispatch({type:'multiply'})}>Multiply</button>
           <button onClick={()=>dispatch({type:'reset'})}>Reset</button> */}
           
      {/* <Contentgrid/>
      <Test/> */}
      {/* <User/>

    <ErrorBound/> */}
          <Modals/>
      <Portal/>
      <PortalDemo/>
      {/* <Other/> */}
      {/* <Parent/> */}
       {/* <ComA/> */}
       {/* <ComZ/> */}
    </div>
  );
}

export default App;

const OpenModal =()=>{
  return ReactDom.createPortal(<h1>hello world</h1>,document.getElementById('modal-root'));
}