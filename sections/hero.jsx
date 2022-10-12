import GoTo from "../components/go-to";

export default function Hero() {
    return (
        <section class="flex items-center justify-center min-h-screen bg-white dark:bg-blue-drm">
            <div class="mx-auto max-w-auto">
                <div class="text-center">
                    <h1 class="font-extrabold text-transparent text-6xl bg-clip-text bg-blue-drm dark:bg-green-drm lg:text-8xl">
                        Parsa Esfahanian
                    </h1>
                    <p
                        class="flex
                              flex-col
                              mt-8
                              items-center
                              justify-center
                              text-2xl
                              text-green-drm
                              dark:text-white
                              lg:divide-x
                              lg:flex-row
                              lg:text-3xl"
                    >
                        <span class="px-2">Backend Developer</span>
                        <span class="px-2">Machine Learning Researcher</span>
                    </p>
                </div>

                <div class="flex flex-row mt-8 items-center justify-center lg:flex-row">
                    <GoTo href={"#"} text={"About"} />
                    <GoTo href={"#"} text={"Experience"} />
                    <GoTo href={"#"} text={"Publications"} />
                    <GoTo href={"#"} text={"Contact"} />
                </div>
            </div>
        </section>
    );
}
