import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/education_dashboard_roadmap/blog',
    component: ComponentCreator('/education_dashboard_roadmap/blog', 'bb2'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/blog/archive',
    component: ComponentCreator('/education_dashboard_roadmap/blog/archive', 'ca5'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/blog/authors',
    component: ComponentCreator('/education_dashboard_roadmap/blog/authors', '1d7'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/education_dashboard_roadmap/blog/authors/all-sebastien-lorber-articles', '16e'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/blog/authors/yangshun',
    component: ComponentCreator('/education_dashboard_roadmap/blog/authors/yangshun', '905'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/blog/first-blog-post',
    component: ComponentCreator('/education_dashboard_roadmap/blog/first-blog-post', '1ba'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/blog/long-blog-post',
    component: ComponentCreator('/education_dashboard_roadmap/blog/long-blog-post', '6a8'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/blog/mdx-blog-post',
    component: ComponentCreator('/education_dashboard_roadmap/blog/mdx-blog-post', '194'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/blog/tags',
    component: ComponentCreator('/education_dashboard_roadmap/blog/tags', '542'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/blog/tags/docusaurus',
    component: ComponentCreator('/education_dashboard_roadmap/blog/tags/docusaurus', '439'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/blog/tags/facebook',
    component: ComponentCreator('/education_dashboard_roadmap/blog/tags/facebook', '1e1'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/blog/tags/hello',
    component: ComponentCreator('/education_dashboard_roadmap/blog/tags/hello', 'cf3'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/blog/tags/hola',
    component: ComponentCreator('/education_dashboard_roadmap/blog/tags/hola', '544'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/blog/welcome',
    component: ComponentCreator('/education_dashboard_roadmap/blog/welcome', '5a5'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/markdown-page',
    component: ComponentCreator('/education_dashboard_roadmap/markdown-page', '1d2'),
    exact: true
  },
  {
    path: '/education_dashboard_roadmap/docs',
    component: ComponentCreator('/education_dashboard_roadmap/docs', 'e22'),
    routes: [
      {
        path: '/education_dashboard_roadmap/docs',
        component: ComponentCreator('/education_dashboard_roadmap/docs', '019'),
        routes: [
          {
            path: '/education_dashboard_roadmap/docs/tags',
            component: ComponentCreator('/education_dashboard_roadmap/docs/tags', '3c7'),
            exact: true
          },
          {
            path: '/education_dashboard_roadmap/docs/tags/dashboard',
            component: ComponentCreator('/education_dashboard_roadmap/docs/tags/dashboard', '6d1'),
            exact: true
          },
          {
            path: '/education_dashboard_roadmap/docs/tags/docker',
            component: ComponentCreator('/education_dashboard_roadmap/docs/tags/docker', '2d6'),
            exact: true
          },
          {
            path: '/education_dashboard_roadmap/docs/tags/educacao',
            component: ComponentCreator('/education_dashboard_roadmap/docs/tags/educacao', 'eaf'),
            exact: true
          },
          {
            path: '/education_dashboard_roadmap/docs/tags/metabase',
            component: ComponentCreator('/education_dashboard_roadmap/docs/tags/metabase', '9d8'),
            exact: true
          },
          {
            path: '/education_dashboard_roadmap/docs/tags/mysql',
            component: ComponentCreator('/education_dashboard_roadmap/docs/tags/mysql', 'f6f'),
            exact: true
          },
          {
            path: '/education_dashboard_roadmap/docs/tags/postgresql',
            component: ComponentCreator('/education_dashboard_roadmap/docs/tags/postgresql', '104'),
            exact: true
          },
          {
            path: '/education_dashboard_roadmap/docs',
            component: ComponentCreator('/education_dashboard_roadmap/docs', '8d7'),
            routes: [
              {
                path: '/education_dashboard_roadmap/docs/category/education-dashboard',
                component: ComponentCreator('/education_dashboard_roadmap/docs/category/education-dashboard', '54d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/education_dashboard_roadmap/docs/roadmap/dashboard-insights',
                component: ComponentCreator('/education_dashboard_roadmap/docs/roadmap/dashboard-insights', '3de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/education_dashboard_roadmap/docs/roadmap/data-import',
                component: ComponentCreator('/education_dashboard_roadmap/docs/roadmap/data-import', '45c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/education_dashboard_roadmap/docs/roadmap/development-tasks',
                component: ComponentCreator('/education_dashboard_roadmap/docs/roadmap/development-tasks', 'f7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/education_dashboard_roadmap/docs/roadmap/final-notes',
                component: ComponentCreator('/education_dashboard_roadmap/docs/roadmap/final-notes', 'd4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/education_dashboard_roadmap/docs/roadmap/introduction',
                component: ComponentCreator('/education_dashboard_roadmap/docs/roadmap/introduction', 'b4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/education_dashboard_roadmap/docs/roadmap/metabase-installation',
                component: ComponentCreator('/education_dashboard_roadmap/docs/roadmap/metabase-installation', '5b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/education_dashboard_roadmap/docs/roadmap/support-materials',
                component: ComponentCreator('/education_dashboard_roadmap/docs/roadmap/support-materials', 'acd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/education_dashboard_roadmap/docs/roadmap/user-stories',
                component: ComponentCreator('/education_dashboard_roadmap/docs/roadmap/user-stories', '706'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/education_dashboard_roadmap/',
    component: ComponentCreator('/education_dashboard_roadmap/', '647'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
