import {View, Text} from 'react-native'
import {styles} from './style'

function Component4(){
  return(
<View style = {styles.alinhar}>
<Text style={[styles.textotitulo, styles.alinhartexto, styles.bordatopo]}> Formação </Text>
<Text style={[styles.texto, styles.alinhartexto]}> Ensino médio com técnico em Química na ETEC-PG </Text>
<Text style={[styles.texto, styles.bordabaixo]}> Formando em ADS na FATEC-PG </Text>
</View>
  )
}

export default Component4