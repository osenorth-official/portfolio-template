import Setup from "@/containers/Setup.jsx";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Setup>
			<Component {...pageProps} />
		</Setup>
	);
}

export default MyApp;
