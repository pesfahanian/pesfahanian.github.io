import Section from "../components/section";
import SectionHeader from "../components/section-header";
import Logo from "../components/logo";

import { tech } from "../store/store";

export default function Tech({ id }) {
    return (
        <Section
            id={id}
            content={
                <div>
                    <SectionHeader title={"Tech"} />
                    <div className="grid
                                    grid-cols-4
                                    gap-2
                                    lg:gap-4
                                    lg:grid-cols-8
                    ">
                        {tech.map((logo, index) => (
                            <Logo logo={logo} index={index} />
                        ))}
                    </div>
                </div>
            }
        />
    );
}
