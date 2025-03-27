
import { TextInput } from 'react-native';
import {styles} from './style'

const NumeroInput = ({ placeholder, valor, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType="numeric"
      onChangeText={onChangeText}
      value={valor}
    />
  );
};

export default NumeroInput
