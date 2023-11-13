import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { IProductData } from './types'

export default function App() {
  const [data, setData] = useState<IProductData[]>([])
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
      <SafeAreaView style={styles.safeArea}>
        {isLoading && <ActivityIndicator />}
        <FlatList
          data={data}
          style={styles.flatlist}
          renderItem={({ item }) => (
            <View style={styles.flatListContainer}>
              <View style={styles.textColumn}>
                <Text style={styles.title}>{item.name}</Text>
                <Text
                  style={styles.description}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.description}
                </Text>
                <Text>${item.price}</Text>
              </View>
              <Image source={{ uri: item.image }} style={styles.productImage} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatListContainer: {
    flexDirection: 'row',
    height: 100,
    width: '98%',
    backgroundColor: '#efefef',
    marginVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  textColumn: {
    flexDirection: 'column',
    height: '100%',
    maxWidth: '75%',
    paddingVertical: 20,
    justifyContent: 'center',
    gap: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    flexWrap: 'wrap',
    fontStyle: 'italic',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  safeArea: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
    paddingHorizontal: 5,
  },
})
