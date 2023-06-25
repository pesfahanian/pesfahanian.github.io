export default function Social({ name, link, icon }) {
    return (
        <div class="grow">
            <a href={link}>
                <div
                    class="relative
                           block
                           py-4
                           rounded-lg
                           transition
                           ease-linear
                           bg-slate-200
                           text-primary
                           hover:scale-105
                           hover:bg-slate-400
                           dark:bg-secondary
                           dark:hover:bg-gray
                           hover:text-red
                           dark:text-white
                           dark:hover:text-teal"
                >
                    <div
                        class="flex
                               flex-row
                               content-center
                               items-center
                               justify-center
                               mx-4"
                    >
                        <h1
                            class="mr-2
                                   text-1xl
                                   font-bold"
                        >
                            {icon}
                        </h1>
                        <h1
                            class="text-1xl
                                   font-bold"
                        >
                            {name}
                        </h1>
                    </div>
                </div>
            </a>
        </div>
    );
}
