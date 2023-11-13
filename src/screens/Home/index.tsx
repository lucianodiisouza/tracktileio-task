import { useEffect, useState } from "react";
import { IProductData } from "../../types";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

import {
    EmptyList,
    EndList,
    ErrorCard,
    ProductCard,
    SearchInput,
} from "../../components";
import { BASE_URL } from "../../utils/apiUrl";

export const Home = () => {
    const [data, setData] = useState<IProductData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [reachedEnd, setReachedEnd] = useState<boolean>(false);
    const [limit, setLimit] = useState<number>(10);

    const renderEndList = isLoading ? <ActivityIndicator /> : <EndList />;

    const fetchData = () => {
        setIsLoading(true);
        fetch(`${BASE_URL}/products?_limit=${limit}&q=${search}`)
            .then((response) => {
                if (response.ok) {
                    return response.json().then((data) => ({ data }));
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            })
            .then(({ data }) => {
                // prevent unlimited fetches since we reach the
                // end of the results
                const reachedEnd = data.length < limit;
                setData(data);
                setReachedEnd(reachedEnd);
                setError(false);
            })
            .catch((error) => setError(true))
            .finally(() => setIsLoading(false));
    };

    // using onEndReach from FlatList we can trigger a function
    // when the last item loaded appears on screen
    const loadMoreProducts = () => {
        if (!reachedEnd) {
            setLimit((prev) => prev + 10);
        }
    };

    useEffect(() => {
        fetchData();
    }, [search, limit]);

    return (
        <View style={styles.container}>
            {error && <ErrorCard />}
            {!error && data.length === 0 ? (
                <EmptyList />
            ) : (
                <>
                    <SearchInput search={search} setSearch={setSearch} />
                    <FlatList
                        data={data}
                        style={styles.flatlist}
                        renderItem={({ item }) => <ProductCard {...item} />}
                        keyExtractor={(item) => item.id}
                        onEndReached={loadMoreProducts}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={renderEndList}
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatlist: {
        flex: 1,
        paddingHorizontal: 5,
    },
});
