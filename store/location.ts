import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "@/data";
import { LocationItem } from "@/types/types";


interface LocationState {
    activeLocation: LocationItem | null;
    setActiveLocation: (location: LocationItem) => void;
    resetActiveLocation: () => void;
}

const DEFAULT_LOCATION = locations.apps;


const useLocationStore = create<LocationState>()(
    immer((set) => ({
        activeLocation: DEFAULT_LOCATION,

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