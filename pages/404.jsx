export default function PageNotFound() {
    return (
        // Taken from https://tailwindcomponents.com/component/404-page-not-found.
        <main
            class="
                flex
                flex-col
                w-full
                h-screen
                justify-center
                items-center
                bg-primary
                "
        >
            <h1 class="text-9xl font-extrabold text-white tracking-widest">
                404
            </h1>
            <div class="mb-[60px] bg-teal px-2 text-sm -rotate-12 rounded-md absolute">
                Page Not Found!
            </div>
            <button class="mt-5">
                <a href="/" class="relative inline-block text-sm font-medium text-teal">
                    <span
                        class="
                            relative
                            block
                            px-8
                            py-3
                            bg-primary
                            border
                            border-teal
                            rounded-md
                            hover:bg-teal
                            hover:text-primary
                        "
                    >
                        Home
                    </span>
                </a>
            </button>
        </main>
    );
}
