import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Star from './Star'

const StarRating = (props) => {
    const {rating, setRating} = props
  return (
    <View>
      <View style={styles.starLayout}>
            {Array.from({ length: 5 },(_,index) => (
                <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
                    <Star isFilled={index < rating} />
                </TouchableOpacity>
            ))}
        </View>
    </View>
  )
}

const StarRatingDisplay = ({rating}) => {
    return (
        <View>
          <View style={styles.starLayout}>
                {Array.from({ length: 5 },(_,index) => (
                    <Star key={index} isFilled={index < rating} />
                ))}
            </View>
        </View>
      )
    }


const styles = StyleSheet.create({
    starLayout: {
        display: "flex",
        flexDirection: "row"
    }
})
export default StarRating
export {StarRatingDisplay}

