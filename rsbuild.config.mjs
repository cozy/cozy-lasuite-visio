import { defineConfig } from '@rsbuild/core'
import { getRsbuildConfig } from 'rsbuild-config-cozy-app'

const config = getRsbuildConfig({
  title: 'Twake Visio'
})

export default defineConfig(config)
