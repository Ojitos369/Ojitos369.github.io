import React from 'react';

function Head({s}) {
    return (
        <header 
            className={`text-light`}
            id = "header">
            <div className='defoque'></div>
            <h1>Erick Garcia</h1>
            <br />
            <h3>Software Developer</h3>
            <h4>if get_something() == 404: make_it()</h4>
        </header>
    )
}

export { Head };