import React, { Fragment } from 'react'
import { useEffect , useRef } from 'react'

function Modal({ open , onClose,onConfirm}){

    const ref = useRef();
    useEffect(()=> {
        if(open){
            ref.current.click();
        }
    },[open]);

    return(
        <Fragment>
            <button ref={ref} type="button" style={{display:"none"}} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    ...
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button onClick = {onConfirm} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>



    )


}

export default Modal