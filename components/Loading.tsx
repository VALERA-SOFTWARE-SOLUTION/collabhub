import React, { useEffect, useState } from "react";

const Loading: React.FC = () => {
    const [loadingText, setLoadingText] = useState("Loading...");

    const texts = [
        "Loading your experience...",
        "Preparing awesomeness...",
        "Almost there...",
        "Just a moment...",
        "Hang tight...",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * texts.length);
            setLoadingText(texts[randomIndex]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="flex flex-col items-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4 animate-spin border-t-orange-500"></div>
                <p className="text-white text-lg">{loadingText}</p>
            </div>
        </div>
    );
};

export default Loading;