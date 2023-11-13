import { View, Text, StyleSheet } from 'react-native'

const EndList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have loaded all itens ✨</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#cccccc',
  },
})

export default EndList
