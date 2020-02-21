/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Mora',
    image: 'https://avatars0.githubusercontent.com/u/1094697?s=460',
    infoLink: 'https://github.com/qiu8310',
    pinned: true,
  },  {
    caption: 'chemzqm',
    image: 'https://avatars2.githubusercontent.com/u/251450',
    infoLink: 'https://github.com/chemzqm',
    pinned: true,
  }
];

const siteConfig = {
  title: 'minapp' /* title for your website */,
  tagline: '重新定义微信小程序的开发',
  url: 'https://qiu8310.github.io/minapp' /* your website url */,
  baseUrl: '/minapp/' /* base url for your project */,
  projectName: 'minapp',
  customDocsPath: 'docs-md',
  headerLinks: [
    {doc: 'doc-install', label: '文档'},
    {doc: 'api-index', label: 'API'},
    {page: 'help', label: '帮助'},
    {blog: true, label: '博客'},
    {href: 'https://github.com/qiu8310/minapp', label: 'Github'},
  ],
  users,
  headerIcon: 'img/minapp.svg',
  footerIcon: 'img/minapp-transparent.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#09BB07',
    secondaryColor: '#205C3B',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Mora <qiuzhongleiabc@126.com>',
  organizationName: 'qiu8310', // or set an env variable ORGANIZATION_NAME
  projectName: 'minapp', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/qiu8310/minapp',
  algolia: {
    apiKey: 'ad598e670d42575d2c914e7cdc1e6711',
    indexName: 'minapp',
  },
};

module.exports = siteConfig;
