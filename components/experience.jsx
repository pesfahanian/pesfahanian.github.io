export default function Exp({
    company,
    website,
    location,
    position,
    type,
    duration,
}) {
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
                    <a
                        href={website}
                        class="text-2xl
                               font-bold
                               text-red"
                    >
                        {company}
                    </a>
                </span>
                <span class="inline-block align-middle lg:pt-2">
                    <h1
                        class="text-1xl
                               font-medium
                               text-primary
                               dark:text-white"
                    >
                        {location}
                    </h1>
                </span>
            </div>

            <div class="flex flex-col justify-between lg:flex-row">
                <span class="mr-4">
                    <div class="flex flex-row">
                        <h1
                            class="mr-1
                                   text-1xl
                                   font-bold
                                   text-primary
                                   dark:text-white"
                        >
                            {position}
                        </h1>
                        <h1 class="text-teal">|</h1>
                        <h1
                            class="ml-1
                                   text-1xl
                                   font-medium
                                   text-slate-500"
                        >
                            {type}
                        </h1>
                    </div>
                </span>
                <span class="inline-block align-middle lg:pt-2">
                    <h1
                        class="text-1xl
                               font-medium
                               text-teal"
                    >
                        {duration}
                    </h1>
                </span>
            </div>
        </div>
    );
}
