import { View, Text, Image, StyleSheet } from "react-native";
import { IProductData } from "../../types";

const ProductCard = (product: IProductData) => {
    const { name, description, price, image } = product;
    return (
        <View style={styles.container}>
            <View style={styles.textColumn}>
                <Text style={styles.title}>{name}</Text>
                <Text
                    style={styles.description}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {description}
                </Text>
                <Text>${price}</Text>
            </View>
            <Image source={{ uri: image }} style={styles.productImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 100,
        width: "98%",
        backgroundColor: "#efefef",
        marginVertical: 5,
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 10,
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    textColumn: {
        flexDirection: "column",
        height: "100%",
        maxWidth: "75%",
        paddingVertical: 20,
        justifyContent: "center",
        gap: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    description: {
        flexWrap: "wrap",
        fontStyle: "italic",
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
});

export default ProductCard;
