import React from 'react'
import { Project } from './Project'
import './ProjectsUI.css'

function ProjectsUI() {
    const projects = [
        {
            name: 'Static Apps',
            description: 'Static apps created with React.js',
            link: 'https://ojitos369.github.io/static_apps/',
            repo: 'https://github.com/Ojitos369/static_apps',
            files: [
                'static-apps-1.png',
                'static-apps-2.png',
                'static-apps-3.png',
            ]
        },
        {
            name: 'Psychometric Test',
            description: 'Test with Django and APIs with Django Rest Framework',
            link: '',
            repo: 'https://github.com/Ojitos369/django-projects',
            files: [
                'django-project-1.png',
                'django-project-2.png',
                'django-project-3.png',
                'django-project-4.png',
                'django-project-5.png',
            ]
        },
        {
            name: 'Make It',
            description: 'TODO page in React.js',
            link: 'https://ojitos369.github.io/basic_react_curse/',
            repo: 'https://github.com/Ojitos369/basic_react_curse',
            files: [
                'make-it-1.png',
                'make-it-2.png',
                'make-it-3.png',
                'make-it-4.png',
                'make-it-5.png',
            ]
        },
        {
            name: 'Matrix Api',
            description: 'API to some matrix operations',
            link: 'https://matricesop.herokuapp.com/operations/swagger/',
            repo: '',
            files: [
                'matrix-api-1.png',
                'matrix-api-2.png',
                'matrix-api-3.png',
                'matrix-api-4.png',
                'matrix-api-5.png',
            ]
        },
        {
            name: 'Hybot',
            description: 'Bot for discord with python, using hypixel API (Private Repo)',
            link: 'https://discord.com/oauth2/authorize?client_id=876992671284076546&permissions=8&scope=bot%20applications.commands',
            repo: 'https://github.com/Ojitos369/hybot',
            files: [
                'hybot-1.png',
                'hybot-2.png',
                'hybot-3.png',
                'hybot-4.png',
                'hybot-5.png',
                'hybot-6.png',
            ]
        }
    ]

    const [showProjects, setShowProjects] = React.useState('Hide Projects')
    const toggleProjects = () => {
        if (showProjects === 'Show Projects') {
            setShowProjects('Hide Projects')
        }
        else {
            setShowProjects('Show Projects')
        }
    }
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <p className='col-12 text-center h2'>
                        Some Projects
                    </p>
                </div>
                <div class="accordion mb-4" id="projectsAccordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="projectsPage" onClick={toggleProjects}>
                            <button class="accordion-button btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjects" aria-expanded="true" aria-controls="collapseProjects">
                                {showProjects}
                            </button>
                        </h2>
                        <div id="collapseProjects" class="accordion-container accordion-collapse collapse show" aria-labelledby="projectsPage" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div className='row d-flex justify-content-around'>
                                    {projects.map((project, index) => {
                                        return (
                                            <Project key={index} projectIndex={index + 1} project={project} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export { ProjectsUI }