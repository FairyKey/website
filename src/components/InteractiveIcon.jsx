import {useState, useEffect, React} from 'react'
import iconLight from '../assets/fairykey-icon-light.png'
import noteSound from '../assets/c.mp3'

function InteractiveIcon() {
    const [audioCtx, setAudioCtx] = useState(null);
    const [buffer, setBuffer] = useState(null);
    const [note, setNote] = useState(0);

    const melody = [-5, -8, -13, -5, -6, -10, -15, -6, -6, -8, -8]

    useEffect(() => {
        const ctx = new(window.AudioContext)
        setAudioCtx(ctx)

        fetch(noteSound)
        .then(res => res.arrayBuffer())
        .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
        .then(decoded => setBuffer(decoded))
        .catch(err => console.error(err));
    }, [])

    const playNote = (semitones) => {
        if (!audioCtx || !buffer) return;

        const src = audioCtx.createBufferSource();
        src.buffer = buffer;

        src.playbackRate.value = Math.pow(2, semitones / 12);

        src.connect(audioCtx.destination);
        src.start(0);
    };

    const handleClick = () => {
        const nextNote = melody[note];
        playNote(nextNote)
        setNote((note + 1) % melody.length);
    }

    return (
        <img
            src={iconLight}
            alt="Fairykey icon"
            className="logo w-full md:max-w-100 max-w-sm ml-10 md:ml-0 
                transform transition-transform duration-200 ease-out 
                hover:scale-110 active:scale-95 active:duration-75 cursor-pointer"
            onClick={handleClick}
        />
    )
}

export default InteractiveIcon