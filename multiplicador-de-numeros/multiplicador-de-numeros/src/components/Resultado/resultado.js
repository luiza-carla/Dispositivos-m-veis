import { Text } from 'react-native';
import {styles} from './style'

const Resultado = ({ resultado }) => {
  return resultado !== null ? <Text style={styles.resultado}>Resultado: {resultado}</Text> : null;
};

export default Resultado;