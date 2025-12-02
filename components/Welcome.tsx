'use client'

import { WELCOME_FONT_WEIGHTS } from '@/data';
import { WelcomeFontKey } from '@/types/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { JSX, useRef } from 'react'


const renderText = (
    text: string,
    className: string,
    baseWeight: number = 500
): JSX.Element[] => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));
}

const setupTextHover = (
    container: HTMLElement | null,
    type: WelcomeFontKey
) => {
    if (!container) return () => { };

    const letters = container.querySelectorAll('span');
    const { min, max, default: base } = WELCOME_FONT_WEIGHTS[type];

    const animationLetter = (letter: HTMLSpanElement, weight: number, duration = 0.25) => {
        return gsap.to(letter, { duration, ease: 'power2.out', fontVariationSettings: `'wght' ${weight}` });
    }

    const handleMouseMove = (e: { clientX: number; }) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 20000);

            animationLetter(letter, min + (max - min) * intensity);
        })
    }

    const handleMouseLeave = () => {
        letters.forEach((l) => animationLetter(l, base, 0.3))
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);


    return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
    }
}





const Welcome = () => {

    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);


    useGSAP(() => {
        const titleCleanUp = setupTextHover(titleRef.current, 'title');
        const subTitleCleanUp = setupTextHover(subtitleRef.current, 'subtitle');


        return () => {
            titleCleanUp();
            subTitleCleanUp();
        }
    }, [])

    return (
        <section id='welcome'>
            <p ref={subtitleRef} className='text-white  leading-tight drop-shadow-lg font-semibold'>
                {renderText("Shalom, I'm Arik! A Web & Kids Developer. Welcome to my world.", 'text-3xl font-georama', 200)}
            </p>
            <h1 ref={titleRef} className='mt-7 '>
                {renderText("arikxl", 'text-9xl italic font-bold font-georama')}
            </h1>


            <div className='small-screen'>
                <p>
                    This site is designed for desktop/tablet screens only.
                </p>
            </div>

        </section>
    )
}

export default Welcome