import _Socials from "../components/socials";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

import { socials } from "../store/store";

export default function Socials({ id }) {
    return (
        <Section
            id={id}
            content={
                <div>
                    <SectionHeader title={"Socials"} />

                    <div class="flex flex-col gap-4 lg:flex-row">
                        {socials.map((item, index) => {
                            return (
                                <_Socials
                                    name={item.name}
                                    link={item.link}
                                    icon={item.icon}
                                />
                            );
                        })}
                    </div>
                </div>
            }
        />
    );
}
