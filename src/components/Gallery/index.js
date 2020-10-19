import React, {useState} from 'react';
import Project from '../Projects';
import Resume from '../Resume';



function Gallery({ currentPage }) {
    const{name} = currentPage;

    console.log(name);

    const [resumeSelected, setResumeSelected] = useState(false);
    return(
        <section>
            <h1>{name}</h1>
            {!resumeSelected ? (
            <>
                <Project/>
            </>
            ) : (
                <Resume/>
            )}
        </section>
    );
}

export default Gallery;