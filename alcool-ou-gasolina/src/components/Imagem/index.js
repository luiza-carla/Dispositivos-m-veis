import { Image } from 'react-native';
import { styles } from './style';

export default function ImagemCombustivel() {
  const imagem = 'https://www.brasilpostos.com.br/wp-content/uploads/2020/04/etanol-ou-gasolina-14-2-1024x512-1.jpg';
  return <Image source={{ uri: imagem }} style={styles.imagem} />;
}
