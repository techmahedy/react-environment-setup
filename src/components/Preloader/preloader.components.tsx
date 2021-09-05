import React from 'react'

function Preloader() {
    return (
        <div className='preloader-body'>
            <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
            </div>
        </div>
    )
}

export default Preloader
