import React from 'react';

function Nav () {
    return(
        <header className = "flex-row px-1"> 
            <h2>
                Mike Portu
            </h2>
            <nav>
                <ul className = "flex-row">
                    <li className ="mx-2">
                        <a href = "#about">
                            About Me
                        </a>
                    </li>
                    <li className = "mx-2">
                        <span> Portfolio </span>
                    </li>
                    <li className = "mx-2"> 
                        <span> Contact </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;