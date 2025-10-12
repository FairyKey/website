import React from 'react'

function SheetFormatPreview() {
    return (
        <div className='text-left flex flex-col md:flex-row items-top mt-10'>
            <div className='p-5'>
                <h1 className='text-2xl text-left font-semibold'>Sheets</h1>
                <p className='max-w-sm'>Fairy Key reads sheets from user-provided .txt files. In addition to virtual piano notation, sheets can include metadata, such as the Title, Artist, and creator of the sheet, as well as transposition data between lines. They follow the following format:</p>
            </div>
            <div className='m-5 font-mono drop-shadow-sm '>
                <div className='bg-neutral-700 text-neutral-200 rounded-t-lg p-4 pl-4'>
                    <span>
                        clairdelune.txt
                    </span>
                </div>
                <div className='max-h-100 overflow-y-scroll 
                [&::-webkit-scrollbar]:w-3
                    [&::-webkit-scrollbar-track]:bg-neutral-700
                    [&::-webkit-scrollbar-thumb]:bg-neutral-500
                    [&::-webkit-scrollbar-thumb]:rounded-lg
                    sm:min-w-sm bg-neutral-800 text-neutral-100 rounded-b-lg p-4'>
                    <span>
                        Title=Clair delune<br />
                        Artist=Claude Debussy<br />
                        Composer=Tevins<br />
                        +1<br />
                        [uo] [fh] [sf] [iO] <br />
                        [ad] [sf] [ad]  -<br />
                        [uo] [ps] [ad] [ps] f s <br />
                        [yi] [oa] [ps] [oa]  <br />
                        [tyi] p a p d p [ryio] <br />
                        p o [ety] i o i [Wryu]<br />
                        [uo] [fh] [sf] [iO] <br />
                        [ad] [sf] [ad]  -<br />
                        [uo] [ps] [ad] [ps] f s <br />
                        [yi] [oa] [ps] [oa]  <br />
                        [tyi] p a p d p [ryio] <br />
                        p o [ety] i o i [Wryu]<br />
                        [uo] [fh] [sf] [iO] <br />
                        [ad] [sf] [ad]  -<br />
                        [uo] [ps] [ad] [ps] f s <br />
                        [yi] [oa] [ps] [oa]  <br />
                        [tyi] p a p d p [ryio] <br />
                        p o [ety] i o i [Wryu]<br />
                        [uo] [fh] [sf] [iO] <br />
                        [ad] [sf] [ad]  -<br />
                        [uo] [ps] [ad] [ps] f s <br />
                        [yi] [oa] [ps] [oa]  <br />
                        [tyi] p a p d p [ryio] <br />
                        p o [ety] i o i [Wryu]<br />
                    </span>
                </div>
            </div>

        </div>
    )
}

export default SheetFormatPreview