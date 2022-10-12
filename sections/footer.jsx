export default function Footer({ darkMode, setDarkMode }) {
    return (
        <footer class="relative bg-blueGray-200 pt-8 pb-6">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-6/12 px-4">
                        <h4 class="text-3xl fonat-semibold text-blueGray-700">
                            Let's keep in touch!
                        </h4>
                        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2
                            business days.
                        </h5>
                        <div class="mt-6 lg:mb-0 mb-6">
                            <button
                                class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i class="fab fa-twitter"></i>
                            </button>
                            <button
                                class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i class="fab fa-facebook-square"></i>
                            </button>
                            <button
                                class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i class="fab fa-dribbble"></i>
                            </button>
                            <button
                                class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i class="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-green-drm" />
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-blueGray-500 font-semibold py-1">
                            Developed by Parsa Esfahanian.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
