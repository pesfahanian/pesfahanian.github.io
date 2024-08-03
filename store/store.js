import { BsGithub, BsGoogle, BsLinkedin } from "react-icons/bs";

const experiences = [
    {
        company: "SnappFood",
        website: "https://snappfood.ir/",
        location: "Tehran, Iran",
        position: "Senior Backend Developer",
        type: "Full-Time",
        duration: "March 2023 - April 2024",
        site: "On-Site",
    },
    {
        company: "Tipax",
        website: "https://tipaxco.com/",
        location: "Tehran, Iran",
        position: "Data Consultant",
        type: "Contract",
        duration: "August 2023 - March 2024",
        site: "Remote",
    },
    {
        company: "Zarrino",
        website: "https://zarrino.io/",
        location: "Tehran, Iran",
        position: "Senior Backend Developer",
        type: "Full-Time",
        duration: "September 2021 - March 2023",
        site: "On-Site",
    },
    {
        company: "YAS Group",
        website: "http://yas.group/",
        location: "Tehran, Iran",
        position: "Backend Developer",
        type: "Full-Time",
        duration: "December 2020 - September 2021",
        site: "On-Site",
    },
    {
        company: "Logistic Bazaar",
        website: "https://itlogisticbazaar.ir/",
        location: "Tehran, Iran",
        position: "Computer Vision Engineer",
        type: "Part-Time",
        duration: "September 2019 - March 2020",
        site: "On-Site",
    },
    {
        company: "Magfa Information Technology Development Center",
        website: "https://www.magfa.com/PORTAL/HOME/?235035/MAGFA-HOME-ENGLISH",
        location: "Tehran, Iran",
        position: "Network Engineer",
        type: "Internship",
        duration: "June 2017 - August 2017",
        site: "On-Site",
    },
    {
        company: "Institute for Research in Fundamental Sciences (IPM)",
        website: "http://www.ipm.ac.ir/",
        location: "Tehran, Iran",
        position: "Machine Learning Researcher",
        type: "Part-Time",
        duration: "March 2018 - March 2023",
        site: "Hybrid",
    },
    {
        company: "MetaOptima Technology Inc.",
        website: "https://www.metaoptima.com/",
        location: "Vancouver, Canada",
        position: "Researcher",
        type: "Internship",
        duration: "September 2019 - October 2020",
        site: "Remote",
    },
];

const publications = [
    {
        name: "MeDerm: Deep Learning Framework for Automated Screening of Melanoma from Dermoscopic Images",
        paper: "https://www.ksmoconference.org/html/",
        journal: "KSMO Conference 2022",
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

const honorsAndAwards = [
    // {
    //     title: "Top-5 Selected",
    //     description: "StarHub Startup Competition",
    //     year: 2020,
    // },
    {
        title: "Lecturer",
        description: "Loop Academy AI for Medical Image Diagnosis Course",
        year: 2019,
    },
    {
        title: "Best Paper Award",
        description:
            "Artificial Intelligence in Medical Imaging 2019 Conference",
        year: 2019,
    },
    {
        title: "Lecturer",
        description:
            "10th IPM-HPC Workshop on Multi-core Systems and Parallel Platforms",
        year: 2019,
    },
];

const certifications = [
    {
        title: "9th IPM-HPC Workshop on Multi-core Systems and Graphic Processors",
        year: "Summer 2019",
    },
    {
        title: "The Sharif Spring School on AI: Philosophy, Ethics & Society",
        year: "Spring 2019",
    },
    {
        title: "IPM Advanced Data Science Summer School (ADS)",
        year: "Summer 2018",
    },
    {
        title: "University of Tehran Deep Learning Summer School (UTDLSS)",
        year: "Summer 2018",
    },
    {
        title: "IPM Elementary Data Science Summer School (EDS3)",
        year: "Summer 2018",
    },
    {
        title: "7th IPM-HPC Workshop on Multi-core Systems and GPU and It's Application in HPC",
        year: "Winter 2017",
    },
];

const tech = [
    {
        name: "Linux",
        alt: "linux",
        filePath: "logos/linux.svg",
        url: "https://www.linux.org/",
    },
    {
        name: "Git",
        alt: "git",
        filePath: "logos/git.svg",
        url: "https://git-scm.com/",
    },
    {
        name: "Go",
        alt: "go",
        filePath: "logos/go.svg",
        url: "https://golang.org/",
    },
    {
        name: "Python",
        alt: "python",
        filePath: "logos/python.svg",
        url: "https://www.python.org/",
    },
    {
        name: "JavaScript",
        alt: "javascript",
        filePath: "logos/javascript.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "TypeScript",
        alt: "typescript",
        filePath: "logos/typescript.svg",
        url: "https://www.typescriptlang.org/",
    },
    {
        name: "HTML5",
        alt: "html5",
        filePath: "logos/html5.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    },
    {
        name: "CSS",
        alt: "css",
        filePath: "logos/css.svg",
        url: "https://www.w3.org/Style/CSS/",
    },
    // ---------------------------------------------------
    {
        name: "PostgreSQL",
        alt: "postgresql",
        filePath: "logos/postgresql.svg",
        url: "https://www.postgresql.org/",
    },
    {
        name: "MongoDB",
        alt: "mongodb",
        filePath: "logos/mongodb.svg",
        url: "https://www.mongodb.com/",
    },
    {
        name: "Elasticsearch",
        alt: "elasticsearch",
        filePath: "logos/elasticsearch.svg",
        url: "https://www.elastic.co/elasticsearch/",
    },
    {
        name: "Kibana",
        alt: "kibana",
        filePath: "logos/kibana.svg",
        url: "https://www.elastic.co/kibana/",
    },
    {
        name: "Neo4j",
        alt: "neo4j",
        filePath: "logos/neo4j.svg",
        url: "https://neo4j.com/",
    },
    {
        name: "Redis",
        alt: "redis",
        filePath: "logos/redis.svg",
        url: "https://redis.io/",
    },
    {
        name: "RabbitMQ",
        alt: "rabbitmq",
        filePath: "logos/rabbitmq.svg",
        url: "https://rabbitmq.com/",
    },
    {
        name: "MinIO",
        alt: "minio",
        filePath: "logos/minio.svg",
        url: "https://min.io/",
    },
    // ---------------------------------------------------
    {
        name: "Django",
        alt: "django",
        filePath: "logos/django.svg",
        url: "https://www.djangoproject.com/",
    },
    {
        name: "FastAPI",
        alt: "fastapi",
        filePath: "logos/fastapi.svg",
        url: "https://fastapi.tiangolo.com/",
    },
    {
        name: "PyTorch",
        alt: "pytorch",
        filePath: "logos/pytorch.svg",
        url: "https://pytorch.org/",
    },
    {
        name: "TensorFlow",
        alt: "tensorflow",
        filePath: "logos/tensorflow.svg",
        url: "https://www.tensorflow.org/",
    },
    {
        name: "OpenCV",
        alt: "opencv",
        filePath: "logos/opencv.svg",
        url: "https://opencv.org/",
    },
    {
        name: "NumPy",
        alt: "numpy",
        filePath: "logos/numpy.svg",
        url: "https://numpy.org/",
    },
    {
        name: "Pandas",
        alt: "pandas",
        filePath: "logos/pandas.svg",
        url: "https://pandas.pydata.org/",
    },
    {
        name: "Jupyter",
        alt: "jupyter",
        filePath: "logos/jupyter.svg",
        url: "https://jupyter.org/",
    },
    // ---------------------------------------------------
    {
        name: "Docker",
        alt: "docker",
        filePath: "logos/docker.svg",
        url: "https://www.docker.com/",
    },
    {
        name: "Nginx",
        alt: "nginx",
        filePath: "logos/nginx.svg",
        url: "https://www.nginx.com/",
    },
    {
        name: "Node.js",
        alt: "nodejs",
        filePath: "logos/nodejs.svg",
        url: "https://nodejs.org/",
    },
    {
        name: "Next.js",
        alt: "nextjs",
        filePath: "logos/nextjs.svg",
        url: "https://nextjs.org/",
    },
    {
        name: "Socket.IO",
        alt: "socketio",
        filePath: "logos/socketio.svg",
        url: "https://socket.io/",
    },
    {
        name: "GraphQL",
        alt: "graphql",
        filePath: "logos/graphql.svg",
        url: "https://graphql.org/",
    },
    {
        name: "React",
        alt: "react",
        filePath: "logos/react.svg",
        url: "https://reactjs.org/",
    },
    {
        name: "Tailwind",
        alt: "tailwind",
        filePath: "logos/tailwind.svg",
        url: "https://tailwindcss.com/",
    },
];

const socials = [
    {
        name: "GitHub",
        link: "https://github.com/pesfahanian",
        icon: <BsGithub />,
    },
    // {
    //     name: "LinkedIn",
    //     link: "http://www.linkedin.com/in/parsa-esfahanian",
    //     icon: <BsLinkedin />,
    // },
    {
        name: "Google Scholar",
        link: "https://scholar.google.com/citations?user=wiwJd8oAAAAJ&hl=en",
        icon: <BsGoogle />,
    },
];

module.exports = {
    experiences,
    publications,
    honorsAndAwards,
    certifications,
    tech,
    socials,
};
