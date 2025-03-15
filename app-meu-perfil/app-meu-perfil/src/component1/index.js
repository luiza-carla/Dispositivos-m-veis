import { View, Text } from 'react-native';
import { styles } from './style';


function Component1() {
  return (
    <View>
      <Text style={[styles.texto, styles.alinhartexto]}>App meu perfil</Text>
    </View>
  );
}

export default Component1;
