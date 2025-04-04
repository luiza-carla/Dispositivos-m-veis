import { Text } from 'react-native';
import { styles } from './style';

export default function Resultado({ resultado }) {
  return <Text style={styles.resultado}>{resultado}</Text>;
}
