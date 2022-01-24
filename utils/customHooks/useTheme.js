import { useEffect, useState } from "react";
import { colorThemes } from "../../utils/appData";

export default function useTheme(colorMode) {
	const [colorTheme, setColorTheme] = useState(colorMode);

	useEffect(() => {
		// set theme based on user system preferences
		// const theme = window.localStorage.getItem("theme");
		// const themeValid =
		// 	theme === colorThemes.dark || theme === colorThemes.light;
		// if (themeValid) {
		// 	// set previous theme
		// 	setColorTheme(theme);
		// 	setElementTheme(theme);
		// } else {
		// setColorTheme(
		// 	window.matchMedia("(prefers-color-scheme: dark)")?.matches
		// 		? colorThemes.dark
		// 		: colorThemes.light
		// );
		// change theme with user system theme
		// window
		// 	.matchMedia("(prefers-color-scheme: dark)")
		// 	.addEventListener("change", changeUserTheme);
		// }
		// function changeUserTheme(event) {
		// 	setColorTheme(event?.matches ? colorThemes.dark : colorThemes.light);
		// }
		// return () => {
		// 	!themeValid &&
		// 		window
		// 			.matchMedia("(prefers-color-scheme: dark)")
		// 			.removeEventListener("change", changeUserTheme);
		// };

		setElementTheme(colorMode);
	}, []);

	// change html element className as per theme
	function setElementTheme(theme) {
		document.documentElement.className = theme;
	}

	// update local-storage
	function setLocalTheme(theme) {
		window.localStorage.setItem("theme", theme);
	}

	// toggle theme between light and dark
	function toggleTheme() {
		setColorTheme((prev) => {
			const theme =
				prev === colorThemes.light ? colorThemes.dark : colorThemes.light;

			setElementTheme(theme);
			// setLocalTheme(theme);
			return theme;
		});
	}

	return [colorTheme, toggleTheme];
}
