import githubLogo from '../assets/github.svg'

function Navbar() {
  return (
    <nav className="nav flex w-full justify-between bg-gray-0 p-5">
      <a href="/" className="site-title font-semibold text-lg"></a>
      <ul className="flex items-end gap-4 ">
        <li>
          <a href="/Getting started" className="hover:text-gray-400">Getting Started
          </a>
        </li>
        <li>
          <a href="/Getting started" className="hover:text-gray-400">Documentation
          </a>
        </li>
        <li>
          <a
            href="https://github.com/FairyKey/FairyKey"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg cursor-pointer hover:text-gray-400"
          >
            GitHub
            <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
          </a>
        </li>
      </ul>
    </nav >

  )
}

export default Navbar