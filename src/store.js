import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        profile: {
            first_name: "Parsa",
            last_name: "Esfahanian",
            birthDay: new Date(1996, 10, 21),
        },
        technologies: {
            python1: [
                { name: "Numpy" },
                { name: "Pandas" },
                { name: "Scikit-Learn" },
            ],
            python2: [
                { name: "Tensorﬂow" },
                { name: "Keras" },
            ],
            python3: [
                { name: "PyTorch" },
                { name: "PyTorch Geometric" },
            ],
            python4: [
                { name: "OpenCV" },
                { name: "PyDICOM" },
            ],
            python5: [
                { name: "Django" },
                { name: "Django REST framework" },
            ],
            python6: [
                { name: "FastAPI" },
                { name: "Celery" },
                { name: "Redis" },
            ],
            python7: [
                { name: "Python-GitLab" },
                { name: "Python-Kubernetes" },
            ],
            python8: [
                { name: "Python-Binance" },
                { name: "Freqtrade" },
                { name: "Jesse" },
            ],
            javascript: [
                { name: "Vue.js" },
                { name: "Nuxt.js" },
            ],
            c: [
                { name: "OpenMP" },
                { name: "MPI" },
                { name: "CUDA" },
            ],
            database: [
                { name: "PostgreSQL" },
                { name: "MongoDB" },
                { name: "InfluxDB" },
                { name: "Redis" },
            ],
            os: [
                { name: "Ubuntu" },
                { name: "Kali" },
                { name: "CentOS" },
            ],
            other: [
                { name: "Linux" },
                { name: "Git" },
                { name: "Docker" },
                { name: "Latex" },
            ],
            learning: [
                { name: "Go" },
                { name: "Kubernetes" },
                { name: "RPC" },
            ],
        },
        projects: [
            {
                name: "Dr. Machine",
                description: "Intelligent Medical Imaging.",
                source: "https://github.com/Dr-Machine",
            },
            {
                name: "ai-corona",
                description: "ai-corona: Radiologist-Assistant Deep Learning Framework for COVID-19 Diagnosis in Chest CT Scans.",
                source: "https://github.com/Dr-Machine/ai_corona",
                paper: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0250952",
            },
            {
                name: "Nameko Microservice",
                description: "Simple microservice application utilizing RabbitMQ and RPC.",
                source: "https://github.com/pesfahanian/nameko_practice",
            },
            {
                name: "DangiDongi",
                description: "Equally split a tab of shared & respective items between its participants.",
                source: "https://github.com/pesfahanian/DangiDongi",
            },
            {
                name: "ML_API",
                description: "REST API for running inference using DenseNet. Made with FastAPI, PostgreSQL, Redis, and PyTorch.",
                source: "https://github.com/pesfahanian/ML_API",
            },
            {
                name: "Pneumonia Detection",
                description: "Using DenseNet and InceptionV3 to diagnose pneumonia over Kaggle dataset.",
                source: "https://github.com/pesfahanian/Kaggle_Pneumonia_InceptionV3",
            },
            {
                name: "Virtual Attendance",
                description: "Python script to virtually attend your online classes for you while you sleep!",
                source: "https://github.com/pesfahanian/virtual_attendance",
            },
            {
                name: "Skin Lesion Diagnosis",
                description: "Skin Lesion Diagnosis Using Ensemble Deep Learning Models.",
                paper: "https://www.researchgate.net/profile/Hossein-Motahari/publication/345353523_Skin_Lesion_Diagnosis_Using_Ensemble_Deep_Learning_Models/links/6058846f299bf173675cad87/Skin-Lesion-Diagnosis-Using-Ensemble-Deep-Learning-Models.pdf",
            },
            {
                name: "Game of Life",
                description: "John Conway's Game of Life.",
                source: "https://github.com/pesfahanian/Game_of_Life",
            },
            {
                name: "Kaggle Credit Card Fraud Detection",
                description: "Credit card fraud detection with two neural network model, with and without data balancing.",
                source: "https://github.com/pesfahanian/Kaggle_Credit_Card_Fraud_Detection",
            },
            {
                name: "GACNN",
                description: "GACNN: Training Deep Convolutional Neural Networks with Genetic Algorithm.",
                paper: "https://arxiv.org/abs/1909.13354",
            },
            {
                name: "Skippynn",
                description: "Skippynn: An Embedded Stochastic-Computing Accelerator for Convolutional Neural Networks.",
                paper: "https://ieeexplore.ieee.org/abstract/document/8806970",
            },
        ], events: [
            {
                name: "Y.A.S. Group ",
                link: "http://yas.group/",
                role: "Back-End Developer",
                startDate: "December 2020",
                endDate: "Present",
                roles: [
                    { description: " Developed and deployed a crypto-trading strategy backtesting micro-service using Docker, FastAPI, Celery, Redis, PostgreSQL, and the Freqtrade crypto-trading package." },
                    { description: " Developed an SDK for backtesting and evaluating custom trading strategies using Freqtrade, and PyFolio." },
                    { description: " Co-team-lead in the development of a custom algorithmic crypto-trading bot using Django, Celery, Redis, PostgreSQL, Python-Binance, and the Jesse crypto-trading package." },
                    { description: " Developing the back-end of a Jupyter-as-a-service platform (i.e. an in-house Google Colab) using Django, Django REST framework, Simple JWT, Python-GitLab, Python-Kubernetes, and Jupyter." },
                ]
            },
            {
                name: "Institute for Research in Fundamental Sciences (IPM) ",
                link: "http://www.ipm.ac.ir/",
                role: "Medical Machine Learning Researcher",
                startDate: "March 2020",
                endDate: "Present",
                roles: [
                    { description: " Researching the cutting-edge of deep learning for medical applications." },
                    { description: " Researched on integrating evolutionary methods with the training of convolutional neural networks." },
                    { description: " Participated in the research of embedded stochastic-computing convolutional neural network accelerators." },
                ]
            },
            {
                name: "ai-corona.com ",
                link: "https://ai-corona.com/",
                role: "Co-Founder, AI Engineer, Front-End Developer",
                startDate: "March 2020",
                endDate: "Present",
                roles: [
                    { description: " Developed and deployed a deep learning framework for accurate COVID-19 diagnosis in chest CT scans using Keras." },
                    { description: " Prototyped a Django back-end for the website capable of communicating with the deep learning model through REST API." },
                    { description: " Developed the website's Front-End using bootstrap." },
                ]
            },
            {
                name: "MetaOptima Technology Inc. ",
                link: "https://www.metaoptima.com/",
                role: "Research Intern",
                startDate: "September 2019",
                endDate: "October 2020",
                roles: [
                    { description: " Developed a synthesized dataset creation pipeline for the task of ruler segmentation in dermoscopic images using OpenCV." },
                    { description: " Developed a UNet+ResNet model for the same task using keras." },
                ]
            },
            {
                name: "Logistic Bazaar ",
                link: "https://itlogisticbazaar.ir/",
                role: "Computer Vision Engineer",
                startDate: "September 2019",
                endDate: "March 2020",
                roles: [
                    { description: " Developed an image-processing pipeline for silhouette detection and isolation of parcel boxes in a 3D perspective image using OpenCV." },
                    { description: " Developed Detectron2 segmentation model for the same task using PyTorch." },
                ]
            },
            {
                name: "Magfa Information Technology Development Center ",
                link: "https://www.magfa.com/PORTAL/HOME/?235035/MAGFA-HOME-ENGLISH",
                role: "Network Engineer Intern",
                startDate: "June 2017",
                endDate: "August 2017",
                roles: [
                    { description: " Worked on practices and solutions to gather and store large amounts of GPS data from a fleet of trucks and re-distribute them among several clients." },
                ]
            },

        ], socials: [
            {
                name: "LinkedIn",
                link: "http://www.linkedin.com/in/parsa-esfahanian",
                icon: "linkedin"
            },
            {
                name: "Github",
                link: "https://github.com/pesfahanian",
                icon: "github"
            },
        ]
    },

    getters: {
        age: state => {
            let ageDiff = Date.now() - state.profile.birthDay;
            let ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        profile: state => state.profile,
        projects: state => state.projects,
        technologies: state => state.technologies,
        events: state => state.events,
        socials: state => state.socials
    },
    mutations: {},
    actions: {}
});
