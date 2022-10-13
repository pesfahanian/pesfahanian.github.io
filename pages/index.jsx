import Head from "next/head";
import { useState } from "react";

import ScrollToTop from "react-scroll-to-top";

import DarkThemeSwitchButton from "../components/buttons/dark-theme-switch";
import ScrollToTopButton from "../components/buttons/scroll-to-top";

import Contact from "../sections/contact";
import Experience from "../sections/experience";
import Footer from "../sections/footer";
import Hero from "../sections/hero";

export default function Home() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Parsa Esfahanian</title>
                <meta
                    name="Parsa Esfahanian Portflio"
                    content="Parsa Esfahanian Portflio"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            
            <Hero />
            <Experience />
            <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
            <Footer darkMode={darkMode} setDarkMode={setDarkMode} />

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
