const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "TalkingDev - experiments in web development", // <title>
  shortSiteTitle: "TalkingDev", // <title> ending for posts and pages
  siteDescription: "TalkingDev - experiments in web development.",
  siteUrl: "https://talkingdev.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Ashwin Saxena",
  authorTwitterAccount: "talkingdev",
  // info
  infoTitle: "Ashwin Saxena",
  infoTitleNote: "Dev Blog",
  // manifest.json
  manifestName: "TalkingDev - experiments in web development.",
  manifestShortName: "TalkingDev", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "email@ashwinsaxena.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/ashwin7" },
    { name: "twitter", url: "https://twitter.com/talkingdev" },
    { name: "facebook", url: "http://facebook.com/quizmasterash" }
  ]
};
