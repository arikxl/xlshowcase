'use client'

import React, { ComponentType, FunctionComponent, useRef } from 'react'

import useWindowStore from '@/store/window'

const WindowWrapper = <P extends object>(
  Component: ComponentType<P>,
  windowKey: string) => {

  const Wrapped: FunctionComponent<P> = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef<HTMLDivElement>(null);


    return <section id={windowKey} ref={ref}
      style={{ zIndex }} className='absolute'
    >
      <Component {...(props as P)} />
    </section>
  }

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;


  return Wrapped;
}

export default WindowWrapper