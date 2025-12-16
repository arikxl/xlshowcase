import { create } from 'zustand';

interface SystemState {
    theme: 'light' | 'dark';
    wallpaper: string;
    setTheme: (theme: 'light' | 'dark') => void;
    setWallpaper: (src: string) => void;
}

const useSystemStore = create<SystemState>((set) => ({
    theme: 'light',
    wallpaper: '/images/wallpaper2.png',

    setTheme: (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        set({ theme });
    },

    setWallpaper: (wallpaper) => set({ wallpaper }),
}));

export default useSystemStore;