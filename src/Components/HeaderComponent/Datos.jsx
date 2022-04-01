import React from 'react'

function Datos() {
    const copyData = (data) => {
        navigator.clipboard.writeText(data);
        const alertContainer = document.getElementById('alertContainer');
        const copyAlert = document.getElementById('copyAlert');
        copyAlert.innerHTML = `Copied ${data} to clipboard`;
        alertContainer.style.display = 'flex';
        setTimeout(() => {
            alertContainer.style.display = 'none';
            copyAlert.innerHTML = '';
        }, 800)
    }
    return (
        <React.Fragment>
        <div className='container data-container'>
            {/* Contact */}
            <div className='row contact-item-container'>
                <div className='col-6 col-sm-4 contact-item d-flex justify-content-center' data-bs-toggle="tooltip" title="Copy +525525605025">
                    <span onClick={() => {
                        copyData('+525525605025')
                    }}>
                        Phone: 
                    </span>
                    <a 
                        href='tel:+525525605025' 
                        data-bs-toggle="tooltip"
                        title="Go to +525525605025"
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img 
                            className='contact-icon'
                            src={require('../../assets/media/icons/phone.png')}
                            alt="tel"
                        />
                    </a>
                </div>
                <div className='col-6 col-sm-4 contact-item d-flex justify-content-center' data-bs-toggle="tooltip" title="Copy ojitos369@gmail.com">
                    <span onClick={() => {
                        copyData('ojitos369@gmail.com')
                    }}>
                        Email: 
                    </span>
                    <a 
                        href='mailto: ojitos369@gmail.com' 
                        data-bs-toggle="tooltip"
                        title="Mail to ojitos369@gmail.com"
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img 
                            className='contact-icon'
                            src={require('../../assets/media/icons/email.png')}
                            alt="email"
                        />
                    </a>
                </div>
                <div className='col col-sm-4 contact-item d-flex justify-content-center' data-bs-toggle="tooltip" title="Copy Direction">
                    <span onClick={() => {
                        copyData('Heraldo de Toluca 409, Prensa Nacional, 54170 Tlalnepantla de Baz, Méx.')
                    }}>
                        Direction: 
                    </span>
                    <a 
                        href='https://goo.gl/maps/oHDpwhQH1igzHNHQ8' 
                        data-bs-toggle="tooltip"
                        title="Go with Google Maps"
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img 
                            className='contact-icon'
                            src={require('../../assets/media/icons/location.png')}
                            alt="map"
                        />
                    </a>
                </div>
            </div>

            {/* Social */}
            <div className='row social-item-container'>
                <div className='col-4 col-md social-item  d-flex justify-content-center'>
                    <a 
                        href='https://www.linkedin.com/in/ojitos369/' 
                        data-bs-toggle="tooltip"
                        title="(Erick Garcia) https://www.linkedin.com/in/ojitos369/"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-icon'
                    >
                        <img 
                            className='social-icon-img'
                            src={require('../../assets/media/icons/linkedin.png')}
                            alt="tel"
                        />
                    </a>
                </div>
                <div className='col-4 col-md social-item  d-flex justify-content-center'>
                    <a 
                        href='https://github.com/Ojitos369' 
                        data-bs-toggle="tooltip"
                        title="(Erick Garcia) https://github.com/Ojitos369"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-icon'
                    >
                        <img 
                            className='social-icon-img'
                            src={require('../../assets/media/icons/github.png')}
                            alt="tel"
                        />
                    </a>
                </div>
                <div className='col-4 col-md social-item  d-flex justify-content-center'>
                    <a 
                        href='https://platzi.com/p/Ojitos369/' 
                        data-bs-toggle="tooltip"
                        title="(Erick Garcia) https://platzi.com/p/Ojitos369/"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-icon'
                    >
                        <img 
                            className='social-icon-img'
                            src={require('../../assets/media/icons/platzi.png')}
                            alt="tel"
                        />
                    </a>
                </div>
                <div className='col-4 col-md social-item  d-flex justify-content-center'>
                    <a 
                        href='https://www.instagram.com/ojitos369/' 
                        data-bs-toggle="tooltip"
                        title="(Ojitos369) https://www.instagram.com/ojitos369/"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-icon'
                    >
                        <img 
                            className='social-icon-img'
                            src={require('../../assets/media/icons/instagram.png')}
                            alt="tel"
                        />
                    </a>
                </div>
                <div className='col-4 col-md social-item  d-flex justify-content-center'>
                    <a 
                        href='https://www.twitter.com/ojitos369/' 
                        data-bs-toggle="tooltip"
                        title="(Ojitos369) https://www.twitter.com/ojitos369/"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-icon'
                    >
                        <img 
                            className='social-icon-img'
                            src={require('../../assets/media/icons/twitter.png')}
                            alt="tel"
                        />
                    </a>
                </div>
                <div className='col-4 col-md social-item  d-flex justify-content-center'>
                    <a 
                        href='https://www.facebook.com/ojitos369/' 
                        data-bs-toggle="tooltip"
                        title="(Ojitos369) https://www.facebook.com/ojitos369/"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-icon'
                    >
                        <img 
                            className='social-icon-img'
                            src={require('../../assets/media/icons/facebook.png')}
                            alt="tel"
                        />
                    </a>
                </div>
            </div>
        </div>
        <div id='alertContainer'>
            <p id='copyAlert' className='alert alert-warning' role='alert'>
                This alert
            </p>
        </div>
        </React.Fragment>
    )
}

export { Datos }