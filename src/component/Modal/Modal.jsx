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
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
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