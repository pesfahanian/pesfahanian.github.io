import Exp from "../components/experience";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

export default function Experience() {
    return (
        <Section
            content={
                <div>
                    <SectionHeader title={"Experience"} />
                    <Exp
                        company={
                            "Institute for Research in Fundamental Sciences (IPM)"
                        }
                        location={"Tehran, Iran"}
                        position={"Machine Learning Researcher"}
                        type={"Part-Time"}
                        duration={"March 2018 - Present"}
                    />
                    <Exp
                        company={
                            "Institute for Research in Fundamental Sciences (IPM)"
                        }
                        location={"Tehran, Iran"}
                        position={"Machine Learning Researcher"}
                        type={"Part-Time"}
                        duration={"March 2018 - Present"}
                    />
                    <Exp
                        company={
                            "Institute for Research in Fundamental Sciences (IPM)"
                        }
                        location={"Tehran, Iran"}
                        position={"Machine Learning Researcher"}
                        type={"Part-Time"}
                        duration={"March 2018 - Present"}
                    />
                </div>
            }
        />
    );
}
