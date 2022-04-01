import React from 'react'
import { Project } from './Project'

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
            name: 'Static Apps',
            description: 'Static apps created with React.js',
            link: '',
            repo: 'https://github.com/Ojitos369/static_apps',
            files: [
                'static-apps-1.png',
                'static-apps-2.png',
                'static-apps-3.png',
            ]
        },
        {
            name: 'Static Apps',
            description: 'Static apps created with React.js',
            link: 'https://ojitos369.github.io/static_apps/',
            repo: '',
            files: [
                'static-apps-1.png',
                'static-apps-2.png',
                'static-apps-3.png',
            ]
        }
    ]
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <p className='col-12 text-center h2'>
                        Some Projects
                    </p>
                </div>
                <div className='row d-flex justify-content-around'>
                    {projects.map((project, index) => {
                        return (
                            <Project key={index} projectIndex={index + 1} project={project} />
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export { ProjectsUI }