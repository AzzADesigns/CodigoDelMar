import React, { useState } from 'react'



export const NavMovile = () => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = ()=>{
        setIsActive(prev => !prev);
    }

    return (
        <motion.div className={`${isActive ?"h-70": "h-auto"} w-20 fixed flex justify-end items-end backdrop-blur-md rounded-full right-2.5 top-5`}>
            <button onClick={handleClick}>
                <img src="/logo.png" className='w-32' alt="" />
            </button>
        </motion.div>
    )
}
