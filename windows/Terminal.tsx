'use client'

import { techStack } from '@/data'
import WindowWrapper from '@/hoc/WindowWrapper'
import WindowControls from '@/components/WindowControls'
import { SquareCode } from 'lucide-react'

const Terminal = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControls target='terminal'/>
                <h2>Tech Stack</h2>
                <SquareCode className='icon' />
            </div>

            <div className='techstack'>
                <p>
                    <span className='font-bold'>@arikxl %&nbsp;</span>show tech stack
                </p>

                <div className='label'>
                    <p className='w-32'>Category</p>
                    <p>Technologies</p>
                </div>

                <ul className='content'>
                    {techStack.map(({ category, items }) => (
                        <li key={category} className='flex items-center'>
                            ✅
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item, i) => (
                                    <li key={i}>{item}
                                        {i < items.length - 1 ? ',' : ''}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>


                <div className='footnote'>
                    <p>
                        ✅ &nbsp;6 of 6 stacks loaded successfully (100%)
                    </p>

                    <p className='text-black'>
                        <span className='text-lg'>🏴</span>&nbsp;Render time: 6ms
                    </p>
                </div>

            </div>
        </>
    )
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow