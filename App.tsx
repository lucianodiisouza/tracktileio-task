import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = () => {
    setIsLoading(true)
    fetch(`http://localhost:3000/products`)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.warn(error))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isLoading && <ActivityIndicator />}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text>{JSON.stringify(item)}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
