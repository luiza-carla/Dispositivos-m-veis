
import { Button } from 'react-native';

function buttonAumentar({ aumentar }) {
  return (
    <Button title="Aumentar" onPress={aumentar} color='red'/>
  )
}

export default buttonAumentar;
