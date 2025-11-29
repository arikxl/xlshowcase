"use client"; 

import { useState, useEffect } from "react";

export default function Time() {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
      
        const initialTimeout = setTimeout(() => {
            setTime(new Date());
        }, 0);

        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(intervalId);
        };
    }, []);

    if (!time) {
        return <span className="opacity-0">00:00</span>;
    }

    const formattedTime = new Intl.DateTimeFormat("en-US", {
        weekday: "short", 
        month: "short",   
        day: "numeric",   
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,    
    }).format(time);

    return (
        <time className=" text-gray-800">
            {formattedTime}
        </time>
    );
}