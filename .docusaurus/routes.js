import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/atlas-workshop/en/markdown-page',
    component: ComponentCreator('/atlas-workshop/en/markdown-page', '0e5'),
    exact: true
  },
  {
    path: '/atlas-workshop/en/docs',
    component: ComponentCreator('/atlas-workshop/en/docs', '464'),
    routes: [
      {
        path: '/atlas-workshop/en/docs/access-your-cluster/access-the-atlas-cluster',
        component: ComponentCreator('/atlas-workshop/en/docs/access-your-cluster/access-the-atlas-cluster', 'b89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/en/docs/category/练习a-开始使用atlas',
        component: ComponentCreator('/atlas-workshop/en/docs/category/练习a-开始使用atlas', 'dde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/en/docs/category/练习b-访问您的atlas集群',
        component: ComponentCreator('/atlas-workshop/en/docs/category/练习b-访问您的atlas集群', '851'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/en/docs/category/练习c-索引与执行计划',
        component: ComponentCreator('/atlas-workshop/en/docs/category/练习c-索引与执行计划', '323'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/en/docs/indexing-basics/',
        component: ComponentCreator('/atlas-workshop/en/docs/indexing-basics/', '6d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/en/docs/indexing-basics/explain-plans',
        component: ComponentCreator('/atlas-workshop/en/docs/indexing-basics/explain-plans', '89a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/en/docs/intro',
        component: ComponentCreator('/atlas-workshop/en/docs/intro', '85e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/en/docs/setting-up-atlas/create-your-first-datasets',
        component: ComponentCreator('/atlas-workshop/en/docs/setting-up-atlas/create-your-first-datasets', '05b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/atlas-workshop/en/docs/setting-up-atlas/get-started-atlas',
        component: ComponentCreator('/atlas-workshop/en/docs/setting-up-atlas/get-started-atlas', 'a25'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/atlas-workshop/en/',
    component: ComponentCreator('/atlas-workshop/en/', 'f3a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
