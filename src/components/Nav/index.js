import React from 'react';

function Nav (props) {
    const {
        pages=[],
        currentPage,
        setCurrentPage,
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
                    {pages.map((page)=>(
                        <li 
                        className = {`mx-2 ${currentPage.name === page.name && !contactSelected &&'navActive'}`}
                        key = {pages.name}
                    >
                    
                    
                        <span 
                            onClick={() => {
                                setCurrentPage(page);
                                setContactSelected(false)
                            }}> 
                            {page.name} 
                        </span>
                    </li>
                    ))}
                    <li className = {`mx-2 ${contactSelected && 'navActive'}`}> 
                        <span onClick={() => setContactSelected(true)}> Contact </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;