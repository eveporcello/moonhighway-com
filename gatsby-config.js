const mdxFeed = require('gatsby-mdx/feed')

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://moonhighway.com/',
    author: 'Moon Highway',
    title: 'Moon Highway - professional web development trainings',
    description:
      'We develop and deliver cutting edge JavaScript training for technical professionals.',
    keywords: [
      'JavaScript training',
      'React training',
      'GraphQL training',
      'Web Development',
    ],
    canonicalUrl: 'https://moonhighway.com',
    image: 'static/logo.png',
    author: {
      name: 'Moon Highway',
      minibio:
        'Moon Highway develops and delivers cutting edge JavaScript training for technical professionals.',
    },
    organization: {
      name: 'Moon Highway',
      url: 'https://moonhighway.com',
      logo: '',
    },
    social: {
      twitter: '@MoonHighway',
      fbAppID: '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/workshops`,
        name: 'workshops',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-responsive-iframe' },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              backgroundColor: '#fafafa',
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name:
          'Moonhighway - The cutting edge JavaScript training for engineers of all skill levels',
        short_name: 'Moonhighway',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#2E2F30',
        display: 'standalone',
        icon: 'assets/logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-40790507-1`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/lib/typography`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
