'use client'

import Image from 'next/image'

import Time from './Time'
import useWindowStore from '@/store/window'
import { navIcons, navList } from '@/data'
import { useState } from 'react'

const Navbar = () => {

    const { openWindow } = useWindowStore();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleIconClick=(icon)=>{
        if (icon === 'mode') {
            setIsDarkMode(!isDarkMode);
        }
    }

    return (
        <nav className={isDarkMode ? 'bg-white/50' : 'bg-gray-800/50 text-white'}>
            <div>
                <Image alt='apple logo' src={isDarkMode ? '/images/logo1111.png' :'/images/logo11111.png'}
                    width={30} height={30} />
                <p className='font-bold'>arikxl</p>
                <ul>
                    {
                        navList.map(({id,title,type}) => (
                            <li key={id} onClick={()=>openWindow(type)}>
                                <p>{title}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='font-light'>
                <ul>
                    {
                        navIcons.map(({ id, img, imgW, func}) => (
                            <li key={id} className='icon-hover' >
                                <Image 
                                    alt={`icon-${id}`} src={isDarkMode ? img : imgW} width={20} height={20}
                                    onClick={() => handleIconClick(func)}
                                />
                            </li>
                        ))
                    }
                </ul>

                <Time isDarkMode={isDarkMode } />
            </div>
        </nav>
    )
}

export default Navbar