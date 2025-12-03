/* eslint-disable @typescript-eslint/no-explicit-any */
import { WELCOME_FONT_WEIGHTS } from "@/data";

export type WelcomeFontKey = keyof typeof WELCOME_FONT_WEIGHTS;

export type FontWeightConfig = {
    min: number;
    max: number;
    default: number;
};


export type WindowItem = {
    isOpen: boolean;
    zIndex: number;
    data: any; 
    [key: string]: any; 
};


export type WindowStore = {
    windows: Record<string, WindowItem>;
    nextZIndex: number;

    openWindow: (windowKey: string, data?: any) => void;
    closeWindow: (windowKey: string) => void;
    focusWindow: (windowKey: string) => void;
};