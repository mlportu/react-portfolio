import React from 'react';
import Project from '../Projects';



function Gallery({ currentPage }) {
    const{name} = currentPage;

    console.log(name);
    return(
        <section>
            <h1>{name}</h1>
            <Project/>
        </section>
    );
}

export default Gallery;