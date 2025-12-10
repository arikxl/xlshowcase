import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "@/data";
import { LocationItem } from "@/types/types";
// וודא שאתה מייבא את הטיפוס שיצרנו בשלב הקודם

// 1. הגדרת הממשק של ה-Store
// זה אומר ל-TS: "הסטור מכיל משתנה אחד ושתי פונקציות"
interface LocationState {
    activeLocation: LocationItem | null; // מאפשר null למקרה שאין בחירה
    setActiveLocation: (location: LocationItem) => void;
    resetActiveLocation: () => void;
}

const DEFAULT_LOCATION = locations.work;

// 2. יצירת ה-Store עם הטיפוס הגנרי (<LocationState>)
// השימוש ב-immer דורש סוגריים כפולים בחלק מהגרסאות, כך: create<T>()(...)
const useLocationStore = create<LocationState>()(
    immer((set) => ({
        activeLocation: DEFAULT_LOCATION,

        // אין צורך יותר להגדיר ידנית את ה-state בתוך הפונקציה,
        // TS מבין לבד ש-state הוא מסוג LocationState
        setActiveLocation: (location) =>
            set((state) => {
                state.activeLocation = location;
                if (location === undefined) return;
                state.activeLocation = location;

            }),

        resetActiveLocation: () =>
            set((state) => {
                state.activeLocation = DEFAULT_LOCATION;
            }),
    }))
);

export default useLocationStore;