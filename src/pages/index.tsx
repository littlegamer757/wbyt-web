import type { NextPage } from "next";
import Head from "next/head";

import S1Foundation from "@components/aboutSections/s1-foundation";
import S2Origin from "@components/aboutSections/s2-origin";
import S3Activities from "@components/aboutSections/s3-activities";
import S4Strategy from "@components/aboutSections/s4-strategy";
import S5Contact from "@components/aboutSections/s5-contact";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>waterbyte</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className=" mb-36">
                <S1Foundation />
                <S2Origin />
                <S3Activities />
                <S4Strategy />
                <S5Contact />
            </div>
        </>
    );
};

export default Home;
