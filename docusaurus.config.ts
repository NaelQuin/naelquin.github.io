import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  /* ======================================================== *
   * Main settings                                            *
   * ======================================================== */
             title: 'PsyTech Lab - Roadmaps',
           tagline: 'PsyTech Lab project\'s roadmaps for interns.',
           //favicon: 'img/faviconLight.ico',
           favicon: 'img/faviconDark.ico',
            future: { v4: true },

               url: 'https://naelquin.github.io',
           baseUrl: '/',
  organizationName: 'NaelQuin',
       projectName: 'naelquin.github.io',
  deploymentBranch: 'gh-pages',
     trailingSlash: false, // Fixes the warning Docusaurus gave you!

     onBrokenLinks: 'throw',
   onBrokenAnchors: 'warn',

  /* ============== *
   * Other settings *
   * ============== */
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
        srcDark: 'img/insightHeadWhite.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Roadmaps',
        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://investigacao.ipiaget.org',
        //   position: 'right',
        //   className: 'header-insight-link',
        //   'aria-label': 'INSIGHT website',
        // },
        // {
        //   href: 'https://ipiaget.org',
        //   position: 'right',
        //   className: 'header-piaget-link',
        //   'aria-label': 'Insituto Piaget website',
        // },
        // {
        //   href: 'https://git.ipiaget.org/psytech',
        //   position: 'right',
        //   className: 'header-gitlab-link',
        //   'aria-label': 'GitLab repository',
        // },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Roadmaps',
    //           to: '/docs/category/getting-started',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'INSIGHT',
    //           href: 'https://investigacao.ipiaget.org/',
    //         },
    //         {
    //           label: 'Insituto Piaget',
    //           href: 'https://ipiaget.org/',
    //         },
    //         // {
    //         //   label: 'X',
    //         //   href: 'https://x.com/docusaurus',
    //         // },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         // {
    //         //   label: 'Blog',
    //         //   to: '/blog',
    //         // },
    //         {
    //           label: 'GitLab Repository',
    //           href: 'https://git.ipiaget.org/psytech/',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} PsyTech - INSIGHT Built with Docusaurus.`,
    // },
    footer: {
      style: 'dark',
      links: [], // Leave this empty if you want to remove the multi-column text entirely
      copyright: `
        <div class="footer-social-icons">
          <a href="https://git.ipiaget.org/psytech" target="_blank" rel="noopener noreferrer" class="footer-icon-link gitlab-icon" title="GitLab Repository"></a>
          <a href="https://investigacao.ipiaget.org" target="_blank" rel="noopener noreferrer" class="footer-icon-link insight-icon" title="INSIGHT"></a>
          <a href="https://ipiaget.org" target="_blank" rel="noopener noreferrer" class="footer-icon-link piaget-icon" title="Instituto Piaget"></a>
        </div>
        <div class="footer-copyright-text">
          Copyright © ${new Date().getFullYear()} PsyTech - INSIGHT Built with Docusaurus.
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
