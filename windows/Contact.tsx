'use client'
import Image from 'next/image';
import { UserStar } from 'lucide-react';

import { socials } from '@/data';
import WindowWrapper from '@/hoc/WindowWrapper';
import WindowControls from '@/components/WindowControls';

const Contact = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControls target='contact' />
                <h2>Contact Me</h2>
                <UserStar className='icon' />
            </div>


            <div className='p-5 space-y-5'>
                <Image alt='Arik Alexandrov' src='/images/adrian.jpg'
                    width={50} height={50}
                    className='w-20 rounded-full'
                />

                <h3>Let&lsquo;s Connect</h3>
                <p>Got an idea? Or just wanna talk?</p>
                <div className="leading-tight mt-4"> 
                    <p className="">I&rsquo;m here,</p> 
                    <p className="font-semibold text-lg">Arik Alexandrov.</p>
                </div>

                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg, color: 'white' }}>
                            <a href={link} target='_blank' rel='noopener noreferrer' >
                                <Image alt={text} src={icon} width={100} height={100}
                                    className='size-5' />
                            </a>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow