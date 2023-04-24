import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/atlas-workshop/__docusaurus/debug',
    component: ComponentCreator('/atlas-workshop/__docusaurus/debug', '765'),
    exact: true
  },
  {
    path: '/atlas-workshop/__docusaurus/debug/config',
    component: ComponentCreator('/atlas-workshop/__docusaurus/debug/config', '5c7'),
    exact: true
  },
  {
    path: '/atlas-workshop/__docusaurus/debug/content',
    component: ComponentCreator('/atlas-workshop/__docusaurus/debug/content', '461'),
    exact: true
  },
  {
    path: '/atlas-workshop/__docusaurus/debug/globalData',
    component: ComponentCreator('/atlas-workshop/__docusaurus/debug/globalData', 'cd5'),
    exact: true
  },
  {
    path: '/atlas-workshop/__docusaurus/debug/metadata',
    component: ComponentCreator('/atlas-workshop/__docusaurus/debug/metadata', '300'),
    exact: true
  },
  {
    path: '/atlas-workshop/__docusaurus/debug/registry',
    component: ComponentCreator('/atlas-workshop/__docusaurus/debug/registry', '2f9'),
    exact: true
  },
  {
    path: '/atlas-workshop/__docusaurus/debug/routes',
    component: ComponentCreator('/atlas-workshop/__docusaurus/debug/routes', '6ce'),
    exact: true
  },
  {
    path: '/atlas-workshop/markdown-page',
    component: ComponentCreator('/atlas-workshop/markdown-page', 'ab8'),
    exact: true
  },
  {
    path: '/atlas-workshop/docs',
    component: ComponentCreator('/atlas-workshop/docs', '031'),
    routes: [
      {
        path: '/atlas-workshop/docs/access-your-cluster/access-the-atlas-cluster',
        component: ComponentCreator('/atlas-workshop/docs/access-your-cluster/access-the-atlas-cluster', '2dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/docs/category/练习a-开始使用atlas',
        component: ComponentCreator('/atlas-workshop/docs/category/练习a-开始使用atlas', 'cef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/docs/category/练习b-访问您的atlas集群',
        component: ComponentCreator('/atlas-workshop/docs/category/练习b-访问您的atlas集群', '9cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/docs/category/练习c-索引与执行计划',
        component: ComponentCreator('/atlas-workshop/docs/category/练习c-索引与执行计划', 'bc8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/docs/indexing-basics/',
        component: ComponentCreator('/atlas-workshop/docs/indexing-basics/', '071'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/docs/indexing-basics/explain-plans',
        component: ComponentCreator('/atlas-workshop/docs/indexing-basics/explain-plans', 'a48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/docs/intro',
        component: ComponentCreator('/atlas-workshop/docs/intro', 'b1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/docs/setting-up-atlas/create-your-first-datasets',
        component: ComponentCreator('/atlas-workshop/docs/setting-up-atlas/create-your-first-datasets', '27a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/docs/setting-up-atlas/get-started-atlas',
        component: ComponentCreator('/atlas-workshop/docs/setting-up-atlas/get-started-atlas', '547'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/atlas-workshop/',
    component: ComponentCreator('/atlas-workshop/', 'f20'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
