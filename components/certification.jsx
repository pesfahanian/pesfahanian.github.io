export default function Certification({ title, year }) {
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
            <div class="flex flex-col justify-between lg:flex-row">
                <span class="mr-4">
                    <h1
                        class="mr-1
                                   text-1xl
                                   font-bold
                                   text-primary
                                   dark:text-white"
                    >
                        {title}
                    </h1>
                </span>
                <span class="inline-block align-middle lg:pt-1">
                    <h1 class="text-1xl font-medium text-teal">{year}</h1>
                </span>
            </div>
        </div>
    );
}
