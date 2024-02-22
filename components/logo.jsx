import React from "react";

export default function Logo({ logo, index }) {
    return (
        <div>
            <a
                href={logo.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center"
            >
                <div className="w-24
                                h-24
                                bg-slate-200
                                rounded-lg
                                flex
                                items-center
                                justify-center
                                hover:bg-slate-400
                                hover:scale-105
                                dark:hover:bg-gray
                                dark:bg-slate-700"
                >
                    <img
                        src={logo.filePath}
                        alt={logo.alt}
                        title={logo.name}
                        className="w-32 h-32 object-contain z-10 p-4"
                    />
                </div>
            </a>
        </div>
    );
}
