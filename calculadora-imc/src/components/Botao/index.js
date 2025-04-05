import { Pressable, Text } from 'react-native';
import { styles } from './style';

export default function Botao({ acao }) {
  return (
    <Pressable style={styles.botao} onPress={acao}>
      <Text style={styles.textoBotao}>Calcular</Text>
    </Pressable>
  );
}
