'use client'

import clsx from 'clsx';
import Image from 'next/image';
import { Search } from 'lucide-react';

import { locations } from '@/data';
import { LocationItem } from '@/types/types';
import WindowWrapper from '@/hoc/WindowWrapper';
import WindowControls from '@/components/WindowControls';
import useLocationStore from '@/store/location';

const Finder = () => {


    const { activeLocation, setActiveLocation } = useLocationStore();

    const openItem = (item) => {
        
    }

    const renderList = (name: string, items: LocationItem[]) => (

        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li className={clsx(item.id === activeLocation?.id ? 'active' : 'not-active')}
                        key={item.id} onClick={() => setActiveLocation(item)}>
                        <Image alt={item.name} src={item.icon}
                            className='w-4' width={100} height={100} />
                        <p className='text-sm font-medium truncate'>
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <div id='window-header'>
                <WindowControls target='finder' />
                <Search className='icon' />
            </div>

            <div className='bg-white flex h-full'>
                <div className='sidebar'>
                    {renderList('Favorites', Object.values(locations) as unknown as LocationItem[])}
                    {locations.work?.children && renderList('Work', locations.work.children)}
                </div>

                <ul className='content'>
                    {
                        activeLocation?.children?.map((item) => (
                            <li key={item.id} className={item.position}
                            onClick={()=>openItem(item)}
                            >
                                <Image src={item.icon} alt={item.name}
                                    width={100} height={100} />
                                <p>{item.name }</p>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </>
    )
}


const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow