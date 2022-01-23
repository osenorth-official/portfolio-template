import Link from "next/link";
import styles from "./styles.module.scss";

/**
 * @param {string} about
 * @param {object} intro
 */
export default function FrontFace({ about, intro, ...props }) {
	return (
		<section className={styles.front_face}>
			<div className={styles.container}>
				<h1 id="about">{about}</h1>

				<section className={styles.quick_intro}>
					<div className={styles.quick_intro_container}>
						{intro.map((introItem, i) => (
							<section
								key={i}
								id={introItem.slug}
								className={styles.intro_item}
							>
								<h2>{introItem.name}</h2>

								<section className={styles.items}>
									{
										<ul
											className={`${styles.items_container} ${
												styles[introItem.type]
											}`}
										>
											{introItem.contents.map((content, j) =>
												introItem.type === "link" ? (
													<Link key={j} href={content.link}>
														<a>{content.name}</a>
													</Link>
												) : (
													<p key={j}>{content}</p>
												)
											)}
										</ul>
									}
								</section>
							</section>
						))}
					</div>
				</section>
			</div>
		</section>
	);
}
