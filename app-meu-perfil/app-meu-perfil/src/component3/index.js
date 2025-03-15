import {View, Text} from 'react-native'
import {styles} from './style'

function Component3(){
  return(
<View style = {styles.alinhar}>
<Text style={[styles.textotitulo, styles.alinhartexto, styles.bordatopo]}> Dados Pessoais </Text>
<Text style={styles.texto}> Nome: Luiza Carla </Text>
<Text style={styles.texto}> Data de nascimento: 30/07/2004 </Text>
<Text style={[styles.texto, styles.bordabaixo]}> Idade: 20 </Text>
</View>
  )
}

export default Component3