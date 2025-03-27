import { View, Text } from 'react-native';
import {styles} from './style'

function Titulo(){
  return (
    <View style={styles.container}> 
    <Text style={styles.texto}>Multiplicador de números</Text>
    </View>
  )
}

export default Titulo