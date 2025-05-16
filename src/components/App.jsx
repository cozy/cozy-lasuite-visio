import React from 'react'

import { useExternalBridge } from 'cozy-external-bridge/container'
import flag from 'cozy-flags'

const App = () => {
  const embeddedVisioUrl = flag('visio.embedded-app-url')

  useExternalBridge(embeddedVisioUrl)

  return <iframe id="embeddedApp" src={embeddedVisioUrl}></iframe>
}

export default App
