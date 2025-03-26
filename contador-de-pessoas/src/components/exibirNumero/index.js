import {View, Text } from 'react-native';
import {styles} from './style'

function exibirNumero({ numero }) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Contador de Pessoas</Text>
    <Text style={styles.counter}>{numero}</Text>
    </View>
    );
}

export default exibirNumero;
