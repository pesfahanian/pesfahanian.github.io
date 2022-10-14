import Exp from "../components/experience";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

import { experiences } from "../store/store";

export default function Experience({ id }) {
    return (
        <Section
            id={id}
            content={
                <div>
                    <SectionHeader title={"Experience"} />

                    {experiences.map((item, index) => {
                        return (
                            <Exp
                                company={item.company}
                                website={item.website}
                                location={item.location}
                                position={item.position}
                                type={item.type}
                                duration={item.duration}
                            />
                        );
                    })}
                </div>
            }
        />
    );
}
