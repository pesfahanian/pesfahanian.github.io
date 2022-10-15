import Head from "next/head";

import { useState } from "react";

import { NextSeo } from "next-seo";

import ScrollToTop from "react-scroll-to-top";

import DarkThemeSwitchButton from "../components/buttons/dark-theme-switch";
import ScrollToTopButton from "../components/buttons/scroll-to-top";

import About from "../sections/about";
import Contact from "../sections/contact";
import Experience from "../sections/experience";
import Hero from "../sections/hero";
import Publications from "../sections/publications";

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
            <Experience id={"experience"} />
            <Publications id={"publications"} />
            <Contact id={"contact"} />

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
