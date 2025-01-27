import WbytBtn from "@components/buttons/wbyt-btn";
import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const TopBarWrapper = styled.div<{ homeStyle: boolean }>`
    height: 180px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 4;
    padding: 0 50px 0 0;

    margin-right: ${(props) => (props.homeStyle ? "50px" : "0px")};
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const HeadingsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const ButtonsWrapper = styled.div`
    display: flex;
`;
const TopBarHeading1 = styled.h1`
    font-size: 35px;
    font-weight: 700;
    margin: 0;
`;

const TopBarHeading2 = styled.h2`
    font-size: 17px;
    font-weight: 600;
    color: #4d4d4d;
    margin: 0;
`;

interface Props {
    heading?: string;
    subheading?: string;
    homeStyle?: boolean;
    additionalButtons?: JSX.Element;
}

const TopBar: NextPage<Props> = ({
    heading,
    subheading,
    homeStyle,
    additionalButtons,
}) => {
    return (
        <TopBarWrapper homeStyle={homeStyle ?? false}>
            <HeadingsWrapper>
                {!homeStyle ? (
                    <>
                        <TopBarHeading1>{heading}</TopBarHeading1>
                        <TopBarHeading2>{subheading}</TopBarHeading2>
                    </>
                ) : (
                    <div></div>
                )}
            </HeadingsWrapper>
            <ButtonsWrapper>
                {/* <WbytBtn theme="bright" text="Login" /> */}
                {/* <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-primary-200 bg-primary-200/20 hover:bg-primary-200/40 text-primary-500 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Login
        </button> */}
                {/* <WbytBtn text="Mitglied werden" /> */}
                {additionalButtons}
                <Link href="/onboarding" passHref legacyBehavior>
                    <button
                        type="button"
                        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Mitglied werden
                    </button>
                </Link>
            </ButtonsWrapper>
        </TopBarWrapper>
    );
};

export default TopBar;
