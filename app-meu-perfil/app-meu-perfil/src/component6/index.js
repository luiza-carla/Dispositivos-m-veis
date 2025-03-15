import {View, Text} from 'react-native'
import {styles} from './style'

function Component6(){
  return(
<View style={styles.alinhar}>
<Text style={[styles.textotitulo, styles.alinhartexto]}> Projetos </Text>
<Text style={[styles.texto, styles.alinhartexto, styles.bordabaixo]}> Projetos disponíveis no GitHub luiza-carla </Text>
</View>
  )
}

export default Component6