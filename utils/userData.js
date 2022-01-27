import user from "../data";

export const personalData = {
	email: user.email,
};

export const header = {
	logoName: "HOME",
	navItems: [
		{
			name: "WORK",
			link: "/#work",
		},
		{
			name: "CONTACT",
			link: `mailto:${personalData.email}`,
		},
	],
};

export const front_face = {
	about: user.about,
	intro: [
		{
			name: "Recent Accomplishments",
			type: "text",
			contents: user.accomplishments,
		},
		{
			name: "Social Links",
			type: "link",
			contents: user.socialLink,
		},
		{
			name: "Currently",
			type: "text",
			contents: user.currentProfession,
		},
	],
};

// sample
// {
// 	infoData: {
// 		Company: ["Apple"],
// 		Description: [
// 			"Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
// 		],
// 		"My Objectives": ["User Testing", "Accessibility improvements"],
// 	},

// 	link: "/",
// 	image: {
// 		src: "/images/apple.png",
// 		alt: "osenorth",
// 	},
// },

export const workExperience = user.workExperience.map((experience) => ({
	infoData: {
		Company: [experience.company],
		Description: [experience.description],
		"My Objectives": experience.objectives,
	},
	link: experience?.link ?? null,
	image: {
		src: experience.image,
		alt: experience.company,
	},
}));

export const footerInfoData = [
	{
		name: "Ways to contact me",
		type: "copy",
		contents: user.contactDetails,
	},
	{
		name: "Social Links",
		type: "link",
		contents: user.socialLink,
	},
	{
		name: "what am i upto right now",
		type: "text",
		contents: user.currentStatus,
	},
];
