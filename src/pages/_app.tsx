import styled, { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";
import BaseLayout from "@components/layout/BaseLayout";
import "@styles/globals.css";
import "tailwindcss/tailwind.css";
import HomeLayout from "@components/layout/HomeLayout";
import { AppProps } from "next/dist/pages/_app";

export const wbytTheme = {
    colors: {
        waterblue: "#022EC7",
        buttonfill: "#022EC71A",
        buttonstroke: "#022EC74D",
        dunkelgrau: "#5E5E5E",
        dunkelschwarz: "#000000",
        transparent: "#0000000",
        white: "#fff",
        iconStrokeWidth: "10%",
    },
};

const Upandstyle = styled.div`
    background-color: red;
`;

export interface Route {
    path: string;
    heading: string;
    subheading: string;
}

const routes: Route[] = [
    { path: "/", heading: "Home", subheading: "Welcome to WBYT" },
    {
        path: "/projects",
        heading: "Projects",
        subheading: "Things we are building",
    },
    { path: "/team", heading: "Team", subheading: "Get to know the crew" },
    {
        path: "/blog",
        heading: "Blog",
        subheading: "Inhalte aus dem Umfeld der Waterbyte Community",
    },
    {
        path: "/onboarding",
        heading: "Onboarding",
        subheading: "Wir sind immer auf der suche nach bewanderten Talenten!",
    },
    {
        path: "/terms",
        heading: "Terms and Conditions",
        subheading: "Wie olles so oblauft bei uns",
    },
];

function WaterbyteWeb({ Component, pageProps }: AppProps): JSX.Element {
    const route = useRouter();
    const routeObjOtherThanHome = routes.find(
        (x) => route.pathname.includes(x.path) && x.path != "/"
    );
    return (
        <ThemeProvider theme={wbytTheme}>
            {route.pathname == "/" ? (
                <HomeLayout>
                    <Component {...pageProps} />
                </HomeLayout>
            ) : (
                <BaseLayout route={routeObjOtherThanHome!} children2={""}>
                    <Component {...pageProps} />
                </BaseLayout>
            )}
        </ThemeProvider>
    );
}

function GetMatchingRoute(theroute: string) {}

export default WaterbyteWeb;
