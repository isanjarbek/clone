import React, { useState } from 'react'

function Modal() {
    const [modal, setModal] = useState(false)
    const handleOpen = () => setModal(!modal)
    
    return (
        <div className="modal" >
            <button onClick={handleOpen}>Click</button>
            {
                modal ?
                    <>
                        <div className="close-modal" onClick={handleOpen}>
                            x
                         </div>
                        <div className="modal-body">
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quisquam. Dolore repellendus ad, recusandae illum quia repellat reiciendis temporibus pariatur quam harum excepturi adipisci voluptatem magnam nulla id possimus molestias.</h4>
                        </div>
                    </>
                    : ''
            }

        </div>
    )
}

export default Modal