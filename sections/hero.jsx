import GoTo from "../components/go-to";
import Section from "../components/section";

export default function Hero() {
    return (
        <Section
            content={
                <div>
                    <div class="text-center">
                        <h1
                            class="font-extrabold
                                   text-transparent
                                   text-6xl
                                   bg-clip-text
                                   bg-primary
                                   dark:bg-teal
                                   lg:text-8xl"
                        >
                            Parsa Esfahanian
                        </h1>
                        <p
                            class="flex
                                   flex-col
                                   mt-8
                                   items-center
                                   justify-center
                                   text-2xl
                                   text-teal
                                   dark:text-white
                                   lg:divide-x
                                   lg:flex-row
                                   lg:text-3xl"
                        >
                            <span class="px-2">Backend Developer</span>
                            <span class="px-2">
                                Machine Learning Researcher
                            </span>
                        </p>
                    </div>

                    <div
                        class="flex
                               flex-row
                               mt-8
                               items-center
                               justify-center
                               lg:flex-row"
                    >
                        <GoTo id={"about"} text={"About"} />
                        &#9679;
                        <GoTo id={"experience"} text={"Experience"} />
                        &#9679;
                        <GoTo id={"tech"} text={"Tech"} />
                        &#9679;
                        <GoTo id={"socials"} text={"Socials"} />
                    </div>
                    {/* <div
                        class="flex
                               flex-row
                               mt-2
                               items-center
                               justify-center
                               lg:flex-row"
                    >
                        <GoTo id={"publications"} text={"Publications"} />
                        &#9679;
                        <GoTo id={"hnh"} text={"Honors & Awards"} />
                        &#9679;
                        <GoTo id={"certifications"} text={"Certification"} />
                    </div> */}
                </div>
            }
        />
    );
}
