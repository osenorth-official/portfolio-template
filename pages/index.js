import ActivityCard from "@/components/ActivityCard";
import FrontFace from "@/components/FrontFace";
import Header from "@/components/Header";
import WorkSection from "@/components/WorkSection";
import { front_face, header, workExperience } from "@/utils/userData";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.app}>
			<Header {...header} />
			<FrontFace {...front_face} />
			<WorkSection workExperience={workExperience} />
		</div>
	);
}
