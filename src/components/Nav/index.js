import React from 'react';

function Nav (props) {
    const {
        resumeSelected,
        setResumeSelected,
        contactSelected,
        setContactSelected
    } = props

    return(
        <header className = "flex-row px-1"> 
            <h2>
                Mike Portu
            </h2>
            <nav>
                <ul className = "flex-row">
                    <li className ={`mx-2 ${contactSelected && 'navActive'}`}>
                        <a href = "#about" onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li 
                        className = {`mx-2 ${!contactSelected && !resumeSelected && 'navActive'}`}
                    >
                        <span
                            onClick={() => {
                                setContactSelected(false)
                                setResumeSelected(false)
                            }}> 
                            Projects 
                        </span>
                    </li>
                    <li 
                        className = {`mx-2 ${!contactSelected && resumeSelected && 'navActive'}`}
                    >
                        <span
                            onClick={() => {
                                setContactSelected(false)
                                setResumeSelected(true)
                            }}> 
                            Resume 
                        </span>
                    </li>
                    <li className = {`mx-2 ${contactSelected && !resumeSelected && 'navActive'}`}> 
                        <span onClick={() => setContactSelected(true)}> Contact </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;