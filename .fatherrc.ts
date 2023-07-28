import { defineConfig } from 'father'
import path from 'path'

export default defineConfig({
  esm: {},
  cjs: {},
  umd: {
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
  },
  alias: {
    '@': path.resolve(__dirname, './src'),
  },

  platform: 'browser',
  plugins: ['./scripts/publish-father-plugin'],
})
