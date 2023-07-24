// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Hugo Le Moine',
  tagline: 'Data Scientist',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hugolmn.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  deploymentBranch: 'main',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hugolmn', // Usually your GitHub org/user name.
  projectName: 'hugolmn.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    description: "I'm a Senior Data Scientist at MSD and UTC alumni. Also working on side-projects related to Python, Data Science and Machine Learning.",
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'wiki',
          routeBasePath: 'wiki',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    'docusaurus-plugin-sass'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        hideOnScroll: true,
        title: 'Hugo Le Moine',
        logo: {
          alt: 'Site Logo',
          src: 'img/favicon.ico',
          width: 32,
          height: 32
        },
        items: [
          {to: '/projects', label: 'Projects', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'gardenSidebar',
            position: 'left',
            label: 'Digital Garden',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: 'pathname:///resume/CV_EN_Hugo_Le_Moine.pdf',
            label: 'Resume',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projects',
            items: [
              {
                label: 'Dividend Chart',
                href: 'https://twitter.com/DividendChart',
              },
              {
                label: 'Quantified Self',
                href: 'https://quantified-self.streamlit.app',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Email',
                href: 'mailto:hugo.le-moine@outlook.fr',
              },{
                label: 'GitHub',
                href: 'https://github.com/hugolmn',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/hugo_le_moine/',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/13765085/hugolmn',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hugo_le_moine_',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        copyright: `Built by Hugo Le Moine, using Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
