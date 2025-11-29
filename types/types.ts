import { WELCOME_FONT_WEIGHTS } from "@/data";

export type WelcomeFontKey = keyof typeof WELCOME_FONT_WEIGHTS;

export type FontWeightConfig = {
    min: number;
    max: number;
    default: number;
};


