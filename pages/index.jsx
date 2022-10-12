import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

import Hero from "../sections/hero";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
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
        </div>
    );
}
