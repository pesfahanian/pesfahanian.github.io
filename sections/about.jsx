import Section from "../components/section";
import SectionHeader from "../components/section-header";

export default function About({ id }) {
    return (
        <Section
            id={id}
            content={
                <div
                    class="flex
                           items-center
                           justify-center"
                >
                    <div class="min-w-[60%] lg:w-[60%]">
                        <SectionHeader title={"About"} />
                        <div
                            class="mb-4
                                   px-4
                                   py-4
                                   rounded-lg
                                   bg-slate-200
                                   dark:bg-secondary"
                        >
                            <div class="flex flex-col lg:flex-row">
                                <div
                                    class="
                                           space-y-6
                                           items-center
                                           md:flex
                                           md:space-y-0
                                           md:gap-6
                                           lg:gap-12"
                                >
                                    <div
                                        class="w-1/2
                                               mx-auto
                                               items-center
                                               justify-center
                                               content-center
                                               align-center
                                               lg:w-1/3"
                                    >
                                        <img
                                            src="parsa.jpg"
                                            alt="image"
                                            class="rounded-lg
                                                   items-center
                                                   justify-center
                                                   content-center
                                                   align-center"
                                        />
                                    </div>
                                    <div class="text-primary dark:text-white">
                                        <h2
                                            class="mb-4
                                                   text-2xl
                                                   font-bold
                                                   md:text-4xl"
                                        >
                                            Hi, I'm{" "}
                                            <span class="text-teal">
                                                Parsa Esfahanian
                                            </span>
                                            !
                                        </h2>
                                        <p class="mb-2">
                                            I have a{" "}
                                            <span class="font-extrabold">
                                                Bachelor of Science in Applied
                                                Mathematics
                                            </span>{" "}
                                            and a{" "}
                                            <span class="font-extrabold">
                                                Master of Science in Computer
                                                Science
                                            </span>
                                            .
                                        </p>
                                        <p class="mb-2">
                                            I spent 5 years as a{" "}
                                            <span class="font-extrabold">
                                                Machine Learning Researcher
                                            </span>{" "}
                                            focusing on Medical Imaging at the{" "}
                                            <a
                                                href="https://hpc.ipm.ac.ir/"
                                                class="text-red hover:text-teal"
                                            >
                                                High-Performance Computing (HPC){" "}
                                            </a>
                                            laboratory of the Department of
                                            Computer Science,{" "}
                                            <a
                                                href="http://www.ipm.ac.ir/"
                                                class="text-red hover:text-teal"
                                            >
                                                Institute for Research in
                                                Fundamental Sciences (IPM)
                                            </a>
                                            .
                                        </p>
                                        <p class="mb-2">
                                            I am also a{" "}
                                            <span class="font-extrabold">
                                                Backend Developer
                                            </span>{" "}
                                            working with{" "}
                                            <a
                                                onClick={() =>
                                                    document
                                                        .getElementById("tech")
                                                        .scrollIntoView({
                                                            behavior: "smooth",
                                                        })
                                                }
                                                class="cursor-pointer font-extrabold text-red hover:text-teal"
                                            >
                                                This
                                            </a>{" "}
                                            tech stack.
                                        </p>
                                        <p class="mb-2">
                                            {" "}
                                            I play the Electric Guitar and Piano
                                            in my free time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
}
