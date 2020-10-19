import React from 'react';


function Modal ({onClose, currentPhoto}) {
 const {name, description, link, index} = currentPhoto;

    return(
        <div className ="modalBackdrop">
            <div className ="modalContainer">
                <h3 className = "modalTitle"> {name}</h3>
                <div>
                    <a href={link}>Link to Site</a>
                </div>
                <img  src = {require(`../../assets/images/large/${index}.jpg`)}
                        alt={name}/>
                <p>
                    {description}
                </p>
                <button onClick={onClose} type="button">
                    Close
                </button>
            </div>
        </div>
    );
}


export default Modal;