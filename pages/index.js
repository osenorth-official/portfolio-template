import Footer from "@/components/Footer";
import FrontFace from "@/components/FrontFace";
import Header from "@/components/Header";
import ThemeButton from "@/components/ThemeButton";
import WorkSection from "@/components/WorkSection";
import useTheme from "@/utils/customHooks/useTheme";
import {
	footerInfoData,
	front_face,
	header,
	personalData,
	workExperience,
} from "@/utils/userData";
import styles from "../styles/Home.module.scss";

export default function Home() {
	const [colorTheme, toggleTheme] = useTheme("light");

	return (
		<div className={styles.app}>
			<ThemeButton colorTheme={colorTheme} toggleTheme={toggleTheme} />
			<Header {...header} />
			<FrontFace {...front_face} />
			<WorkSection workExperience={workExperience} />

			<Footer email={personalData.email} info={footerInfoData} />
		</div>
	);
}
