import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
             title: 'Education Dashboard Roadmap',
           tagline: 'Dashboard de indicadores educacionais - OIL Caparica-Trafaria',
           //favicon: 'img/faviconLight.ico',
           favicon: 'img/faviconDark.ico',
            future: { v4: true },

               url: 'https://naelquin.github.io',
           baseUrl: '/education_dashboard_roadmap/',
  organizationName: 'NaelQuin',
       projectName: 'education_dashboard_roadmap',

     onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://git.ipiaget.org/psytech/education-dashboard/-/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://git.ipiaget.org/psytech/education-dashboard/-/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/insight.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'PsyTech Lab',
      logo: {
        alt: 'INSIGHT Logo',
        src: 'img/insightHead.png',
        srcDark: 'img/insightHeadWhite.png',  // Used in dark mode
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Roadmap',
        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          //href: 'https://github.com/facebook/docusaurus',
          href: 'https://git.ipiaget.org/psytech/education-dashboard',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Roadmap',
              to: '/docs/category/education-dashboard',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'INSIGHT',
              href: 'https://investigacao.ipiaget.org/',
            },
            {
              label: 'Insituto Piaget',
              href: 'https://ipiaget.org/',
            },
            // {
            //   label: 'X',
            //   href: 'https://x.com/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitLab',
              href: 'https://git.ipiaget.org/psytech/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PsyTech - INSIGHT Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
