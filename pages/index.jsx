import Head from "next/head";

import { useState } from "react";

import { NextSeo } from "next-seo";

import ScrollToTop from "react-scroll-to-top";

import DarkThemeSwitchButton from "../components/buttons/dark-theme-switch";
import ScrollToTopButton from "../components/buttons/scroll-to-top";

import About from "../sections/about";
import Socials from "../sections/socials";
import Certifications from "../sections/certifications";
import Experiences from "../sections/experiences";
import Hero from "../sections/hero";
import HnH from "../sections/hnh";
import Publications from "../sections/publications";
import Tech from "../sections/tech";

import SEO from "../next-seo.config";

export default function Home() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? "dark" : ""}>
            <NextSeo {...SEO} />
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Hero />
            <About id={"about"} />
            <Experiences id={"experience"} />
            <Tech id={"tech"} />
            <Publications id={"publications"} />
            <HnH id={"hnh"} />
            <Certifications id={"certifications"} />
            <Socials id={"socials"} />

            <DarkThemeSwitchButton
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <ScrollToTop
                smooth
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#00D1B2",
                }}
                component={<ScrollToTopButton />}
            />
        </div>
    );
}
