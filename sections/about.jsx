import Image from "next/image";

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
                                            I graduated with a Bachelor of
                                            Science in in Applied Mathematics
                                            and a Mater of Science in Computer
                                            Science.
                                        </p>
                                        <p class="mb-2">
                                            {" "}
                                            I am currently a full-time Backend
                                            Developer at{" "}
                                            <a
                                                href="chapterpitch.com"
                                                class="italic text-[#8c49f7] hover:text-teal"
                                            >
                                                ChapterPitch.com
                                            </a>
                                            . Some of the technologies that I
                                            work with are Python, Django,
                                            FastAPI, Celery, PostgreSQL,
                                            MongoDB, RabbitMQ, Redis, and
                                            Docker.
                                        </p>
                                        <p class="mb-2">
                                            {" "}
                                            I am also a part-time Machine
                                            Learning Researcher focusing on
                                            Medical Imaging at the{" "}
                                            <a
                                                href="https://hpc.ipm.ac.ir/"
                                                class="text-red hover:text-teal"
                                            >
                                                High-Performance Computing (HPC){" "}
                                            </a>
                                            laboratory of the Department of
                                            Computer Science, Institute for
                                            Research in Fundamental Sciences
                                            (IPM).
                                        </p>
                                        <p class="mb-2">
                                            {" "}
                                            I play the Electric Guitar and
                                            dabble in Crypto in my free time.
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
