export default function Pub({ name, paper, journal, website }) {
    return (
        <div
            class="relative
                   block
                   mb-4
                   px-4
                   py-4
                   rounded-lg
                   transition
                   ease-linear
                   bg-slate-200
                   hover:scale-105
                   hover:bg-slate-400
                   dark:bg-secondary
                   dark:hover:bg-gray"
        >
            <h1
                class="text-1xl
                       font-bold
                       text-primary
                       dark:text-white"
            >
                {name}
            </h1>

            <div class="flex flex-row">
                <a
                    href={website}
                    class="mr-1
                           text-1xl
                           font-bold
                           text-red"
                >
                    {journal}
                </a>
                <h1 class="text-teal">|</h1>
                <a
                    href={paper}
                    class="ml-1
                           text-1xl
                           font-medium
                           text-slate-500"
                >
                    Paper
                </a>
            </div>
        </div>
    );
}
