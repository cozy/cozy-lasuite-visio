import React from 'react'

import { useExternalBridge } from 'cozy-external-bridge/container'
import flag from 'cozy-flags'

const App = () => {
  const embeddedVisioUrl = flag('visio.embedded-app-url')

  useExternalBridge(embeddedVisioUrl)

  return (
    <iframe
      id="embeddedApp"
      allow="microphone; camera; clipboard-read; clipboard-write"
      src={embeddedVisioUrl}
    ></iframe>
  )
}

export default App
