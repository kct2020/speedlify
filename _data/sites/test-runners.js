module.exports = {
	description: "Front-end Testing Tools",
	// skip if localhost
	// skip if this is a new fork of the kct-speedlify (not Keith’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "kct-speedlify",
	options: {
		frequency: 60 * 11 + 30, // 11h, 30m
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run",
	},
	urls: [
		"https://goutpal.org/",
		"https://foodary.com/",
		"https://shrewdies.org/"
	]
};
