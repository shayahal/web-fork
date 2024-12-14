module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://shayahal.github.com/web-fork`,
    pathPrefix: "/web-fork", 
    // Your Name
    name: 'Shay Yahal',
    // Main Site Title
    title: `Shay Yahal | Yours`,
    // Description that goes under your name in main bio
    description: `Also knows as: ShayShu`,
    // Optional: Twitter account handle
    author: `@shayahal1`,
    // Optional: Github account URL
    github: `https://github.com/shayahal`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/shay-yahal/`,
    // Content of the About Me section
    about: 
    `I've built this site because I:

    1. Was kind of jealous of my friend's sites. 
    
    2. Needed a place to store my cocktail recipes.
    
    3. Always wanted to write and lied to myself that I would do it only if I had a place to store it.`,

    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'ShayShu',
        description:
          'A zero-config Blah Blah',
        link: 'Non',
      },
    ],
    // Optional: List your recommendations, they must have `name` and `description`. `link` is optional.
    recommendations: [
      {
        name: 'Nothing intersting',
        description: 'Data Data',
        link: 'https://github.com/Blahblah',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Cooking',
        description: 
        'None',
      },
      {
        name: 'Tech',
        description: 
        'Some',
      },
      {
        name: 'Reading',
        description:
          'Really fast',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
