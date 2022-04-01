import React from 'react'
import { HeaderComponent } from '../Components/HeaderComponent'
import { ProjectsComponent } from '../Components/ProjectsComponent'

function AppUI() {
    return (
        <React.Fragment>
            <HeaderComponent />
            <ProjectsComponent />
        </React.Fragment>
    )
}

export { AppUI }