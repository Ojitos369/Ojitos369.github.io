import React from 'react'
import './ProjectsUI.css'

function Project(props) {
    const { project, projectIndex } = props
    const buttonsCarousel = project.files.map((file, index) => {
        if (index === 0) {
            return (
                <button type="button" data-bs-target={`#project-${projectIndex}`} data-bs-slide-to={index} className="active" aria-current="true" aria-label={`Slide ${index + 1}`}></button>
            )
        }
        else {
            return <button type="button" data-bs-target={`#project-${projectIndex}`} data-bs-slide-to={index} aria-label={`Slide ${index + 1}`}></button>
        }
    })

    const imagesCarousel = props.project.files.map((file, index) => {
        if (index === 0) {
            return (
                <div className="carousel-item active">
                    <img 
                        src={require(`../../assets/media/projects/${file}`)} 
                        className="d-block w-100 img-carousel" 
                        alt={`${project.name} ${index + 1}`}
                    />
                </div>
            )
        }
        else {
            return (
                <div className="carousel-item">
                    <img 
                        src={require(`../../assets/media/projects/${file}`)} 
                        className="d-block w-100 img-carousel" 
                        alt={`${project.name} ${index + 1}`}
                    />
                </div>
            )
        }
    })

    const repoButtonClass = project.link !== '' ? "btn btn-primary col-5 my-btn" : "btn btn-primary col-10 my-btn"
    const linkButtonClass = project.repo !== '' ? "btn btn-success col-5 my-btn" : "btn btn-success col-10 my-btn"

    return (
        <React.Fragment>
            <div className='col-10 col-md-4 mt-4'>
                <div className="card">
                    {/* Carousel Header */}
                    <div id={`project-${projectIndex}`} className="carousel slide my-carousel carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
                        <div className="carousel-indicators">
                            {buttonsCarousel}
                        </div>
                        <div className="carousel-inner">
                            {imagesCarousel}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#project-${projectIndex}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#project-${projectIndex}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                    {/* Body Card */}
                    <div className="card-body">
                        <h5 className="card-title text-center mb-3">{project.name}</h5>
                        <p className="card-text">{project.description}</p>
                        <div className='row d-flex justify-content-around'>
                        {project.link !== '' &&
                            <a 
                                href={project.link}
                                className={linkButtonClass}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit
                            </a>
                        }
                        {project.repo !== '' &&
                            <a 
                                href={project.repo}
                                className={repoButtonClass}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Repositorio
                            </a>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export { Project }