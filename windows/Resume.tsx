'use client'

import React from 'react'
import WindowControls from '@/components/WindowControls'
import WindowWrapper from '@/hoc/WindowWrapper'
import { Download } from 'lucide-react'

const Resume = () => {
    // וודא ששם הקובץ הוא resume.pdf בתיקייה public/files
    const fileUrl = "/files/Arik Alexandrov.pdf";

    return (
        <div className='w-100 aspect-auto'>
            {/* Header */}
            <div id='window-header'>
                <WindowControls target='resume' />
                <h2>Resume.pdf</h2>
                <a href={fileUrl} download className='cursor-pointer' title='Download resume'>
                    <Download className='icon' />
                </a>
            </div>

            <div className="flex-1 w-full h-160 bg-gray-100 overflow-hidden">
                <iframe
                    src={fileUrl}
                    className="w-full h-full"
                    title="Arik Alexandrov Resume PDF"
                />
            </div>
        </div>
    )
}

const ResumeWindow = WindowWrapper(Resume, 'resume');
export default ResumeWindow;