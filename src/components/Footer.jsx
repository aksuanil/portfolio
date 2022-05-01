import React from 'react'

export default function Footer() {
    return (
        <div className='flex justify-center bg-black'>
            <div className='text-center p-6 w-full sm:w-1/2'>
                <div className='flex flex-row justify-evenly'>
                    <div className='hover:underline underline-offset-2'><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/an%C4%B1l-aksu-574779157/">LinkedIn</a></div>
                    <div className='hover:underline underline-offset-2'><a target="_blank" rel="noopener noreferrer" href="https://github.com/aksuanil">GitHub</a></div>
                    <div className='hover:underline underline-offset-2'><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/aksuanil_">Twitter</a></div>
                </div>
                <div className="block bg-gradient-to-r from-transparent via-zinc-600 to-transparent w-full bg-[length:80%_2px] bg-no-repeat bg-center pb-[6px]" />
                <div className='text-sm mt-3 flex gap-2 flex-col'>
                    <div>Designed & developed by Anıl Aksu</div>
                    <div>2022 Istanbul</div>
                </div>
            </div>
        </div>
    )
}
