import { TextInput } from 'react-native';
import { styles } from './style';

export default function Campo({ valor, setValor }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Digite um número de 0 a 10"
      keyboardType="numeric"
      value={valor}
      onChangeText={setValor}
    />
  );
}
