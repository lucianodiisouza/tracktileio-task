import { useEffect, useState } from 'react'
import { IProductData } from '../../types'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { ProductCard } from '../../components/ProductCard'
import { ErrorCard } from '../../components/ErrorCard'
import { SearchInput } from '../../components/SearchInput'

export const Home = () => {
  const [data, setData] = useState<IProductData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const fetchData = () => {
    setIsLoading(true)
    fetch(`http://localhost:3000/products`)
      .then((response) => response.json())
      .then((response) => {
        setData(response)
        setError(false)
      })
      .catch((error) => setError(true))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {isLoading && <ActivityIndicator />}
      {error && <ErrorCard />}
      <SearchInput search={search} setSearch={setSearch} />
      {data && (
        <FlatList
          data={data}
          style={styles.flatlist}
          renderItem={({ item }) => <ProductCard {...item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    paddingHorizontal: 5,
  },
})
