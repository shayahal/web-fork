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
    description: `Also known as: ShayShu`,
    // Optional: Twitter account handle
    author: `@shayahal1`,
    // Optional: Github account URL
    github: `https://github.com/shayahal`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/shay-yahal/`,

    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: '20Questions',
        description: 'A comprehansive analysis of the 20 questions by Yoaana Gonen',
        link: 'None',
      },
      {
        name: 'Senior-it',
        description: 'Research the differences between men and womens career paths in the Israeli Tech industry',
        link: 'https://www.mako.co.il/nexter-news/Article-75518b5b5f2c681027.htm',
      },
    ],
    // Subjects I'm talking about
    subjectsTalking: [
      {
        name: 'Workplace Coalitions',
        description: 'Or: politics for data scientists',
        link: 'None',
      },
      {
        name: 'How Not to Manage Your Time',
        description: 'not your regular productivity Ted talk',
        link: 'None',
      },
      {
        name: 'Why Can\'t You Hire Female Software Engineers',
        description: 'senior-it in the making',
        link: 'None',
      },
      {
        name: 'The Magic of Dimension Reduction',
        description: 'i\'m still amazed',
        link: 'None',
      },
      {
        name: 'Why Women Aren\'t Funny (Archive)',
        description: 'a curious exploration',
        link: 'None',
      },
    ],
    // Subjects you should ask me to talk about
    subjectsAskMe: [
      {
        name: 'Mastering Multidisciplinary Management',
        description: 'or die trying',
        link: 'None',
      },
      {
        name: 'Lost in East Africa',
        description: 'Book of Mormon in real lift',
        link: 'None',
      },
      {
        name: 'The true secret for making amazing cocktails at home',
        description: 'the secret is sugar',
        link: 'None',
      },
    ],
    // Optional: List your recommendations, they must have `name` and `description`. `link` is optional.
    recommendations: [
      {
        name: 'my.. github?',
        description: 'not sure. wanted to put link',
        link: 'https://github.com/shayahal',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
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
              quality: 50,
              withWebp: false,
              withAvif: false,
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
    // `gatsby-plugin-offline`, // Disabled for dev performance
    // `gatsby-plugin-preload-fonts`, // Disabled for dev performance
    `gatsby-plugin-sitemap`,
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
