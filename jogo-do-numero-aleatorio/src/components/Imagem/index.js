import { Image } from 'react-native';
import { styles } from './style';

export default function Imagem() {
  return (
    <Image
      source={{ uri: 'https://www.freecodecamp.org/portuguese/news/content/images/2022/10/img-1.jpg' }}
      style={styles.imagem}
    />
  );
}
