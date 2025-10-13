import React from 'react'
import iconLight from '../assets/fairykey-icon-light.png'

function InteractiveIcon() {
    return (
        <img
            src={iconLight}
            alt="Fairykey icon"
            className="logo w-full md:max-w-100 max-w-sm ml-10 md:ml-0 
                transform transition-transform duration-200 ease-out 
                hover:scale-110 active:scale-95 active:duration-75 cursor-pointer"
        />
    )
}

export default InteractiveIcon