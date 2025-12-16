'use client'

import Image from 'next/image'

import Time from './Time'
import useWindowStore from '@/store/window'
import { navIcons, navList } from '@/data'
import { useState } from 'react'
import useSystemStore from '@/store/system'

const Navbar = () => {

    const { openWindow } = useWindowStore();
    const { theme, setTheme } = useSystemStore();

    const isDarkMode = theme === 'dark';

    const handleIconClick = (func: string) => {
        if (func === 'mode') {
            setTheme(isDarkMode ? 'light' : 'dark');
        }
    }

    return (
        <nav className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-800/50 text-white' : 'bg-white/50 text-black'}`}>
            <div>
            <Image alt='arikxl logo' src={!isDarkMode ? '/images/logo1111.png' : '/images/logo11111.png'}
                    width={30} height={30} />
                <p className='font-bold'>arikxl</p>
                <ul>
                    {
                        navList.map(({ id, title, type }) => (
                            <li key={id} onClick={() => openWindow(type)}>
                                <p>{title}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='font-light'>
                <ul>
                    {
                        navIcons.map(({ id, img, imgW, func }) => (
                            <li key={id} className='icon-hover ' >
                                <button className='cursor-pointer' aria-label={func}>
                                    <Image
                                        alt={`icon-${id}`} src={!isDarkMode ? img : imgW}
                                        width={20} height={20}
                                        onClick={() => handleIconClick(func)}
                                    />
                                </button>
                            </li>
                        ))
                    }
                </ul>

                <Time isDarkMode={!isDarkMode} />
            </div>
        </nav>
    )
}

export default Navbar