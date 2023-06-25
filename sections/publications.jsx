import Publication from "../components/publication";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

import { publications } from "../store/store";

export default function Publications({ id }) {
    return (
        <Section
            id={id}
            content={
                <div>
                    <SectionHeader title={"Publications"} />

                    {publications.map((item, index) => {
                        return (
                            <Publication
                                name={item.name}
                                paper={item.paper}
                                journal={item.journal}
                                website={item.website}
                            />
                        );
                    })}
                </div>
            }
        />
    );
}
