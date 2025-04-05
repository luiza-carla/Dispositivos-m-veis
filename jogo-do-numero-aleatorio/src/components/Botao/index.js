import { Pressable, Text } from 'react-native';
import { styles } from './style';

export default function Botao({ texto, onPress }) {
  return (
    <Pressable style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{texto}</Text>
    </Pressable>
  );
}
