import React, {useState} from 'react';


function Projects() {
    const [photos] = useState([
        {
            name:'Doggypedia',
            description: 'All the information you would want to know about any dog breed all in one place',
            link: 'https://kray306090.github.io/yorkie-terrier/'
        },
        {
            name: 'Health Log',
            description: 'Track and monitor your health to help identify healthy habbits to imporve your life',
            link: 'https://fathomless-thicket-41464.herokuapp.com/'
        },
        {
            name: 'Weather Dashboard',
            description: 'Know the weather for the next week in any city of your choice',
            link: 'https://mlportu.github.io/weather-dashboard/'
        },  
        {
            name: 'Workday Scheduler',
            description: 'Track your schedule and never miss an appointment',
            link: 'https://mlportu.github.io/workday-scheduler/'
        },
    ])
    return(
        <div>
            <div className = "flex-row">
                {photos.map((image, i) => (
                    <img
                        src = {require(`../../assets/images/Large/${i}.png`)}
                        alt={image.name}
                        className = "image-thumbnail mx-1"
                        key = {image.name}
                        />
                ))}
            </div>
        </div>
    )
}

export default Projects;