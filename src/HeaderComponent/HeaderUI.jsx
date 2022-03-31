import React from 'react'
import './HeaderUI.css'
import { Datos } from './Datos'
import { Technologies } from './Technologies'

function HeaderUI() {
    const show = 'datos'
    return (
        <header className='header container-fluent'>
            {/* Name Data */}
            <div className='row myName'>
                <p className='col text-center h1 pName'>
                    Erick Garcia
                </p>
            </div>
            <div className='row ocupation'>
                <p className='col text-center h4 mt-2 pOcupation'>
                    Software Developer
                </p>
            </div>
            <div className='row frase'>
                <p className='col text-center h6'>
                    if get_something() == 404: make_it()
                </p>
            </div>


            {/* Contact Data */}
            <div className='row bajoHeader'>
                {show === 'datos' && <Datos />}
                {show === 'technologies' && <Technologies />}
            </div>

        </header>
    )
}

export { HeaderUI }