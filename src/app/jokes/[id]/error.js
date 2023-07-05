'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='m-10 h-36 flex justify-center flex-col items-center' >
            <h2 className='text-lg font-semibold'>Something went wrong!</h2>
            <button
                onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
                }
                className='m-3 bg-cyan-300 border-black font-semibold shadow-lg text-zinc-50 p-2 rounded'
            >
            Try again
            </button>
        </div>
        )
}