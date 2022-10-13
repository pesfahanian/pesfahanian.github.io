import { BsMoonFill, BsSunFill } from "react-icons/bs";

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
                   border-primary
                   rounded-[7px]
                   text-primary
                   text-1xl
                   hover:bg-teal
                   dark:bg-primary
                   dark:border-white
                   dark:text-white
                   dark:hover:bg-teal"
        >
            {darkMode ? <BsSunFill /> : <BsMoonFill />}
        </button>
    );
}
