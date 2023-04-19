import { AppFeatures } from '@models/AppFeatures'

/**
 * Returns the application configuration.
 * It is wrapped in a function to ensure the configuration is not mutated.
 */
const config: Config = {
  mode: import.meta.env.MODE,
  socketTimeout: 10000,
  features: [
    AppFeatures.FileUpload,
    AppFeatures.AudioRecording,
    AppFeatures.Settings,
    AppFeatures.Plugins
  ],
  endpoints: {
    chat: 'ws://schrodicat.sytes.net:3000/ws',
    rabbitHole: 'http://schrodicat.sytes.net:3000/rabbithole',
    allLLM: 'http://schrodicat.sytes.net:3000/settings/llm/',
    singleLLM: 'http://schrodicat.sytes.net:1865/settings/llm/:llm'
  }
}

export interface Config {
  readonly mode: string
  readonly socketTimeout: number
  readonly features: AppFeatures[]
  readonly endpoints: {
    readonly chat: string
    readonly rabbitHole: string
    readonly allLLM: string
    readonly singleLLM: string
  }
}

export default config
