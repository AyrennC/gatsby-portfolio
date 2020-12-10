module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Carney Cheng', // Navigation and Site Title
  titleAlt: 'Carney Cheng Portfolio', // Title for JSONLD
  description:
    "Hi, I'm Carney Cheng. A software engineer trying to make my way in the industry",
  headline: 'Carney Cheng Personal Portfolio', // Headline for schema.org JSONLD
  url: 'https://carneyc.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  banner: '/preview.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'CarneyC', // shortname for manifest. MUST be shorter than 12 characters
  author: 'CarneyC', // Author for schemaORGJSONLD
  themeColor: '#4b4b4b',
  backgroundColor: '#ebedf2',

  twitter: '@carneyc12', // Twitter Username
  facebook: 'carney.cheng', // Facebook Site Name
  googleAnalyticsID: 'G-VQGD2VMQYD',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
};
