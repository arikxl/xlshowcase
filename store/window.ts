import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { WindowItem, WindowStore } from "@/types/types";
import { WINDOW_CONFIG, INITIAL_Z_INDEX } from '@/data';

const useWindowStore = create < WindowStore > ()(
    immer((set) => ({
        windows: WINDOW_CONFIG as Record<string, WindowItem>,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;

            win.isOpen = true;
            win.zIndex = state.nextZIndex;
            win.data = data ?? win.data;
            state.nextZIndex++;
        }),

        closeWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX;
            win.data = null;
        }),

        focusWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            if (win) {
                win.zIndex = state.nextZIndex++;
            }
        }),
    }))
);


export default useWindowStore;
