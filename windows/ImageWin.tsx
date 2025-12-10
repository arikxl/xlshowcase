'use client';

import WindowControls from '@/components/WindowControls';
import WindowWrapper from '@/hoc/WindowWrapper';
import useWindowStore from '@/store/window';
import Image from 'next/image';
import React from 'react'

const ImageWin = () => {

  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;
  if (!data) return null;

  const { imageUrl, name } = data;



  return (
    <>
      <div id='window-header'>
        <WindowControls target='imgfile' />
        <h2>{name}</h2>
      </div>


      <div className='p-5 bg-white'>
        {
          imageUrl
            ? (
              <div className='w-full'>
                <Image alt={name} src={imageUrl} width={2000} height={2000}
                  className='w-full h-auto max-h-[700px] object-contain rounded'
                />
              </div>
          )
            :null
        }
      </div>

    
    
    </>
  )
}


const ImageWindow = WindowWrapper(ImageWin, 'imgfile');

export default ImageWindow