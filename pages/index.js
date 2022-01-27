import Footer from "@/components/Footer";
import FrontFace from "@/components/FrontFace";
import Header from "@/components/Header";
import ThemeButton from "@/components/ThemeButton";
import WorkSection from "@/components/WorkSection";

import styles from "../styles/Home.module.scss";
import useTheme from "@/utils/customHooks/useTheme";
import {
	footerInfoData,
	front_face,
	header,
	personalData,
	theme,
	workExperience,
} from "@/utils/userData";
import Head from "next/head";

export default function Home() {
	const [colorTheme, toggleTheme] = useTheme(theme);

	return (
		<>
			<Head>
				<meta name="description" content={front_face.about} />
				<meta property="og:title" content={personalData.title} />
				<meta property="og:description" content={front_face.about} />
				<meta property="twitter:title" content={personalData.title} />
				<meta property="twitter:description" content={front_face.about} />
			</Head>

			<div className={styles.app}>
				<ThemeButton colorTheme={colorTheme} toggleTheme={toggleTheme} />
				<Header {...header} />
				<FrontFace {...front_face} />
				<WorkSection workExperience={workExperience} />
				<Footer
					email={personalData.email}
					info={footerInfoData}
					theme={colorTheme}
				/>
			</div>
		</>
	);
}
