'use client'

import WindowControls from '@/components/WindowControls'
import { talkPosts } from '@/data'
import WindowWrapper from '@/hoc/WindowWrapper'
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, Shield, ShieldHalf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Safari = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControls target='safari' />


                <PanelLeft className='ml-10 icon' />
                <div className='flex items-center ml-5 gap-1'>
                    <ChevronLeft className='icon' />
                    <ChevronRight className='icon' />
                </div>

                <div className='flex-1 flex-center gap-3'>
                    <ShieldHalf className='icon' />
                    <div className='search'>
                        <Search className='icon' />
                        <input type='text' className='flex-1'
                            placeholder='Search or enter website name' />
                    </div>
                </div>


                <div className='flex gap-5 items-center'>
                    <Share className='icon' />
                    <Plus className='icon' />
                    <Copy className='icon' />
                </div>

            </div>

            <div className='blog py-2 overflow-hidden'>
                <div className='overflow-y-auto h-130 [&::-webkit-scrollbar]:w-1.5
                                 [&::-webkit-scrollbar-track]:bg-slate-200
                                 [&::-webkit-scrollbar-thumb]:bg-slate-400
                                  [&::-webkit-scrollbar-thumb]:py-8
                                 [&::-webkit-scrollbar-thumb]:rounded-full'>

                    <h2>My Talks</h2>
                    <div>
                        {
                            talkPosts.map(({ id, iframeSrc, title, date, link, },i) => (
                                <div key={id} className='blog-post mb-6'>
                                    <div className='col-span-8'>
                                        <iframe width="260" height="130"
                                            src={iframeSrc}
                                            title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                        </iframe>
                                        {/* <Image width={300} height={100} src={image} alt={title} /> */}
                                    </div>

                                    <div className='content'>
                                        <p>{date}</p>
                                        <h3>{title}</h3>
                                        <Link href={link} target='_blank' rel='noopener noreferrer'>
                                            Check out the full {i===0 ? 'playlist': 'video'} <MoveRight className='icon-hover' />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow