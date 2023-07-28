import { defineConfig } from 'dumi'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

exports.default = defineConfig({
  themeConfig: {
    name: 'Black Ui Mobile',
    logo: 'https://avatars.githubusercontent.com/u/73016681?s=200&v=4',
    nav: nav,
    sidebar: sidebar,
    hd: {
      rules: [],
    },
    deviceWidth: 375,
  },
  locales: [
    { id: 'zh', name: '中文' },
    { id: 'en', name: 'English' },
  ],
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
    codeBlockMode: 'passive',
  },
  alias: {
    'uab-ui-mobile-demos': process.cwd() + '/src/demos/index.ts',
    'uab-ui-mobile-utils': process.cwd() + '/src/utils/index.ts',
  },
  favicons: ['https://avatars.githubusercontent.com/u/73016681?s=88&v=4'],
  metas: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
    },
  ],
  outputPath: 'website',
  base: '/black-ui-mobile/',
  publicPath: '/black-ui-mobile/',
})
