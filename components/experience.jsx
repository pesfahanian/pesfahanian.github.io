export default function Experience({
    company,
    website,
    location,
    position,
    type,
    duration,
    site,
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
                    <h1
                        class="mr-1
                                   text-2xl
                                   font-bold
                                   text-primary
                                   dark:text-white"
                    >
                        {position}
                    </h1>
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

            <div class="flex flex-col lg:flex-row justify-between">
                <div class="mr-4">
                    <div class="flex flex-col lg:flex-row mt-2">
                        <div>
                            <a
                                href="{website}"
                                class="text-1xl font-bold text-red"
                            >
                                {company}
                            </a>
                        </div>
                        <span class="hidden sm:inline-block">
                            <h1 class="text-teal">&nbsp;|&nbsp;</h1>
                        </span>
                        <div class="flex flex-row">
                            <h1 class="text-1xl font-medium text-slate-400">
                                {type}
                            </h1>
                            <h1 class="text-teal">&nbsp;|&nbsp;</h1>
                            <h1 class="text-1xl font-medium text-slate-500">
                                {site}
                            </h1>
                        </div>
                    </div>
                </div>
                <span class="inline-block align-middle lg:pt-2">
                    <h1 class="text-1xl font-medium text-teal">{duration}</h1>
                </span>
            </div>
        </div>
    );
}
