'use client'

import { locations } from '@/data'
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import Image from 'next/image';
import { Draggable } from 'gsap/Draggable';
import useWindowStore from '@/store/window';
import useLocationStore from '@/store/location';
import { LocationItem } from '@/types/types';



const projects = locations.work?.children ?? [];

const HomeComp = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const handle1openProjectFinder = (project: LocationItem) => {
    setActiveLocation(project);
    openWindow('finder');
  }

  useGSAP(() => {
    Draggable.create('.folder');
  },[])


  return (
    <ul className='p-10'>
      {
        projects.map((proj: LocationItem ) => (
          <li key={proj.id}
            onClick={()=>handle1openProjectFinder(proj)}
            className={clsx("group folder w-20 flex flex-col items-center", proj.windowPosition)}
          >
            <Image alt={proj.name} src='/images/folder.png' width={50} height={40} />
            <p>{proj.name }</p>
          </li>
        ))
    }
    </ul >
  )
}

export default HomeComp