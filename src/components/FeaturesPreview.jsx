import { useState } from 'react'
import PreviewBtn from './AppPreviewBtn'
import screenshot1 from '../assets/screenshots/Preview.mp4'
import screenshot2 from '../assets/screenshots/Library.mp4'

function FeaturesPreview() {
    const [currentScreenshot, setCurrentScreenshot] = useState(screenshot1)
    const [activeButton, setActiveButton] = useState('autoScrolling')

    function handleButtonClick(buttonId, screenshot) {
        setActiveButton(buttonId)
        setCurrentScreenshot(screenshot)
    }

    return (
        <div className="flex w-full flex-col md:flex-row items-center justify-center gap-4">
            <div className="relative  w-full aspect-video">
                <video
                    src={screenshot1}
                    loop
                    muted
                    autoPlay
                    playsInline
                    className={`relative w-full h-full md:h-auto object-contain transition-opacity duration-300 ${currentScreenshot === screenshot1 ? 'opacity-100' : 'opacity-0'}`}
                    alt="Preview video of Fairy Key - Auto Scrolling"
                />
                <video
                    src={screenshot2}
                    loop
                    muted
                    autoPlay
                    playsInline
                    className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${currentScreenshot === screenshot2 ? 'opacity-100' : 'opacity-0'}`}
                    alt="Preview video of Fairy Key - Library"
                />
            </div>

            <div className="w-full flex flex-col gap-1 max-w-md">
                <PreviewBtn
                    title="Auto Scrolling 📜"
                    description="Fairy Key scrolls for you in Play mode as you play the correct notes! Fairy Key can be overlayed on top of your Virtual Piano app and inputs are passed through while in Play Mode."
                    onClick={() => handleButtonClick('autoScrolling', screenshot1)}
                    isActive={activeButton === 'autoScrolling'}
                />

                <PreviewBtn
                    title="Library 📚"
                    description="Quick access to all of your saved sheets. You can use the Sheet Library to quickly play, edit, and delete saved sheets!"
                    onClick={() => handleButtonClick('library', screenshot2)}
                    isActive={activeButton === 'library'}
                />

                <PreviewBtn
                    title="Noob Mode 😋"
                    description="Non shifted notes are counted as correct notes."
                    onClick={() => handleButtonClick('noobMode', screenshot1)} // placeholder
                    isActive={activeButton === 'noobMode'}
                />
            </div>
        </div>
    )
}

export default FeaturesPreview