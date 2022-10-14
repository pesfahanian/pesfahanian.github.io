import { BsFillEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";

const experiences = [
    {
        company: "Chapter One Ventures",
        website: "https://chapteroneventure.com/",
        location: "Tehran, Iran",
        position: "Senior Backend Developer",
        type: "Full-Time",
        duration: "September 2021 - Present",
    },
    {
        company: "Institute for Research in Fundamental Sciences (IPM)",
        website: "http://www.ipm.ac.ir/",
        location: "Tehran, Iran",
        position: "Machine Learning Researcher",
        type: "Part-Time",
        duration: "March 2018 - Present",
    },
    {
        company: "YAS Group",
        website: "http://yas.group/",
        location: "Tehran, Iran",
        position: "Backend Developer",
        type: "Full-Time",
        duration: "December 2020 - September 2021",
    },
    {
        company: "MetaOptima Technology Inc.",
        website: "https://www.metaoptima.com/",
        location: "Vancouver, Canada",
        position: "Research Intern",
        type: "Remote Internship",
        duration: "September 2019 - October 2020",
    },
    {
        company: "Logistic Bazaar",
        website: "https://itlogisticbazaar.ir/",
        location: "Tehran, Iran",
        position: "Computer Vision Engineer",
        type: "Part-Time",
        duration: "September 2019 - March 2020",
    },
    {
        company: "Magfa Information Technology Development Center",
        website: "https://www.magfa.com/PORTAL/HOME/?235035/MAGFA-HOME-ENGLISH",
        location: "Tehran, Iran",
        position: "Network Engineer",
        type: "Internship",
        duration: "June 2017 - August 2017",
    },
];

const publications = [
    {
        name: "MeDerm: Deep Learning Framework for Automated Screening of Melanoma from Dermoscopic Images",
        paper: "https://www.ksmoconference.org/html/",
        journal: "Korean Society of Medical Oncology Conference 2022",
        website: "https://www.ksmoconference.org/html/",
    },
    {
        name: "Deep Learning Framework for Prediction of Infection Severity of COVID-19",
        paper: "https://www.frontiersin.org/articles/10.3389/fmed.2022.940960/full",
        journal: "Frontiers in Medicine",
        website: "https://www.frontiersin.org/journals/medicine",
    },
    {
        name: "ai-corona: Radiologist-Assistant Deep Learning Framework for COVID-19 Diagnosis in Chest CT Scans",
        paper: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0250952",
        journal: "PloS One",
        website: "https://journals.plos.org/plosone/",
    },
    {
        name: "Skin Lesion Diagnosis Using Ensemble Deep Learning Models",
        paper: "https://www.researchgate.net/publication/345353523_Skin_Lesion_Diagnosis_Using_Ensemble_Deep_Learning_Models",
        journal: "Iranian Journal of Radiology",
        website:
            "https://en.tums.ac.ir/diglib/en/journal/volume/24/iranian-journal-of-radiology",
    },
    {
        name: "GACNN: Training Deep Convolutional Neural Networks with Genetic Algorithm",
        paper: "https://arxiv.org/abs/1909.13354",
        journal: "arXiv",
        website: "https://arxiv.org/",
    },
    {
        name: "SkippyNN: An Embedded Stochastic-Computing Accelerator for Convolutional Neural Networks",
        paper: "https://ieeexplore.ieee.org/abstract/document/8806970",
        journal: "Design Automation Conference 2019",
        website: "https://www.dac.com/About/Conference-Archive/56th-DAC-2019",
    },
];

const contact = [
    {
        name: "pesfahanian96@gmail.com",
        link: "mailto:pesfahanian96@gmail.com",
        icon: <BsFillEnvelopeFill />,
    },
    {
        name: "GitHub",
        link: "https://github.com/pesfahanian",
        icon: <BsGithub />,
    },
    {
        name: "LinkedIn",
        link: "http://www.linkedin.com/in/parsa-esfahanian",
        icon: <BsLinkedin />,
    },
];

module.exports = {
    experiences,
    publications,
    contact,
};
