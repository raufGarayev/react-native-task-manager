import { StyleSheet, Text } from "react-native"

const CustomText = ({text, style}) => {
    
    return (
        <Text style={[styles.fontFamilyClass, style]}>{text}</Text>
    )
    
}

const styles = StyleSheet.create({
    fontFamilyClass: {
        fontFamily: 'Poppins-Regular',
    }
})

export default CustomText