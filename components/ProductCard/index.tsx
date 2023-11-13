import { View, Text, Image, StyleSheet } from 'react-native'
import { IProductData } from '../../types'

export const ProductCard = (product: IProductData) => {
  return (
    <View style={styles.container}>
      <View style={styles.textColumn}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {product.description}
        </Text>
        <Text>${product.price}</Text>
      </View>
      <Image source={{ uri: product.image }} style={styles.productImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
})
