import React, { useState } from 'react'
import Tts from 'react-native-tts';

import { Button, TextInput, View } from 'react-native'

const Speecher = () => {
  const [text, setText] = useState('')

  Tts.setDefaultLanguage('pt-BR');



  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <TextInput
        placeholder="Digite o texto aqui"
        style={{ backgroundColor: "#ccc", marginBottom: 24 }}
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Button title="Speech" color="#f10" onPress={() => Tts.speak(text)}>Speech</Button>
    </View >
  )
}

export default Speecher
