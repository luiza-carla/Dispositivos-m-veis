import { TextInput } from 'react-native';
import { styles } from './style';

export default function Campo({ tipo, value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={`Preço do ${tipo}`}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
}
