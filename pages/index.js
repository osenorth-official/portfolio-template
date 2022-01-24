import Footer from "@/components/Footer";
import FrontFace from "@/components/FrontFace";
import Header from "@/components/Header";
import WorkSection from "@/components/WorkSection";
import {
	footerInfoData,
	front_face,
	header,
	personalData,
	workExperience,
} from "@/utils/userData";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.app}>
			<Header {...header} />
			<FrontFace {...front_face} />
			<WorkSection workExperience={workExperience} />

			<Footer email={personalData.email} info={footerInfoData} />
		</div>
	);
}
