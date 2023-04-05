import ReactDOM from "react-dom";
import { useEffect } from "react";

const MyModal = (props)=>{
    useEffect(()=>{
    document.body.style.overflowY='hidden';
    return ()=>{
        document.body.style.overflowY='scroll';
    }
    },[])

    return ReactDOM.createPortal(
    <>
    <div className="modal-wrapper" onClick={props.handleit}></div>
    <div className="modal-container">
    <h3>Stay tuned</h3>
    <p>Subscribe to our newsletter and never miss our update</p>
    <button onClick={props.handleit}>Accept it</button>
    </div>
    </>,
    document.querySelector(".other-roots")
    );
}
export default MyModal;
