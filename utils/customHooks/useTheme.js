import { useEffect, useState } from "react";
import { colorThemes } from "../../utils/appData";

export default function useTheme(colorMode) {
	const [colorTheme, setColorTheme] = useState(colorMode);

	useEffect(() => {
		setElementTheme(colorMode);
	}, [colorMode]);

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
