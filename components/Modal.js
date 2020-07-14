import React, {useEffect, useState} from 'react';
import { createPortal } from "react-dom";

function Modal(props) {
    const [open, setOpen] = useState(false);
    const [animation, setAnimation] = useState(false);
    const body = document.body;

    useEffect( () => {
        setOpen(props.open);
        if(props.open && !animation) {
            animate();
        }
    }, [props.open]);

    function closeModal() {
        setAnimation(false);
        setTimeout(function(){ props.close(false); }, 100);
    }

    function animate() {
        return new Promise(resolve => setTimeout(function(){ setAnimation(true); resolve(); }, 100));
    }

    return createPortal(
        <div onClick={closeModal}>
            <div className={'modal fade' + (open ? ' d-block' : '') + (animation ? ' show' : '')}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {props.children}
                    </div>
                </div>
            </div>
            {open &&
                <div className={'modal-backdrop fade' + (animation ? ' show' : '')}></div>
            }
        </div>
        ,
        body
    )
}

export default Modal;
