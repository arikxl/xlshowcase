'use client'

import Image from 'next/image';
import { SettingsIcon, Moon, Sun, Check } from 'lucide-react';

import WindowControls from '@/components/WindowControls';
import WindowWrapper from '@/hoc/WindowWrapper';
import useSystemStore from '@/store/system';
import { wallpapers } from '@/data'; 

const Settings = () => {
    const { theme, setTheme, wallpaper, setWallpaper } = useSystemStore();

    return (
        <>
            <div id='window-header'>
                <WindowControls target='settings' />
                <h2>Settings</h2>
                <SettingsIcon className='icon' />
            </div>

            <div className='p-6 space-y-8 overflow-y-auto h-full bg-[#f5f5f7] dark:bg-[#1e1e1e] text-black dark:text-white transition-colors duration-300'>

                <section>
                    <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">Appearance</h3>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setTheme('light')}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className={`relative w-20 h-14 rounded-lg border-2 flex items-center justify-center bg-gray-200 ${theme === 'light' ? 'border-blue-500' : 'border-gray-300 dark:border-gray-600'}`}>
                                <Sun className="text-gray-600 w-6 h-6" />
                            </div>
                            <span className="text-xs font-medium">Light</span>
                        </button>

                        <button
                            onClick={() => setTheme('dark')}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className={`relative w-20 h-14 rounded-lg border-2 flex items-center justify-center bg-gray-800 ${theme === 'dark' ? 'border-blue-500' : 'border-gray-300 dark:border-gray-600'}`}>
                                <Moon className="text-white w-6 h-6" />
                            </div>
                            <span className="text-xs font-medium">Dark</span>
                        </button>
                    </div>
                </section>

                <div className="h-px bg-gray-300 dark:bg-gray-700 w-full" />

                <section>
                    <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">Wallpaper</h3>
                    <div className="grid grid-cols-2 gap-4 w-92">
                        {wallpapers.map((wp) => (
                            <button
                                key={wp.id}
                                onClick={() => setWallpaper(wp.src)}
                                className={`relative group w-full aspect-video rounded-lg overflow-hidden border-2 transition-all 
                                ${wallpaper === wp.src ? 'border-blue-500 ring-2 ring-blue-200' : 'border-transparent hover:border-gray-300'}`}
                            >
                                <Image
                                    src={wp.src}
                                    alt={wp.name}
                                    fill
                                    className="object-cover"
                                />
                                {wallpaper === wp.src && (
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <div className="bg-blue-500 text-white rounded-full p-1 shadow-lg">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                    </div>
                                )}
                                <div className="absolute bottom-0 w-full bg-black/50 text-white text-[10px] py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {wp.name}
                                </div>
                            </button>
                        ))}
                    </div>
                </section>

            </div>
        </>
    )
}

const SettingsWindow = WindowWrapper(Settings, 'settings');

export default SettingsWindow;