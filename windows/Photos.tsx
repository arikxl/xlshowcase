'use client'
import Image from 'next/image'
import { Mail, Search } from 'lucide-react'

import WindowWrapper from '@/hoc/WindowWrapper'
import useWindowStore from '@/store/window'
import WindowControls from '@/components/WindowControls'
import { gallery, photosLinks } from '@/data'

const Photos = () => {

    const { openWindow } = useWindowStore()

    return (
        <>
            <div id='window-header'>
                <WindowControls target='photos' />
                <div className='w-full flex justify-end items-center gap-3 text-gray-500'>
                    <Mail className='icon' />
                    <Search className='icon' />
                </div>
            </div>


            <div className='flex w-full'>
                <div className='sidebar'>
                    <h2>Gallery</h2>

                    <ul>
                        {photosLinks.map((photo) => (
                            <li key={photo.id} className='items-center flex'>
                                <Image alt={photo.title} src={photo.icon}
                                    width={300} height={300} />
                                <p>{photo.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='gallery'>
                    <ul>
                        {gallery.map(({ id, img }) => (
                            <li key={id}
                                onClick={() => openWindow('imgfile', {
                                    id, name: 'Gallery image',
                                    icon: '/images/image.png',
                                    kind: 'file',
                                    fileType: 'img',
                                    imageUrl: img
                                })}
                            >
                                <Image alt={`Gallery image ${id}`}
                                    src={img} width={200} height={200} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}


const PhotosWindow = WindowWrapper(Photos, 'photos');

export default PhotosWindow