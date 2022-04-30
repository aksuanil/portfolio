import React from 'react'

export default function About() {
    return (
        <div className=''>
            <div class="block bg-gradient-to-r from-transparent via-zinc-600 to-transparent w-full bg-[length:80%_2px] bg-no-repeat bg-center pb-[6px]"/>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col justify-center items-center self-center border-zinc-600 w-10/12 py-10 '>
                    <div> About Me</div>
                    <div className='w-10/12 md:w-4/5 text-justify'>I am a JavaScript enthusiast learning/developing in mainly on React.js. I am also working with .NET in my current occupation. </div>
                </div>
            </div>
            {/* <div class="block bg-gradient-to-r from-transparent via-zinc-600 to-transparent w-full bg-[length:80%_2px] bg-no-repeat bg-center pb-[6px]"/> */}
        </div>
    )
}
