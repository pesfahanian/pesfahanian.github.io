import { BsFillMoonStarsFill } from "react-icons/bs";

export default function DarkThemeSwitchButton({ darkMode, setDarkMode }) {
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            class="cursor-pointer
                   fixed
                   flex
                   z-90 
                   bottom-[40px]
                   left-[40px]
                   w-[40px]
                   h-[40px]
                   justify-center
                   items-center
                   bg-white
                   border
                   border-blue-drm
                   rounded-[7px]
                   text-blue-drm
                   text-1xl
                   hover:bg-green-drm
                   dark:bg-blue-drm
                   dark:border-white
                   dark:text-white
                   dark:hover:bg-green-drm"
        >
            <BsFillMoonStarsFill />
        </button>
    );
}
