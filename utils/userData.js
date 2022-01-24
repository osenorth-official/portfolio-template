export const header = {
	logoName: "HOME",

	navItems: [
		{
			name: "WORK",
			link: "/",
		},
		{
			name: "CONTACT",
			link: "/",
		},
	],
};

export const front_face = {
	about:
		"Hey! I'm Henry, a twenty-four years old User Interface and Experience Designer currently based in California.",

	intro: [
		{
			name: "Recent Accomplishments",
			type: "text",
			contents: [
				"Learned HTML + CSS",
				"Started a side project",
				"Cooked meal for myself and choked to death",
			],
		},
		{
			name: "Social Links",
			type: "link",
			contents: [
				{ name: "Instagram", link: "/" },
				{ name: "Dribbble", link: "/" },
				{ name: "Twitter", link: "/" },
				{ name: "Github", link: "/" },
				{ name: "Youtube", link: "/" },
				{ name: "Spotify", link: "/" },
			],
		},
		{
			name: "Currently",
			type: "text",
			contents: ["Doing contract/freelance work", "Available for new projects"],
		},
	],
};

export const workExperience = [
	{
		infoData: {
			Company: ["Apple"],
			Description: [
				"Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
			],
			"My Objectives": ["User Testing", "Accessibility improvements"],
		},

		image: {
			src: "/images/apple.png",
			alt: "osenorth",
		},
	},
	{
		infoData: {
			Company: ["Apple"],
			Description: [
				"Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
			],
			"My Objectives": ["User Testing", "Accessibility improvements"],
		},

		image: {
			src: "/images/spiderman.png",
			alt: "osenorth",
		},
	},
	{
		infoData: {
			Company: ["Apple"],
			Description: [
				"Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
			],
			"My Objectives": ["User Testing", "Accessibility improvements"],
		},

		image: {
			src: "/images/microsoft.png",
			alt: "osenorth",
		},
	},
];

export const footerInfoData = [
	{
		name: "Ways to contact me",
		type: "copy",
		contents: [
			{ name: "Gmail", value: "therealjohndoe@gmail.com" },
			{ name: "Discord", value: "DopeAss#9669" },
		],
	},
	{
		name: "Social Links",
		type: "link",
		contents: [
			{ name: "Instagram", link: "/" },
			{ name: "Dribbble", link: "/" },
			{ name: "Twitter", link: "/" },
			{ name: "Github", link: "/" },
			{ name: "Youtube", link: "/" },
			{ name: "Spotify", link: "/" },
		],
	},
	{
		name: "what am i upto right now",
		type: "text",
		contents: [
			"Walking my dog in the park",
			"Making dog excuse to gawk at the hot girl",
		],
	},
];

export const personalData = {
	name: "Henry",
	email: "therealjohndoe@gmail.com",
	experience: ["User Interface", "Experience Designer"],
	location: "California",
};
