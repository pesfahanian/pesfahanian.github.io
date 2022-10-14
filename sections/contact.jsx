import Con from "../components/contact";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

import { contact } from "../store/store";

export default function Publications({ id }) {
    return (
        <Section
            id={id}
            content={
                <div>
                    <SectionHeader title={"Contact"} />

                    <div class="flex flex-col gap-4 lg:flex-row">
                        {contact.map((item, index) => {
                            return (
                                <Con
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
