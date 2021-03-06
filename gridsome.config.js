// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Goodwork',
  siteUrl: 'https://iluminar.github.io',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        config: './tailwind.config.js'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'Docs',
        route: '/docs/:slug',
      }
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  host: '0.0.0.0',
  port: 3000
}
