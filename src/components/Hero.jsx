// import iconDark from './assets/fairykey-icon-dark.png'
import iconLight from '../assets/fairykey-icon-light.png'
const downloadUrl = "https://github.com/FairyKey/FairyKey/releases/download/v1.0.3/FairyKey-v1.0.3-win-x64.zip"

function Hero() {
    return (
        <div className="flex flex-col md:flex-row-reverse justify-center items-center ">
            <img
                src={iconLight}
                alt="Fairykey icon"
                className="logo w-full md:max-w-100 max-w-sm ml-10 md:ml-0"
            />

            <div className="w-full max-w-100 border-0 border-gray-50 rounded-sm md:mr-15 ">
                <h2 className="text-5xl font-bold mb-2">Fairy Key</h2>
                <h1 className="text-2xl text-center">a virtual piano sheet scroller</h1>

                <div className="flex max-[400px]:flex-col m-5 justify-center items-center flex-row gap-5 max-[400px]:gap-1">
                    <a
                        href={downloadUrl}
                        className="text-white bg-sky-400 hover:bg-sky-600 focus:ring-blue-300 font-medium rounded-full p-5 cursor-pointer"
                    >
                        Download
                    </a>
                    <div className="flex-col">
                        {/* <p className="text-gray-500">Latest release</p> */}
                        <p>Version 1.0.3</p>
                        <p className="text-gray-400">Windows 64-bit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero