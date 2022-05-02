import React from 'react'

export default function About() {
    return (
        <div className='animate-fadeIn animate-duration-[5000ms]'>
            <div className="block bg-gradient-to-r from-transparent via-zinc-600 to-transparent w-full bg-[length:80%_2px] bg-no-repeat bg-center pb-[6px]" />
            <div className='flex flex-col items-center'>
                <div className='flex flex-col justify-center items-center self-center border-zinc-600 w-10/12 mt-10 '>
                    <div className=' text-xl lg:text-2xl'> About Me</div>
                    <div className='w-11/12 tracking-wide md:w-4/5 text-justify my-6'> I'm a highly resourceful and passionate Software Engineer and well-rounded IT Professional possessing expert knowledge of the Software Development lifecycle and a solid understanding of technologies required for the development and deployment of highly available and scalable applications, including their networks and infrastructure.
                        Passionate about creating a positive user experience, I enjoy working with and adapting to technologies as they develop. In my freetime I build personal projects for Web Platforms, watch movies around the world, and I like to cook things for my family and friends.</div>
                </div>
            </div>
            {/* <div className="block bg-gradient-to-r from-transparent via-zinc-600 to-transparent w-full bg-[length:80%_2px] bg-no-repeat bg-center pb-[6px]"/> */}
        </div>
    )
}
