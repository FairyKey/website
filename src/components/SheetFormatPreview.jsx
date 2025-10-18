import React from 'react'

const TransposeDetectorUrl="https://github.com/FairyKey/FairyKey/discussions/3#discussioncomment-14650256"

function SheetFormatPreview() {
    return (
        <div className='text-left flex flex-col md:flex-row mt-15 items-stretch'>

            {/* left side */}
            <div className='p-5 max-w-sm flex-shrink-0'>
                <h1 className='text-2xl text-left font-semibold'>Sheet formatting</h1>
                <p>
                    Fairy Key reads sheets written in virtual piano-style notation. Optional
                    metadata such as Title, Artist, and the sheet's creator can be added to
                    display them at the beginning of the sheet.
                </p>

                <div className='flex items-baseline mt-8'>
                    <h1 className='text-2xl text-left font-semibold'>Transpose detector v2</h1>
                    <span className='bg-sky-400 font-bold text-white rounded-lg px-2.5 py-1 ml-2'>
                        New
                    </span>
                </div>

                <p>
                    Fairy Key can detect multiple forms of transpose labels often found in sheets online.</p>
                <p className='pt-6'> Some examples of {''}
                    <a
                        href={TransposeDetectorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-500 hover:underline font-semibold"
                    >
                        supported formats:
                    </a>
                </p>

                <div className='flex flex-wrap gap-2 p-1 font-mono pt-3'>
                    {[
                        '+3',
                        'Transpose by 3',
                        'Transpose: 3',
                        '-3 (Octave 3) -9',
                        'No Transposition',
                        '(transpose -3)',
                        'Transposition is -3',
                    ].map((text) => (
                        <span key={text}
                            className='bg-neutral-700 text-white p-2 rounded-lg'>
                            {text}
                        </span>
                    ))}
                </div>
            </div>

            {/* right side */}
            <div className="m-5 font-mono drop-shadow-sm flex-1 flex flex-col max-h-[27.5rem] max-w-md md:w-sm">
                <div className="bg-neutral-700 text-neutral-200 rounded-t-lg p-4">
                    <span>clairdelune.txt</span>
                </div>
                <div
                    className='flex-1 overflow-y-scroll 
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-neutral-500
            [&::-webkit-scrollbar-thumb]:rounded-lg
            bg-neutral-800 text-neutral-100 rounded-b-lg p-4
            min-h-[200px]'
                    style={{ scrollbarGutter: 'stable' }}
                >
                    <span>
                        Title=Clair delune<br />
                        Artist=Claude Debussy<br />
                        Creator=Unknown<br />
                        +1<br />
                        [uo] [fh] [sf]<br />
                        [iO] [ad] [sf] [ad]<br />
                        [uo] [ps] [ad] [ps] f s<br />
                        [yi] [oa] [ps] [oa]<br />
                        [tyi] p a p d p [ryio] p o<br />
                        [ety] i o i [Wryu]<br />
                        [wet] u i u p u [qey] u y<br />
                        [0we] t y t [9qwr] 5<br />
                        1 [0w] [uo] [fh] [sf]<br />
                        [48] [pd] f d<br />
                        [38] s d [sh] [sf]<br />
                        [qe] [pd] f d s<br />
                        [0w] t y [tup] [tu]<br />
                        [9q] i o [ips] [ip]<br />
                        [59q] p a [oaf] [5io]<br />
                        [1fh] 5 8 w<br />
                        [tfh] l
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SheetFormatPreview
