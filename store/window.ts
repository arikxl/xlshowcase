import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { WINDOW_CONFIG, INITIAL_Z_INDEX } from '@/data';
import { WindowItem, WindowStore } from "@/types/types";

const useWindowStore = create < WindowStore > ()(
    immer((set) => ({
        // אנחנו עושים Casting ל-WINDOW_CONFIG כדי שיתאים ל-Type שהגדרנו
        // (בהנחה שהקובץ data לא כתוב ב-TS עדיין)
        windows: WINDOW_CONFIG as Record<string, WindowItem>,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;

            win.isOpen = true;
            win.zIndex = state.nextZIndex;
            // השימוש ב-?? מבטיח שאם data הוא null, נשמור על הקיים
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
            // בדיקת קיום החלון (מומלץ ב-TS כדי למנוע שגיאות זמן ריצה)
            if (win) {
                win.zIndex = state.nextZIndex++;
            }
        }),
    }))
);


export default useWindowStore;
