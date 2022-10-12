import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Hero() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
            <section class="flex items-center justify-center min-h-screen bg-white dark:bg-blue-drm">
                <div class="mx-auto max-w-auto">
                    <div class="text-center">
                        {/* <h1 class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-light to-green-light"> */}
                        <h1 class="font-extrabold text-transparent text-6xl bg-clip-text bg-blue-drm dark:bg-green-drm lg:text-8xl">
                            Parsa Esfahanian
                        </h1>
                        <p class="mt-8 text-1xl text-green-drm dark:text-white lg:text-3xl">
                            Backend Developer | Machine Learning Researcher
                        </p>
                    </div>

                    <div class="mt-8 flex items-center justify-center gap-4">
                        <a
                            href="#"
                            class="px-4 py-2 transform rounded-md border border-blue-drm font-medium text-blue-drm hover:bg-green-drm dark:text-white dark:border-white dark:hover:text-blue-drm"
                        >
                            Know More!
                        </a>
                        <BsFillMoonStarsFill
                            onClick={() => setDarkMode(!darkMode)}
                            className="cursor-pointer text-2xl text-green-drm hover:text-blue-drm dark:hover:text-white"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
