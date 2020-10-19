import React from 'react';

function Nav (props) {
    const {
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
                    <li className = {`mx-1 ${!contactSelected &&'navActive'}`}>
                        <span onClick={() => {setContactSelected(false)}}> Portfolio </span>
                    </li>
                    <li className = {`mx-2 ${contactSelected && 'navActive'}`}> 
                        <span onClick={() => setContactSelected(true)}> Contact </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;