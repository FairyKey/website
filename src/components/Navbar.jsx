import githubLogo from '../assets/github.svg'
import { useState } from 'react'

const GettingStartedUrl = "https://wiki.fairykey.app/gettingstarted"
const WikiUrl = "https://wiki.fairykey.app"
const GithubRepoUrl = "https://github.com/FairyKey/FairyKey"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative flex w-full justify-end bg-gray-0 p-5">
      {/* Desktop */}
      <ul className="hidden sm:flex items-end gap-4">
        <li>
          <a href={GettingStartedUrl} className="hover:text-gray-400">
            Getting Started
          </a>
        </li>
        <li>
          <a href={WikiUrl} className="hover:text-gray-400">
            Documentation
          </a>
        </li>
        <li>
          <a
            href={GithubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg cursor-pointer hover:text-gray-400"
          >
            GitHub
            <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
          </a>
        </li>
      </ul>

      {/* Mobile + hamburger */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-8 h-8 z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black my-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""
            }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
        />
      </button>

      {/* hamburger click sliding menu */}
      <ul
        className={`fixed top-0 right-0 h-full w-full min-[400px]:w-8/10 bg-white shadow-lg p-5 flex flex-col space-y-6 transform transition-transform duration-300 sm:hidden z-10 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <li>
          <a href="/Getting started" className="block w-full text-left hover:text-gray-400">
            Getting Started
          </a>
        </li>
        <li>
          <a href="/Getting started" className="block w-full text-left hover:text-gray-400">
            Documentation
          </a>
        </li>
        <li>
          <a
            href="https://github.com/FairyKey/FairyKey"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full text-left hover:text-gray-400">
            GitHub
            <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
