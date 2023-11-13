import { Text, View, Image, StyleSheet } from 'react-native'

const ErrorCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Oops! Error while fetching data</Text>
      <Image
        source={require('../../assets/error.png')}
        style={styles.errorImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  errorText: {
    fontSize: 18,
  },
  errorImage: { width: 200, height: 200 },
})

export default ErrorCard
