import { useEffect, useState } from 'react'
import { IProductData } from '../../types'
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import { ProductCard } from '../../components/ProductCard'

export const Home = () => {
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
    <>
      {isLoading && <ActivityIndicator />}
      <FlatList
        data={data}
        style={styles.flatlist}
        renderItem={({ item }) => <ProductCard {...item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    paddingHorizontal: 5,
  },
})
