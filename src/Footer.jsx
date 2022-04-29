import React from 'react'

export default function Footer() {
    return (
        <div className='flex justify-center bg-black'>
            <div className='p-12 w-full sm:w-1/2'>
                <div className='flex flex-row justify-evenly'>
                    <div className='hover:underline underline-offset-2'>LinkedIn</div>
                    <div>GitHub</div>
                    <div>Twitter</div>
                </div>
            </div>
        </div>
        )
}
