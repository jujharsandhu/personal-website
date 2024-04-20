import './index.scss'



const ProjectBox = ( { image, name}) => {
    return (
        <div className='project-image'>
        {/* <div style = {{backgroundImage: `url(${img})`}} className='project-image'> */}


            <img className="background-image" src={image} alt='yanno'/>
            <div class='overlay-text'>{name}</div>
            
        </div>
    )
}


export default ProjectBox