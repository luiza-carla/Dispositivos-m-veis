import {View, Text} from 'react-native'
import {styles} from './style'

function Component5(){
  return(
<View style={styles.alinhar}>
<Text style={[styles.textotitulo, styles.alinhartexto]}> Experiências </Text>
<Text style={[styles.texto, styles.alinhartexto, styles.bordabaixo]}> Experiências com projetos feitos na própria faculdade </Text>
</View>
  )
}

export default Component5