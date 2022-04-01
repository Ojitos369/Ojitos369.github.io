import React from 'react'
import './HeaderUI.css'
import { Datos } from './Datos'
import { Technologies } from './Technologies'

function HeaderUI() {
    const [show, setShow] = React.useState('datos');

    const toggleShow = () => {
        if (show === 'datos') {
            setShow('technologies');
        } else {
            setShow('datos');
        }
    }
    return (
        <header className='myheader'>
            <div className='row'>
                <div className='header-fondo'></div>
            </div>
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
            <div className='row d-flex justify-content-end' id='headerToggle-Container'>
                <img
                    className='col-1 icon-contact btn headerToggle'
                    src={require('../assets/media/icons/toggle.png')}
                    alt='toggle'
                    onClick={toggleShow}
                />
                <span className='col-1'></span>
            </div>
            <div className='row bajoHeader d-flex justify-content-center'>
                {show === 'datos' && <Datos />}
                {show === 'technologies' && <Technologies />}
            </div>

        </header>
    )
}

export { HeaderUI }