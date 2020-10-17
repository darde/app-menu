import React, { useState } from 'react'
import { Theme, Reset } from '@resultadosdigitais/tangram-components'
import { Connect, useListen } from '@resultadosdigitais/front-hub/react'
import App from './components/App'

export default Connect(() => {
  const { listen } = useCommunication()
  const [color, setColor] = useState('lightblue')

  useListen('changeColor', (value) => {
    console.log('value: ', value)
    setColor(value)
  })

  return (
    <Theme value={'marketing'}>
      <Reset />
      <App bgColor={color} />
    </Theme>
  )
})
