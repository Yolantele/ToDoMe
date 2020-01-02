import { Linking, Text, TouchableHighlight } from 'react-native'

import { FONT } from '../../Style'
import React from 'react'

const containerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const fontStyle = {
  fontSize: 14,
  textDecorationLine: 'underline',
  color: FONT.color,
  opacity: 0.7,
}

const SUPPORT_EMAIL = 'mailto:polimathics@gmail.com?subject=Support'

const ReportProblem = () => {
  const launchURL = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log(`Can't handle url: ${url}`)
        } else {
          Linking.openURL(url).catch(err => {
            console.warn('openURL error', err)
          })
        }
      })
      .catch(err => console.warn('An unexpected error happened', err))
  }

  return (
    <TouchableHighlight style={containerStyle}>
      <Text style={fontStyle} onPress={() => launchURL(SUPPORT_EMAIL)}>
        report a problem
      </Text>
    </TouchableHighlight>
  )
}

export default ReportProblem
