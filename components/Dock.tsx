'use client'
import { dockApps } from '@/data'
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import React, { useRef } from 'react'
import { Tooltip } from 'react-tooltip';

const Dock = () => {

    const dockRef = useRef<HTMLDivElement>(null);


    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return;

        const icons = dock.querySelectorAll('.dock-icon');

        const animateIcons = (mouseX) => {
            const { left } = dock.getBoundingClientRect();
        }
    })

    const toggleApp = () => {
        
    }

    return (
        <section id='dock'>
            <div ref={dockRef} className='dock-container'>
                {
                    dockApps.map(({ name, id, icon, canOpen }) => (
                        <div key={id} className='relative flex justify-center'>
                            <button type='button' className='dock-icon'
                                aria-label={name} data-tooltip-id='dock-tooltip'
                                data-tooltip-content={name} data-tooltip-delay-show={150}
                                disabled={!canOpen}
                                onClick={() => toggleApp({id,canOpen})}
                            >
                                <Image alt={name}
                                    width={100} height={100}
                                    src={(`/images/${icon}`)}
                                    loading='lazy'
                                    className={canOpen ? '':'opacity-60'}
                                />
                            </button>
                        </div>
                    ))
                }
                <Tooltip id="dock-tooltip" place='top' className='tooltip'/>
            </div>
        </section>
    )
}

export default Dock