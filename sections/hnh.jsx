import HnHs from "../components/hnh";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

import { honorsAndAwards } from "../store/store";

export default function HnH({ id }) {
    return (
        <Section
            id={id}
            content={
                <div>
                    <SectionHeader title={"Honors & Awards"} />
                    {honorsAndAwards.map((item, index) => {
                        return (
                            <HnHs
                                title={item.title}
                                description={item.description}
                                year={item.year}
                            />
                        );
                    })}
                </div>
            }
        />
    );
}
