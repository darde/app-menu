import React, { useState } from 'react'
import { Theme, Reset } from '@resultadosdigitais/tangram-components'
import { Connect, useCommunication } from '@resultadosdigitais/front-hub/react'
import App from './components/App'

export default Connect(() => {
  const { emit, useListen } = useCommunication()
  const [color, setColor] = useState('lightblue')

  useListen('changeColor', (value) => {
    console.log('app-menu useListen changeColor: ', value)
    setColor(value)
  })

  function handleOnClick(e) {
    emit('changeFontColor', e.target.value)
  }

  console.log('render app-menu')
  return (
    <Theme value={'marketing'}>
      <App bgColor={color} handleOnClick={handleOnClick} />
    </Theme>
  )
})
