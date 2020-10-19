import React, {useState} from 'react';
import Modal from '../Modal';

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
        {
            name: 'Tech Blog',
            description: 'Post all your favorite Tech news and updates to share with friends',
            link: 'https://frozen-fjord-11998.herokuapp.com/'
        },
        {
            name: 'Note Taker',
            description: 'Keep track of your thoughts and other notes throughout the day',
            link: 'https://vast-coast-30336.herokuapp.com/'
        },
    ])

    const [currentPhoto, setCurrentPhoto] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index:i});
        setIsModalOpen(true);
    }
    return(
        <div>
            {isModalOpen && <Modal currentPhoto={currentPhoto}></Modal>}
         
            <div className = "flex-row">
                {photos.map((image, i) => (
                    <img
                        src = {require(`../../assets/images/small/${i}.jpg`)}
                        alt={image.name}
                        className = "img-thumbnail mx-1"
                        onClick = {() => toggleModal(image, i)}
                        key = {image.name}
                        />
                ))}
            </div>
        </div>
    )
}

export default Projects;