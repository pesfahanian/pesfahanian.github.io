import Certification from "../components/certification";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

import { certifications } from "../store/store";

export default function Certifications({ id }) {
    return (
        <Section
            id={id}
            content={
                <div>
                    <SectionHeader title={"Certifications"} />
                    {certifications.map((item, index) => {
                        return (
                            <Certification
                                title={item.title}
                                year={item.year}
                            />
                        );
                    })}
                </div>
            }
        />
    );
}
