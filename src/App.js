import './App.css';
import ComA from './ComA';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import ComZ from './ComZ';
import Contentgrid from './Contentgrid';
import Positions from './Positions';
import Test from './Test';

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
  return (
    <div className="App">
{/*       
           <h2>{state}</h2>
           <button onClick={()=>dispatch({type:'add'})}>Add</button>
           <button onClick={()=>dispatch({type:'subtract'})}>Subtract</button>
           <button onClick={()=>dispatch({type:'multiply'})}>Multiply</button>
           <button onClick={()=>dispatch({type:'reset'})}>Reset</button> */}
      {/* <Contentgrid/>
      <Test/> */}
      <Positions/>
       {/* <ComA/> */}
       {/* <ComZ/> */}
    </div>
  );
}

export default App;
