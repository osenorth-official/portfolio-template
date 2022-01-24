import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";

export default function Footer(props) {
	return (
		<footer className={styles.app_footer}>
			<div className={styles.container}>
				<ContactSection email={props.email} />
				<InfoSection info={props.info} />
			</div>
		</footer>
	);
}

function ContactSection({ email }) {
	return (
		<section className={styles.contact}>
			<h1>Have a great idea?</h1>

			<button className={styles.contact_button}>
				<Link href={`mailto:${email}`}>
					<a>
						<p className={styles.text}>Let&apos;s work together</p>
						<div className={styles.arrow_icon}></div>
					</a>
				</Link>
			</button>
		</section>
	);
}

function InfoSection({ info }) {
	return (
		<section className={styles.info}>
			<main className={styles.info_container}>
				{info.map((infoItem, i) => (
					<article key={i} className={styles.info_item}>
						<h2>{infoItem.name}</h2>

						<section className={styles.items}>
							<ul className={styles.items_container}>
								{
									<ul
										className={`${styles.items_container} ${
											styles[infoItem.type]
										}`}
									>
										{infoItem.contents.map((content, j) => {
											if (infoItem?.type === "copy")
												return <CopyText key={j} content={content} />;
											else if (infoItem?.type === "link")
												return (
													<Link key={j} href={content.link}>
														<a>{content.name}</a>
													</Link>
												);
											else return <p key={j}>{content}</p>;
										})}
									</ul>
								}
							</ul>
						</section>
					</article>
				))}
			</main>
		</section>
	);
}

function CopyText({ content }) {
	const [copy, setCopy] = useState(false);

	useEffect(() => {
		if (copy) {
			navigator.clipboard.writeText(content.value);
			setCopy(false);
		}
	}, [copy, content]);

	function handleCopy(text) {
		setCopy(true);
	}

	return (
		<div className={styles.copy_container} onClick={handleCopy}>
			<p>{`${content.name} - ${content.value}`}</p>
			<div className={styles.copy_symbol}></div>
		</div>
	);
}
