import { TextInput } from 'react-native';
import { styles } from './style';

export default function Campo({ placeholder, valor, setValor }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType="numeric"
      value={valor}
      onChangeText={setValor}
    />
  );
}
