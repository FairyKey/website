import React from 'react'
import GithubIcon from '../assets/github.svg'
const discussionUrl = "https://github.com/FairyKey/FairyKey/discussions"

function Contribute() {
    return (
        <div className='my-15 w-full flex flex-col items-center'>
            <span className='text-2xl font-semibold'>
                Have awesome ideas for new features?
            </span>
            <span className='text-xl mt-1'>
                Join the discussion! 💬
            </span>
            <a href={discussionUrl} target='_blank' rel='noopener noreferrer'>
                <button class="m-5 cursor-pointer font-bold py-2 px-4 rounded-md flex items-center bg-neutral-900 hover:bg-sky-400 transition-colors duration-220">
                    <img src={GithubIcon} alt="GitHub" className="size-8 mr-2 invert" />
                    <span className='text-white'>Github</span>
                </button>
            </a>
        </div>
    )
}

export default Contribute