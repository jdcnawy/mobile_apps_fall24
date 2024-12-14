import { StyleSheet, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const Star = (props) => {
    const {isFilled} = props
    return (
        <View>
            {isFilled ? 
            <FontAwesome name="star" size={30} color="#ff6600" /> :
            <FontAwesome name="star-o" size={30} color="#ff6600" />
            }
        </View>
    )
}

export default Star