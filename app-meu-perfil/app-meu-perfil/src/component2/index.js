import { View, Image } from 'react-native';
import { styles } from './style'; // Certifique-se de que está no caminho certo
import gato from '../../assets/images/gato.jpg';

function Component2() {
  return (
    <View style={styles.alinharimagem}> 
      <Image source={gato} style={[styles.tamanho, styles.alinharimagem, styles.bordatopo]} />
    </View>
  );
}

export default Component2;
