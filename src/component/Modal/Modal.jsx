import React from 'react';

const Modal = (props) => {
    const {image_link, description, integration, features} = props.singleData;
    return (
        <>
            <input type="checkbox" id="my_modal_5" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
            <div className="card lg:card-side bg-base-100 ">
                
                <div className="card-body">
                    <h2 className="card-title">
                        {description ? description: "Not Found"}</h2>
                    
                    <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xl font-bold'>Features</h1>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>Integrations</h1>
                    </div>
                    </div>


                  
                
                </div>
                <figure><img src={image_link? image_link[0] : null} alt="No Image"/></figure>
                </div>
                <div className="modal-action">
                <label htmlFor="my_modal_5" className="btn">Close!</label>
                </div>
            </div>
            </div>
        </>
    );
};

export default Modal;