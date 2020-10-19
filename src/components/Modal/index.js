import React from 'react';


function Modal ({onClose, currentPhoto}) {
 const {name, description, link, github, index} = currentPhoto;

    return(
        <div className ="modalBackdrop">
            <div className ="modalContainer">
                <h3 className = "modalTitle"> {name}</h3>
                <p>
                    {description}
                </p>
                <div>
                    <a href={link}>Link to Site</a>
                </div>
                <div>
                    <a href={github}>GitHub Link</a>
                </div>
                <img  src = {require(`../../assets/images/large/${index}.jpg`)}
                        alt={name}/>
                
                <button onClick={onClose} type="button">
                    Close
                </button>
            </div>
        </div>
    );
}


export default Modal;